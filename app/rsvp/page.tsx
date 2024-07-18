import { Button } from "@/app/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<form action='' className='mt-8'>
			<div>
				<label
					htmlFor='first-name'
					className='font-serif mb-1 block text-sm sm:text-base'
				>
					First Name
				</label>
				<input
					id='first-name'
					name='firstName'
					type='text'
					className='font-serif w-full rounded-sm border-2 border-gray-200 text-sm sm:text-base'
					aria-describedby='first-error'
				/>
			</div>
			<div className='mt-4'>
				<label
					htmlFor='last-name'
					className='font-serif mb-1 block text-sm sm:text-base'
				>
					Last Name
				</label>
				<input
					id='lat-name'
					name='lastName'
					type='text'
					className='font-serif w-full rounded-sm border-2 border-gray-200 text-sm sm:text-base'
					aria-describedby='last-error'
				/>
			</div>
			<Button type='submit' className='w-full mt-8'>
				Next
			</Button>
			<Link
				href='/'
				className='mt-4 block text-center font-serif border border-solid border-black bg-white text-black w-full text-base bold sm:text-lg'
			>
				Back
			</Link>
		</form>
	);
}
