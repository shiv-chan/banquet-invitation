import Link from "next/link";
import RsvpForm from "@/app/ui/rsvp-form";
import { notFound } from "next/navigation";
import { fetchGuest, fetchCompanies } from "@/app/lib/data";
import { Guest } from "@/app/lib/definitions";

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;

	if (id === "undefined") {
		notFound();
	}

	const guest: Guest = await fetchGuest(id);
	const companies: Guest[] = await fetchCompanies(id, guest.group_id);

	return <RsvpForm guest={guest} companies={companies} />;
}
