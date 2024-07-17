import { merriweather } from "@/app/ui/fonts";

export default function RSVP() {
	return (
		<div className='flex flex-col items-center justify-center border border-solid border-black py-3 gap-3 sm:gap-4 sm:py-4'>
			<h2
				className={`${merriweather.className} uppercase bold italic leading-none sm:text-lg`}
			>
				Save the date
			</h2>
			<p className='font-serif text-center text-xs max-w-56 sm:text-sm'>
				Please respond with your availability to attend before the 25th of
				September.
			</p>
			<button className='font-serif border border-solid border-black bg-black text-white w-32 text-base bold sm:text-lg'>
				RSVP
			</button>
		</div>
	);
}
