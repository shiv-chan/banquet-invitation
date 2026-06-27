import { neon, Pool, type PoolClient } from '@neondatabase/serverless';
import { testGuests as guests } from '@/app/lib/test/seed-data';
const sql = neon(<string>process.env.DATABASE_URL);
const pool = new Pool({ connectionString: <string>process.env.DATABASE_URL });

async function resetDatabase(client: PoolClient): Promise<void> {
   await client.query(`TRUNCATE TABLE guests, guest_logs RESTART IDENTITY CASCADE;`);
}

async function seedTestData(client: PoolClient) : Promise<void> {
    // guests table
   await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
   await client.query(`
    CREATE TABLE IF NOT EXISTS guests (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      group_id INT NOT NULL,
      first VARCHAR(255) NOT NULL,
      last VARCHAR(255) NOT NULL,
      email TEXT NOT NULL,
      rsvp BOOLEAN,
      restrictions TEXT,
      message TEXT,
      self_submitted BOOLEAN DEFAULT FALSE
    );
  `);

   // Seed data
   	await Promise.all(
		guests.map(async guest => {
			return client.query(`
        INSERT INTO guests (id, group_id, first, last, email, rsvp, restrictions, message, self_submitted)
        VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (id) DO NOTHING;
      `, [guest.group_id, guest.first, guest.last, guest.email, guest.rsvp, guest.restrictions, guest.message, guest.self_submitted]);
		})
	);
}

async function createGuestLogs(client: PoolClient): Promise<void> {
    // guest_logs table
	await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
	await client.query(`
	    DO $$
	    BEGIN
            IF NOT EXISTS (
                SELECT 1 FROM pg_type WHERE typname = 'action_type'
            ) THEN
                CREATE TYPE action_type AS ENUM ('Search', 'RSVP');
            END IF;
        END $$;
		
		CREATE TABLE IF NOT EXISTS guest_logs (
			id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
			first VARCHAR(255) NOT NULL,
			last VARCHAR(255) NOT NULL,
			action action_type NOT NULL,
			details JSON NOT NULL,
			timestamp TIMESTAMPTZ NOT NULL
		);
	`);
	return;
}

export async function POST(request: Request) {
    if (process.env.ALLOW_DB_RESET !== 'true') {
        return Response.json({ error: "Not found" }, { status: 404 });
    }

    if (request.method !== 'POST') {
        return Response.json( { error:"Method Not Allowed"}, { status: 405 });
    }

    const secret = request.headers.get('TEST-SECRET');
    if(secret !== process.env.TEST_SECRET) {
        return  Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await pool.connect();
	try {
		await client.query('BEGIN');
        await resetDatabase(client);
		await seedTestData(client);
		await createGuestLogs(client);
		await client.query('COMMIT');

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.query('ROLLBACK');
        console.error("Error seeding database:", error);
		return Response.json({ error: "Internal Server Error" }, { status: 500 });
	} finally {
       client.release();
    }
}