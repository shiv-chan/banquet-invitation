type TestGuest = {
    group_id: number;
    first: string;
    last: string;
    email: string;
    rsvp: boolean | null;
    restrictions?: string;
    message?: string;
    self_submitted: boolean;
}

export const testGuests: TestGuest[] = [
    {
        group_id: 0,
        first: "Karla",
        last: "Webb",
        email: "kwebb@example.com",
        rsvp: true,
        message: "Congrats!",
        self_submitted: true,
    },
    {
        group_id: 0,
        first: "Rita",
        last: "Webb",
        email: "ritaw@example.com",
        rsvp: true,
        restrictions: "peanuts",
        self_submitted: false,
    },
    {
        group_id: 1,
        first: "Jannie",
        last: "Dougherty",
        email: "jenniedou@example.com",
        rsvp: true,
        restrictions: "soy, eggs",
        message: "Thank you",
        self_submitted: true,
    },
    {
        group_id: 2,
        first: "Pat",
        last: "Sharp",
        email: "patsharp@example.com",
        rsvp: null,
        self_submitted: false,
    },
    {
        group_id: 3,
        first: "Felecia",
        last: "Gillespie",
        email: "fgillespie@example.com",
        rsvp: null,
        self_submitted: false,
    },
    {
        group_id: 3,
        first: "Cecile",
        last: "Weeks",
        email: "cweeks@example.com",
        rsvp: null,
        self_submitted: false,
    },
    {
        group_id: 4,
        first: "Randy",
        last: "Skinner",
        email: "rskinner@example.com",
        rsvp: null,
        self_submitted: false,
    },
    {
        group_id: 5,
        first: "Beth",
        last: "Ramirez",
        email: "bethr@example.com",
        rsvp: true,
        message: "Happy for you!!",
        self_submitted: true,
    },
    {
        group_id: 5,
        first: "Bernardo",
        last: "Sims",
        email: "bersims@example.com",
        rsvp: true,
        restrictions: "crabs",
        message: "Congratulations 🫶",
        self_submitted: true,
    },
    {
        group_id: 6,
        first: "Laverne",
        last: "Bryant",
        email: "laverneb@example.com",
        rsvp: null,
        self_submitted: false,
    },
    {
        group_id: 7,
        first: "Hanna",
        last: "Kane",
        email: "hk99@example.com",
        rsvp: true,
        restrictions: "eggs",
        message: "Can't wait!",
        self_submitted: true,
    },
    {
        group_id: 8,
        first: "Jeffrey",
        last: "Lane",
        email: "jlane@example.com",
        rsvp: null,
        self_submitted: false,
    },
];