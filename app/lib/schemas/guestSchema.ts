import { z } from "zod";

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
    restrictions: z
        .string()
        .trim()
        .nullable()
        .transform(val => {
            return val || null;
        }),
    message: z
        .string()
        .trim()
        .nullable()
        .transform(val => {
            return val || null;
        }),
    self_submitted: z.boolean(),
});


const SearchGuest = GuestSchema.pick({
    first: true,
    last: true,
});

const UpdateRSVP = GuestSchema.pick({
    rsvp: true,
    restrictions: true,
    message: true,
});

export { GuestSchema, SearchGuest, UpdateRSVP };