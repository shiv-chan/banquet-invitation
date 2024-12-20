"use client";

import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";
import heroImage from "@/public/homer-st-cafe.jpg";

export default function Hero() {
	const today = new Date() as any;
	const weddingDate = new Date(2024, 7, 29) as any;
	const married = weddingDate - today <= 0 ? true : false;

	return (
		<>
			<p
				className={`${merriweather.className} uppercase bold text-lg py-1 sm:text-xl sm:text-center sm:py-2 md:text-left lg:text-2xl`}
			>
				To The Wedding Banquet Celebration of Kaho & Jade
			</p>
			<figure className='mb-4'>
				<Image
					src={heroImage}
					alt='kaho-and-jade-at-cafe'
					className='w-100 h-72 object-cover sm:h-96  md:h-72'
					placeholder='blur'
				/>
				<figcaption className='font-serif text-[10px] italic sm:text-sm'>
					{married ? "We married" : "We're going to marry"} on August 29, 2024
					in Vancouver, BC
				</figcaption>
			</figure>
			<div className='mb-8 font-serif text-sm sm:text-base md:mb-4'>
				<p className='mb-4'>
					We would like to formally invite you to our wedding banquet in Calgary
					on Saturday, October 12, 2024.
				</p>
				<p>
					Kaho and Jade {married ? "had" : "are going to have"} an intimate
					wedding ceremony in Vancouver on August 29, 2024, with immediate
					family. To celebrate with everyone our special occasion, we are
					hosting a wedding banquet in Calgary, and would be thrilled if you
					could attend.
				</p>
			</div>
		</>
	);
}
