import Link from "next/link";
import { Button } from "@/app/ui/button";
import { merriweather } from "@/app/ui/fonts";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;

	if (id !== "1") {
		notFound();
	}

	return (
		<form action='' className='mt-8 font-serif text-sm sm:text-base'>
			<h2
				className={`${merriweather.className} italic font-bold text-xl lg:text-2xl`}
			>
				To Mr. Chandler White
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
					<p>Joining with:</p>
					<div className='flex items-center mt-2'>
						<input
							id='lilian'
							name='rsvp'
							type='checkbox'
							value='accept'
							className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
							aria-describedby='rsvp-error'
						/>
						<label htmlFor='lilian' className='ml-2'>
							Lilian Wang
						</label>
					</div>
				</div>
				<div>
					<label htmlFor='diet' className='font-serif mb-1 block'>
						Please let us know if there are any dietary restrictions
					</label>
					<textarea
						id='diet'
						name='diet'
						rows='5'
						cols='50'
						className='font-serif w-full rounded-sm border-2 border-gray-200'
					/>
				</div>
				<div>
					<label htmlFor='message' className='font-serif mb-1 block'>
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
