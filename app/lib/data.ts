import { FullQueryResults, neon } from '@neondatabase/serverless';
import { Guest } from "@/app/lib/definitions";

const sql = neon(<string>process.env.DATABASE_URL,  { fullResults: true });

export async function fetchGuest(id: string): Promise<Guest> {
	let data: FullQueryResults<false>;
	try {
		data = await sql`
            SELECT *
            FROM guests
            WHERE id = ${id};
        `;

		return data.rows[0] as Guest;
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to fetch data of a guest");
	}
}

export async function fetchCompanies(id: string, group_id: number): Promise<Guest[]> {
	try {
		const data: FullQueryResults<false> = await sql`
            SELECT *
            FROM guests
            WHERE group_id = ${group_id} AND NOT id = ${id}
            ORDER BY self_submitted, first, last ASC;
        `;

		return data.rows as Guest[];
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to fetch guest's companies");
	}
}
