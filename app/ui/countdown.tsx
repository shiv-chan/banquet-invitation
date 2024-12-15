"use client";

import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";
import lakeImage from "@/public/moraine-lake.jpg";

export default function Countdown() {
	const startHour = 18;
	const HoursInDays = (1 / 24) * startHour; // hours in days
	const now = new Date() as any;
	const eventDate = new Date(2024, 9, 12, startHour) as any;
	const oneDay = 24 * 60 * 60 * 1000;
	const diffDays = (eventDate - now) / oneDay;

	let countdown: React.ReactNode;
	if (diffDays > HoursInDays) {
		const days: number =
			diffDays % 1 > HoursInDays ? Math.ceil(diffDays) : Math.floor(diffDays);
		const isPlural: boolean = days > 1;
		countdown = (
			<>
				<h2 className='uppercase text-lg sm:text-xl lg:text-2xl'>
					Looking forward to meeting you in...
				</h2>
				<p className='italic text-2xl my-3.5 text-center sm:text-[28px] md:my-6 lg:text-3xl'>
					{days} day
					{isPlural ? "s" : ""}
				</p>
			</>
		);
	} else if (
		diffDays > 0 &&
		diffDays <= HoursInDays &&
		now.getHours() < startHour
	) {
		countdown = (
			<h2 className='text-lg md:mb-2 sm:text-xl lg:text-2xl'>
				Looking forward to meeting you tonight!
			</h2>
		);
	} else {
		countdown = (
			<h2 className='text-lg sm:text-center md:mb-2 sm:text-xl lg:text-2xl'>
				Thank you for coming to our celebration!
			</h2>
		);
	}

	return (
		<div
			className={`${merriweather.className} font-bold flex items-center gap-x-1 border-b border-b-black border-solid md:border-none pb-5 justify-center sm:gap-x-3 md:flex-col md:pb-4 md:h-full`}
		>
			<div>{countdown}</div>
			<Image
				src={lakeImage}
				alt='kaho-and-jade-at-moraine-lake'
				className='w-32 h-36 object-cover sm:w-56 md:w-full md:h-full'
				placeholder='blur'
			/>
		</div>
	);
}
