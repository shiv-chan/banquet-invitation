import { sql } from "@vercel/postgres";
import { Guest } from "./definitions";

export async function fetchGuest(id: string) {
	try {
		const data = await sql<Guest>`
            SELECT *
            FROM guests
            WHERE id = ${id};
        `;

		return data.rows[0];
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to fetch data of a guest");
	}
}

export async function fetchCompanies(id: string, group_id: number) {
	try {
		const data = await sql<Guest>`
            SELECT *
            FROM guests
            WHERE group_id = ${group_id} AND NOT id = ${id}
            ORDER BY self_submitted, first, last ASC;
        `;

		return data.rows;
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to fetch guest's companies");
	}
}
