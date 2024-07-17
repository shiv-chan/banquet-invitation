import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";
import { rgbDataURL } from "@/app/lib/utils";

export default function Hero() {
	let caption;
	const today = new Date() as any;
	const weddingDate = new Date(2024, 7, 29) as any;
	const married = weddingDate - today <= 0 ? true : false;

	return (
		<>
			<p
				className={`${merriweather.className} uppercase bold text-lg py-1 sm:text-xl sm:text-center sm:py-2`}
			>
				To The Wedding Celebration of Kaho & Jade
			</p>
			<figure className='mb-4'>
				<Image
					src='/homer-st-cafe.jpg'
					alt='kaho-and-jade-at-cafe'
					width={1280}
					height={960}
					className='w-100 h-72 object-cover sm:h-96'
					placeholder='blur'
					blurDataURL={rgbDataURL(181, 181, 181)}
				/>
				<figcaption className='font-serif text-xs sm:text-sm'>
					{married ? "We married" : "We're going to marry"} on August 29, 2024
					in Vancouver, BC
				</figcaption>
			</figure>
		</>
	);
}
