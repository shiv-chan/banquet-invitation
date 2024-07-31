import { merriweather } from "@/app/ui/fonts";
import Link from "next/link";

export default function RSVP() {
	return (
		<div className='flex flex-col items-center justify-center border border-solid border-black py-3 gap-3 sm:gap-4 sm:py-4 md:gap-6 md:py-8'>
			<h2
				className={`${merriweather.className} uppercase bold italic leading-none text-lg sm:text-xl lg:text-2xl`}
			>
				Save the date
			</h2>
			<p className='font-serif text-center text-sm max-w-56 sm:text-base lg:text-base'>
				Please respond with your availability to attend before the 7th of
				September.
			</p>
			<Link
				href='/rsvp'
				className='text-center font-serif border border-solid border-black bg-black text-white w-32 text-base bold sm:text-lg lg:text-2xl lg:p-1 lg:w-36'
			>
				RSVP
			</Link>
		</div>
	);
}
