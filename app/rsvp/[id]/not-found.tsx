import { merriweather } from "@/app/ui/fonts";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className='font-serif text-center'>
			<div className='flex flex-col justify-center h-60'>
				<p
					className={`${merriweather.className} italic font-bold mb-4 text-xl lg:text-2xl`}
				>
					Oops! We can’t find you in the list.
				</p>
				<p>
					Please make sure your name and email address are spelled correctly.
				</p>
			</div>
			<Link
				href='/rsvp'
				className='block mt-4 text-center font-serif border border-solid border-black bg-black text-white w-full text-base bold sm:text-lg'
			>
				Try Again
			</Link>
		</div>
	);
}
