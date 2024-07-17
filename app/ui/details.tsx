import { merriweather } from "@/app/ui/fonts";

export default function Details() {
	return (
		<div className='font-serif text-sm sm:text-sm sm:grid sm:grid-cols-2 sm:gap-x-6 md:my-2 md:mx-4 md:flex md:flex-col'>
			<h2
				className={`${merriweather.className} uppercase bold text-lg text-center sm:text-xl sm:col-span-2 md:my-2 lg:text-2xl`}
			>
				The details
			</h2>
			<p className='text-center my-5 sm:col-span-2 md:my-2 sm:text-base lg:my-3'>
				Saturday, October 12, 2024 7:00pm
			</p>
			<div className='text-center my-5 sm:col-span-2 md:my-2 sm:text-base lg:my-3'>
				<p>Ginger Beef Bistro House Marlborough</p>
				<p>228 28 St SE, Calgary, AB T2A 6J9</p>
			</div>
			<div className='my-5 sm:row-start-4 md:my-4 sm:text-base lg:my-5'>
				<h3 className='font-bold text-center mb-1.5'>By Car</h3>
				<ol className='list-disc pl-4 lg:pl-5'>
					<li className='mb-4 lg:mb-5'>
						From Downtown: Take Main Street north until you reach 5th Avenue.
						Turn right onto 5th Avenue and continue for 2 miles. Turn left onto
						Gourmet Lane. Our restaurant is located on the right side, just past
						the park.
					</li>
					<li className='mb-4 md:m-0'>
						From the Highway: Take Exit 45 off Highway 1. Merge onto Main Street
						and head south for 3 miles. Turn left onto 5th Avenue, then continue
						for 2 miles. Turn left onto Gourmet Lane. You'll find us on the
						right side, just past the park.
					</li>
				</ol>
			</div>
			<div className='my-5 sm:col-span-2 sm:row-span-1 md:my-4 sm:text-base lg:my-5'>
				<h3 className='font-bold text-center mb-1.5'>Parking</h3>
				<p className='text-center sm:text-left sm:pl-4 lg:pl-5'>
					Free parking is available in the lot adjacent to the restaurant.
					Street parking is also available on Gourmet Lane.
				</p>
			</div>
			<div className='my-5 sm:row-start-4 md:my-4 sm:text-base lg:my-5'>
				<h3 className='font-bold text-center mb-1.5'>By Public Transport</h3>
				<ol className='list-disc pl-4 lg:pl-5'>
					<li className='mb-4 lg:mb-5'>
						Bus: Take Bus 22 to the 5th Avenue stop. Walk east on 5th Avenue for
						1 block and turn left onto Gourmet Lane. The restaurant is a short
						walk on the right side.
					</li>
					<li className='mb-4 md:m-0'>
						Subway: Take the Green Line to the Gourmet Station. Exit the station
						and walk north on 5th Avenue for 2 blocks. Turn right onto Gourmet
						Lane. The restaurant will be on your left.
					</li>
				</ol>
			</div>
		</div>
	);
}
