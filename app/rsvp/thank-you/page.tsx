"use client";

import Link from "next/link";
import { merriweather } from "@/app/ui/fonts";
import confetti from "canvas-confetti";
import { useLayoutEffect } from "react";

export default function Page() {
	useLayoutEffect(() => {
		const heart = confetti.shapeFromPath({
			path: "m 29.4,121.7 c -0.9,-79.8 66.4,-48.1 77,-14 6.6,-34.7 82.2,-66.6 81.7,8.9 -0.3,44.9 -77.5,101.9 -77.5,101.9 0,0 -80.7,-49.2 -81.3,-96.8 z",
		});

		confetti({
			particleCount: 100,
			spread: 100,
			shapes: [heart],
			scalar: 2,
		});
	}, []);

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
