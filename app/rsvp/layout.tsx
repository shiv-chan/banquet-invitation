import { merriweather } from "@/app/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='px-8 pt-4 pb-10 min-h-dvh min-w-64 sm:max-w-[600px] sm:mx-auto md:max-w-[704px] lg:max-w-[950px]'>
			<h1
				className={`${merriweather.className} text-center uppercase italic bold text-3xl border-b border-solid border-b-black px-4 py-2 lg:text-4xl lg:py-3`}
			>
				RSVP
			</h1>
			<section className='sm:max-w-[500px] m-auto'>
				<div className='my-4 font-serif text-sm sm:text-base'>
					<p>Saturday, October 12, 2024</p>
					<p className='pl-4'>Doors open at 5:30 pm</p>
					<p className='pl-4'>Dinner starts at 6:00 pm</p>
					<p className='mt-2'>
						Ginger Beef Bistro House Marlborough in Calgary, Alberta -{" "}
						<a
							href='https://maps.google.com/maps?&daddr=228,%2028%20St%20SE%20Calgary,%20AB%20T2A%206J9%20Calgary%20CA'
							target='_blank'
							className='text-sky-500 font-bold'
						>
							Map
						</a>
					</p>
					<p className='mt-2 font-bold italic'>
						Kindly requested by the 21st of September
					</p>
				</div>
				{children}
			</section>
		</main>
	);
}
