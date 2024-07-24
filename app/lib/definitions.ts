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
