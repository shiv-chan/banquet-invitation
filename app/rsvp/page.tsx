"use client";

import { SubmitButton } from "@/app/ui/button";
import Link from "next/link";
import { searchGuest, State } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function Page() {
	const initialState: State = { message: null, errors: {} };
	const [state, formAction] = useFormState(searchGuest, initialState);

	return (
		<form action={formAction} className='mt-8'>
			<div>
				<label
					htmlFor='first'
					className='font-serif mb-1 block text-sm sm:text-base'
				>
					First Name
				</label>
				<input
					id='first'
					name='first'
					type='text'
					className='font-serif w-full rounded-sm border-2 border-gray-200 text-sm sm:text-base'
					aria-describedby='first-error'
				/>
			</div>
			<div id='first-error' aria-live='polite' aria-atomic='true'>
				{state.errors?.first &&
					state.errors.first.map((error: string) => (
						<p className='mt-2 text-sm text-red-500' key={error}>
							{error}
						</p>
					))}
			</div>
			<div className='mt-4'>
				<label
					htmlFor='last'
					className='font-serif mb-1 block text-sm sm:text-base'
				>
					Last Name
				</label>
				<input
					id='last'
					name='last'
					type='text'
					className='font-serif w-full rounded-sm border-2 border-gray-200 text-sm sm:text-base'
					aria-describedby='last-error'
				/>
			</div>
			<div id='last-error' aria-live='polite' aria-atomic='true'>
				{state.errors?.last &&
					state.errors.last.map((error: string) => (
						<p className='mt-2 text-sm text-red-500' key={error}>
							{error}
						</p>
					))}
			</div>
			<SubmitButton resolvedText='Next' pendingText='Searching...' />
			<Link
				href='/'
				className='mt-4 block text-center font-serif border border-solid border-black bg-white text-black w-full text-base bold sm:text-lg'
			>
				Back
			</Link>
		</form>
	);
}
