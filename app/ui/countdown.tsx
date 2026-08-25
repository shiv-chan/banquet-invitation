"use client";

import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";
import lakeImage from "@/public/moraine-lake.jpg";
import { getCountdownState, CountdownState } from "@/app/lib/countdown/countdown";

export default function Countdown() {

	let countdown: React.ReactNode;
	const now: Date = new Date();
	const countdownState: CountdownState = getCountdownState(now);

	if (countdownState.state === "before") {
		const isPlural: boolean = countdownState.days > 1;

		countdown = (
			<>
				<h2 className='uppercase text-lg sm:text-xl lg:text-2xl'>
					Looking forward to meeting you in...
				</h2>
				<p className='italic text-2xl my-3.5 text-center sm:text-[28px] md:my-6 lg:text-3xl'>
					{isPlural ? "s" : ""}
				</p>
			</>
		);
	} else if (countdownState.state === "today") {
		countdown = (
			<h2 className='text-lg md:mb-2 sm:text-xl lg:text-2xl'>
				Looking forward to meeting you tonight!
			</h2>
		);
	} else if (countdownState.state === "after") {
		countdown = (
			<h2 className='text-lg sm:text-center md:mb-2 sm:text-xl lg:text-2xl'>
				Thank you for coming to our celebration!
			</h2>
		);
	}

	return (
		<div
			data-testid='countdown'
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
