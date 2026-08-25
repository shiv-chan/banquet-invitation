import { expect, test, describe } from '@jest/globals';
import { SearchGuest, UpdateRSVP } from "./guestSchema";

describe("SearchGuest Schema", () => {
    test("accepts valid inputs", () => {
        const result = SearchGuest.safeParse({
            first: "Karla",
            last: "Webb"
        });

        expect(result.success).toBe(true);
    });

    test("rejects empty first name input", () => {
        const result = SearchGuest.safeParse({
            first: "",
            last: "Webb"
        });

        expect(result.success).toBe(false);
    });

    test("rejects empty last name input", () => {
        const result = SearchGuest.safeParse({
            first: "Karla",
            last: ""
        });

        expect(result.success).toBe(false);
    });

    test("trims whitespace from first and last name inputs", () => {
        const result = SearchGuest.safeParse({
            first: " Karla ",
            last: " Webb "
        });

        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.data.first).toBe("Karla");
            expect(result.data.last).toBe("Webb");
        }
    });

});

describe("UpdateRSVP Schema", () => {
    test("accepts valid inputs", () => {
        const result = UpdateRSVP.safeParse({
            rsvp: "1",
            restrictions: "",
            message: "Congrats!"
        });

        expect(result.success).toBe(true);
    });

    test("rejects invalid inputs", () => {
        const result = UpdateRSVP.safeParse({
            rsvp: 0,
            restrictions: "",
            message: "Congrats!"
        });

        expect(result.success).toBe(false);
    });

    test("rejects missing rsvp field", () => {
        const result = UpdateRSVP.safeParse({
            restrictions: "",
            message: "Congrats!"
        });

        expect(result.success).toBe(false);
    });
});