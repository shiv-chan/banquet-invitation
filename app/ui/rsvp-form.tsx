"use client";

import Link from "next/link";
import { merriweather } from "@/app/ui/fonts";
import { Guest } from "@/app/lib/definitions";
import { SubmitButton } from "@/app/ui/button";
import { updateRSVP, State } from "@/app/lib/actions";
import { useFormState } from "react-dom";

interface RsvpFormProps {
	guest: Guest;
	companies: Guest[];
}

export default function RsvpForm({ guest, companies }: RsvpFormProps) {
	const updateRSVPWithID = updateRSVP.bind(null, guest.id, guest.group_id);
	const initialState: State = { message: null, errors: {} };
	const [state, formAction] = useFormState(updateRSVPWithID, initialState);

	return (
		<form action={formAction} className='mt-8 font-serif text-sm sm:text-base'>
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
							value={1}
							defaultChecked={guest.rsvp != null && guest.rsvp}
							className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
							aria-describedby='rsvp-error'
						/>
						<label htmlFor='accept' className='ml-2 cursor-pointer'>
							Joyfully Accept
						</label>
					</div>
					<div className='flex items-center'>
						<input
							id='decline'
							name='rsvp'
							type='radio'
							value={0}
							defaultChecked={guest.rsvp != null && !guest.rsvp}
							className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
							aria-describedby='rsvp-error'
						/>
						<label htmlFor='decline' className='ml-2 cursor-pointer'>
							Regretfully Decline
						</label>
					</div>
					<div id='rsvp-error' aria-live='polite' aria-atomic='true'>
						{state?.errors?.rsvp &&
							state.errors.rsvp.map((error: string) => (
								<p className='mt-2 text-sm italic text-red-500' key={error}>
									{error}
								</p>
							))}
					</div>
				</div>
				{companies.length ? (
					<div>
						<p className='font-bold'>Joining with:</p>
						{companies.map(company => (
							<div key={company.id} className='flex items-center mt-2'>
								<input
									id={company.id}
									name={`${company.id}_rsvp`}
									type='checkbox'
									value={1}
									defaultChecked={company.rsvp != null && company.rsvp}
									className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
								/>
								<label htmlFor={company.id} className='ml-2 cursor-pointer'>
									{company.first} {company.last}
								</label>
							</div>
						))}
					</div>
				) : (
					""
				)}
				<div>
					<p className='font-serif font-bold mb-2 block'>
						Please let us know if there are any dietary restrictions
						<span className='font-serif font-normal mb-4 block italic'>
							(*Please leave it blank if you don&apos;t have any)
						</span>
					</p>
					<div className='mb-2'>
						{companies.length ? (
							<label
								htmlFor={`diet-${guest.first}`}
								className='font-serif mb-1 block'
							>
								{guest.first} {guest.last} (Yourself):
							</label>
						) : (
							""
						)}
						<textarea
							id={`diet-${guest.first}`}
							name='diet'
							rows={1}
							cols={50}
							defaultValue={guest.restrictions as string}
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
								name={`${company.id}_diet`}
								rows={1}
								cols={50}
								defaultValue={company.restrictions as string}
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
						rows={5}
						cols={50}
						defaultValue={guest.message as string}
						className='font-serif w-full rounded-sm border-2 border-gray-200'
					/>
				</div>
			</div>
			<SubmitButton
				resolvedText={guest.rsvp != null ? "Update" : "Submit"}
				pendingText={guest.rsvp != null ? "Updating..." : "Submitting..."}
			/>
			<Link
				href='/rsvp'
				className='mt-4 block text-center font-serif border border-solid border-black bg-white text-black w-full text-base bold sm:text-lg'
			>
				Back
			</Link>
		</form>
	);
}
