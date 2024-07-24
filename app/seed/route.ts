import { db } from "@vercel/postgres";
import { guests } from "../lib/seed-data";

const client = await db.connect();

async function seedGuests() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await client.sql`
    CREATE TABLE IF NOT EXISTS guests (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      group_id INT NOT NULL,
      first VARCHAR(255) NOT NULL,
      last VARCHAR(255) NOT NULL,
      email TEXT NOT NULL,
      rsvp BOOLEAN,
      restrictions TEXT,
      message TEXT
    );
  `;

	const insertedGuests = await Promise.all(
		guests.map(async guest => {
			return client.sql`
        INSERT INTO guests (id, group_id, first, last, email)
        VALUES (uuid_generate_v4(), ${guest.group_id}, ${guest.first}, ${guest.last}, ${guest.email})
        ON CONFLICT (id) DO NOTHING;
      `;
		})
	);

	return insertedGuests;
}

export async function GET() {
	try {
		await client.sql`BEGIN`;
		await seedGuests();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}
