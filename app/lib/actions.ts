"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Guest } from "./definitions";

const GuestSchema = z.object({
	id: z.string(),
	group_id: z.coerce.number(),
	first: z.string().trim().min(1, {
		message: "Please enter your first name.",
	}),
	last: z.string().trim().min(1, {
		message: "Please enter your last name.",
	}),
	email: z.string().email(),
	rsvp: z.boolean().nullable(),
	restrictions: z.string().nullable(),
	message: z.string().nullable(),
});

const SearchGuest = GuestSchema.omit({
	id: true,
	group_id: true,
	email: true,
	rsvp: true,
	restrictions: true,
	message: true,
});

export type State = {
	errors?: {
		first?: string[];
		last?: string[];
	};
	message?: string | null;
};

export async function searchGuest(prevState: State, formData: FormData) {
	const validatedFields = SearchGuest.safeParse({
		first: formData.get("first"),
		last: formData.get("last"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to search a guest.",
		};
	}

	let guest_id: string = "";
	const { first, last } = validatedFields.data;

	try {
		const guest = await sql<Guest>`
            SELECT *
            FROM guests
            WHERE first = ${first} AND last = ${last};
        `;

		guest_id = guest.rows[0]?.id;
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to search a guest.");
	}

	revalidatePath(`/rsvp/${guest_id}`);
	redirect(`/rsvp/${guest_id}`);
}
