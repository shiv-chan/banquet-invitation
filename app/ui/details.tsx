import { merriweather } from "@/app/ui/fonts";

export default function Details() {
	return (
		<div className='font-serif text-xs'>
			<h2
				className={`${merriweather.className} uppercase bold text-base text-center`}
			>
				The details
			</h2>
			<p className='text-center my-5'>Sunday, October 13, 2024 7:00pm</p>
			<div className='text-center my-5'>
				<p>Ginger Beef Bistro House Marlborough</p>
				<p>228 28 St SE, Calgary, AB T2A 6J9</p>
			</div>
			<div className='my-5'>
				<h3 className='font-bold text-center mb-1.5'>By Car</h3>
				<ol className='list-disc pl-4'>
					<li className='mb-4'>
						From Downtown: Take Main Street north until you reach 5th Avenue.
						Turn right onto 5th Avenue and continue for 2 miles. Turn left onto
						Gourmet Lane. Our restaurant is located on the right side, just past
						the park.  From the Highway: Take Exit 45 off Highway 1. Merge onto
						Main Street and head south for 3 miles. Turn left onto 5th Avenue,
						then continue for 2 miles. Turn left onto Gourmet Lane. You'll find
						us on the right side, just past the park.
					</li>
					<li className='mb-4'>
						From the Highway: Take Exit 45 off Highway 1. Merge onto Main Street
						and head south for 3 miles. Turn left onto 5th Avenue, then continue
						for 2 miles. Turn left onto Gourmet Lane. You'll find us on the
						right side, just past the park.
					</li>
				</ol>
			</div>
			<div className='my-5'>
				<h3 className='font-bold text-center mb-1.5'>Parking</h3>
				<p className='text-center'>
					Free parking is available in the lot adjacent to the restaurant.
					Street parking is also available on Gourmet Lane.
				</p>
			</div>
			<div className='my-5'>
				<h3 className='font-bold text-center mb-1.5'>By Public Transport</h3>
				<ol className='list-disc pl-4'>
					<li className='mb-4'>
						Bus: Take Bus 22 to the 5th Avenue stop. Walk east on 5th Avenue for
						1 block and turn left onto Gourmet Lane. The restaurant is a short
						walk on the right side.
					</li>
					<li className='mb-4'>
						Subway: Take the Green Line to the Gourmet Station. Exit the station
						and walk north on 5th Avenue for 2 blocks. Turn right onto Gourmet
						Lane. The restaurant will be on your left.
					</li>
				</ol>
			</div>
		</div>
	);
}
