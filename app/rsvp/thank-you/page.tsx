import Link from "next/link";
import { merriweather } from "@/app/ui/fonts";

export default function Page() {
	return (
		<div className='font-serif text-center'>
			<div className='flex flex-col justify-center h-60'>
				<h2
					className={`${merriweather.className} italic font-bold mb-4 text-xl lg:text-2xl`}
				>
					Thank You for Your RSVP!
				</h2>
				<p className='font-serif mb-1 block text-sm sm:text-base'>
					Thank you for confirming your attendance. If you have any questions,
					feel free to reach out to us.
				</p>
			</div>
			<Link
				href='/'
				className='mt-4 block text-center font-serif border border-solid border-black bg-white text-black w-full text-base bold sm:text-lg'
			>
				Back to Top Page
			</Link>
		</div>
	);
}
