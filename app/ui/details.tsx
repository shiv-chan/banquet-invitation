import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";

export default function Details() {
	return (
		<div className='font-serif text-sm sm:text-sm md:my-2 md:mx-4 flex flex-col h-full'>
			<h2
				className={`${merriweather.className} uppercase bold text-lg text-center sm:text-xl md:my-2 lg:text-2xl`}
			>
				The details
			</h2>
			<p className='text-center my-5 md:my-2 sm:text-base lg:my-3'>
				Saturday, October 12, 2024
				<br />
				Doors open at 5:30 pm
				<br />
				Dinner starts at 6:00 pm
				<br />
				Dance 9:00 pm - 11:00 pm
			</p>
			<div className='text-center my-5 md:my-2 sm:text-base lg:my-3'>
				<p>Ginger Beef Bistro House Marlborough</p>
				<p>228 28 St SE, Calgary, AB T2A 6J9</p>
			</div>
			<div className='my-5 md:my-4 sm:text-base lg:my-5'>
				<div className='pl-4 lg:pl-5'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.7007186156527!2d-113.99335869321521!3d51.05035962872515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b5f930ab15f%3A0x3d18fa958a55b26c!2sGinger%20Beef%20Bistro%20House!5e0!3m2!1sen!2sca!4v1721876390845!5m2!1sen!2sca'
						className='w-full h-80 border border-solid border-black'
						allowFullScreen={undefined}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
			<div className='my-5 md:my-4 sm:text-base lg:my-5'>
				<h3 className='font-bold text-center mb-1.5'>Parking</h3>
				<p className='text-center sm:text-left sm:pl-4 lg:pl-5'>
					Free parking is available in the lot adjacent to the restaurant.
				</p>
			</div>
			<div className='my-5 md:my-4 sm:text-base lg:my-5'>
				<h3 className='font-bold text-center mb-1.5'>By Public Transport</h3>
				<p className='pl-4 lg:pl-5'>
					The restaurant is conveniently located near the Franklin CTrain
					station. Upon arrival, head north to reach the destination.
				</p>
			</div>
			<Image
				src='/quote.png'
				alt='quote'
				width={1080}
				height={1080}
				className='w-full hidden m-4 h-full object-contain md:block'
			/>
		</div>
	);
}
