import { expect, test, describe } from "@jest/globals";
import { getCountdownState } from "./countdown";

describe("getCountdownState", () => {
    test("returns 'before' state with correct days: before the start hour", () => {
        const now = new Date(2024, 9, 10, 17); // Two days before the event before the start hour
        const state = getCountdownState(now);
        expect(state).toEqual({ state: "before", days: 2 });
    });

    test("returns 'before' state with correct days: after the start hour", () => {
        const now = new Date(2024, 9, 10, 19); // Two days before the event after the start hour
        const state = getCountdownState(now);
        expect(state).toEqual({ state: "before", days: 2 });
    });

    test("returns 'before' state with correct days: less than 24 hours before the event", () => {
        const now = new Date(2024, 9, 11, 19); // One day before the event after the start hour
        const state = getCountdownState(now);
        expect(state).toEqual({ state: "before", days: 1 });
    });

    test("returns 'today' state when within the event day", () => {
        const now = new Date(2024, 9, 12, 0); // Same day as the event
        const state = getCountdownState(now);
        expect(state).toEqual({ state: "today" });
    });

    test("returns 'after' state on the event day after the start hour", () => {
        const now = new Date(2024, 9, 12, 19); // Same day as the event after the start hour
        const state = getCountdownState(now);
        expect(state).toEqual({ state: "after" });
    });

    test("returns 'after' state when after the event", () => {
        const now = new Date(2024, 9, 13, 10); // One day after the event
        const state = getCountdownState(now);
        expect(state).toEqual({ state: "after" });
    });
});