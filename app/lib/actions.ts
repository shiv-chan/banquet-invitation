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
	rsvp: z
		.string({
			invalid_type_error: "Please select an option.",
		})
		.transform(val => {
			if (val === "0") return 0;
			if (val === "1") return 1;
		})
		.pipe(z.coerce.boolean()),
	restrictions: z.string().trim().nullable(),
	message: z.string().trim().nullable(),
});

const SearchGuest = GuestSchema.omit({
	id: true,
	group_id: true,
	rsvp: true,
	restrictions: true,
	message: true,
});

export type State = {
	errors?: {
		first?: string[];
		last?: string[];
		rsvp?: string[];
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
	let RSVPd: boolean = false;
	const { first, last } = validatedFields.data;

	try {
		const guest = await sql<Guest>`
            SELECT *
            FROM guests
            WHERE first = ${first} AND last = ${last};
        `;

		guest_id = guest.rows[0]?.id;
		RSVPd = guest.rows[0]?.rsvp !== null;
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to search a guest.");
	}

	if (RSVPd) {
		redirect(`/rsvp/${guest_id}/edit`);
	}

	revalidatePath(`/rsvp/${guest_id}`);
	redirect(`/rsvp/${guest_id}`);
}

const UpdateRSVP = GuestSchema.pick({
	rsvp: true,
});

export async function updateRSVP(
	id: string,
	group_id: number,
	prevState: State,
	formData: FormData
) {
	const rawFormData = Object.fromEntries(formData.entries());
	/**
	 *  rawFormData is the following format:
	 *  {
	 * 		rsvp: 1 | 0;
	 * 		diet: string | null;
	 * 		message: string | null;
	 * 		[id]_rsvp: 1 | 0;  // if they have companies
	 *      [id]_diet: string: null // if they have companies
	 * 	}
	 */

	const validatedFields = UpdateRSVP.safeParse({
		rsvp: formData.get("rsvp"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to update RSVP.",
		};
	}

	let mainRsvp: boolean | null = null;
	let mainDiet: string | null = null;
	let message: string | null = null;
	let companiesMap = new Map<
		string,
		{ rsvp?: boolean | null; diet?: string | null }
	>();

	// get the accompanied guests and assign them to companiesMap
	try {
		const companiesIDs = await sql`
			SELECT id
			FROM guests
			WHERE group_id = ${group_id} AND NOT id = ${id}
		`;

		companiesIDs.rows.forEach(row =>
			companiesMap.set(row.id, { rsvp: false, diet: null })
		);
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to fetch the group.");
	}

	for (const key in rawFormData) {
		if (rawFormData[key]) {
			if (key.includes("rsvp")) {
				if (key.includes("_")) {
					const company_id = key.substring(0, key.indexOf("_"));
					companiesMap.set(company_id, {
						...companiesMap.get(company_id),
						rsvp: true,
					});
				} else {
					mainRsvp = validatedFields.data.rsvp;
				}
			}
			if (key.includes("diet")) {
				if (key.includes("_")) {
					const company_id = key.substring(0, key.indexOf("_"));
					companiesMap.set(company_id, {
						...companiesMap.get(company_id),
						diet: (<string>rawFormData[key]).trim() || null,
					});
				} else {
					mainDiet = (<string>rawFormData[key]).trim() || null;
				}
			}
			if (key === "message") {
				message = (<string>rawFormData[key]).trim() || null;
			}
		}
	}

	// update the main guest's columns
	try {
		if (!mainRsvp) mainDiet = null;
		await sql`
			UPDATE guests
			SET	rsvp = ${mainRsvp}, restrictions = ${mainDiet}, message = ${message}
			WHERE id = ${id}
		`;
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to update RSVP for the main guest.");
	}

	// update the companies' columns
	try {
		if (companiesMap.size) {
			companiesMap.forEach(async (company, key) => {
				if (!company.rsvp) company.diet = null;
				await sql`
					UPDATE guests
					SET rsvp = ${company.rsvp},
						restrictions = ${company.diet},
						message = ${message}
					WHERE id = ${key}
				`;
			});
		}
	} catch (e) {
		console.error("Database Error:", e);
		throw new Error("Failed to update RSVP for the accompanied guest(s).");
	}

	redirect(`/rsvp/thank-you`);
}
