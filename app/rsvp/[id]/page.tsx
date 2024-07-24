import Link from "next/link";
import { Button } from "@/app/ui/button";
import { merriweather } from "@/app/ui/fonts";
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

	return (
		<form action='' className='mt-8 font-serif text-sm sm:text-base'>
			<h2
				className={`${merriweather.className} italic font-bold text-xl lg:text-2xl`}
			>
				{guest.first} {guest.last}
			</h2>
			<div className='mt-4 flex flex-col gap-y-8'>
				<div className='flex flex-col gap-y-2'>
					<div className='flex items-center'>
						<input
							id='accept'
							name='rsvp'
							type='radio'
							value='accept'
							className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
							aria-describedby='rsvp-error'
						/>
						<label htmlFor='accept' className='ml-2'>
							Joyfully Accept
						</label>
					</div>
					<div className='flex items-center'>
						<input
							id='decline'
							name='rsvp'
							type='radio'
							value='decline'
							className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
							aria-describedby='rsvp-error'
						/>
						<label htmlFor='decline' className='ml-2'>
							Regretfully Decline
						</label>
					</div>
				</div>
				<div>
					<p className='font-bold'>Joining with:</p>
					{companies.map(company => (
						<div key={company.id} className='flex items-center mt-2'>
							<input
								id={company.id}
								name='rsvp'
								type='checkbox'
								value='accept'
								className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
								aria-describedby='rsvp-error'
							/>
							<label htmlFor={company.id} className='ml-2'>
								{company.first} {company.last}
							</label>
						</div>
					))}
				</div>
				<div>
					<p className='font-serif font-bold mb-2 block'>
						Please let us know if there are any dietary restrictions
					</p>
					<div className='mb-2'>
						<label
							htmlFor={`diet-${guest.first}`}
							className='font-serif mb-1 block'
						>
							{guest.first} {guest.last} (Yourself):
						</label>
						<textarea
							id={`diet-${guest.first}`}
							name='diet'
							rows='1'
							cols='50'
							className='font-serif w-full rounded-sm border-2 border-gray-200'
						/>
					</div>
					{companies.map(company => (
						<div key={company.id} className='mb-2'>
							<label
								htmlFor={`diet-${company.first}`}
								className='font-serif mb-1 block'
							>
								{company.first} {company.last}:
							</label>
							<textarea
								id={`diet-${company.first}`}
								name='diet'
								rows='1'
								cols='50'
								className='font-serif w-full rounded-sm border-2 border-gray-200'
							/>
						</div>
					))}
				</div>
				<div>
					<label htmlFor='message' className='font-serif font-bold mb-1 block'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						rows='5'
						cols='50'
						className='font-serif w-full rounded-sm border-2 border-gray-200'
					/>
				</div>
			</div>
			<Button type='submit' className='w-full mt-8'>
				Submit
			</Button>
			<Link
				href='/rsvp'
				className='mt-4 block text-center border border-solid border-black bg-white text-black w-full text-base bold sm:text-lg'
			>
				Back
			</Link>
		</form>
	);
}
