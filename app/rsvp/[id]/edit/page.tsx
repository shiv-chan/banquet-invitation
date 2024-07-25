import { merriweather } from "@/app/ui/fonts";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;

	return (
		<div className='font-serif text-center'>
			<div className='flex flex-col justify-center h-60'>
				<h2
					className={`${merriweather.className} italic font-bold mb-4 text-xl lg:text-2xl`}
				>
					It seems you have already RSVP’d!
				</h2>
				<p className='font-serif mb-1 block text-sm sm:text-base'>
					Do you want to edit it?
				</p>
			</div>
			<Link
				href={`/rsvp/${id}`}
				className='block mt-4 text-center font-serif border border-solid border-black bg-black text-white w-full text-base bold sm:text-lg'
			>
				Yup
			</Link>
			<Link
				href='/rsvp'
				className='mt-4 block text-center border border-solid border-black bg-white text-black w-full text-base bold sm:text-lg'
			>
				Nope
			</Link>
		</div>
	);
}
