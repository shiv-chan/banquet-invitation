export type Guest = {
	id: string;
	group_id: number;
	first: string;
	last: string;
	email: string;
	rsvp: boolean | null;
	restrictions: string | null;
	message: string | null;
};

export type Log = {
	id: string;
	first: string;
	last: string;
	action: "Search" | "RSVP";
	details: Object;
	timestamp: Date;
};
