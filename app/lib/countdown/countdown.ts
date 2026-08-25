const START_HOUR = 18;
const EVENT_DATE = new Date(2024, 9, 12, START_HOUR) as Date;

export type CountdownState =
 { state: "before"; days: number; } | { state: "today"; } | { state: "after";}

export function getCountdownState(now: Date): CountdownState {
    const HoursInDays = (1 / 24) * START_HOUR; // hours in days
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = (EVENT_DATE.getTime() - now.getTime()) / oneDay;

    if (diffDays > HoursInDays) {
        const days: number =
            diffDays % 1 > HoursInDays ? Math.ceil(diffDays) : Math.floor(diffDays);
        return { state: "before", days };
    } else if (diffDays > 0 && diffDays <= HoursInDays && now.getHours() < START_HOUR) {
        return { state: "today" };
    } else {
        return { state: "after" };
    }
}