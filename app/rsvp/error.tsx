"use client";

import { useEffect } from "react";
import { merriweather } from "@/app/ui/fonts";
import Link from "next/link";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Optionally log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='font-serif text-center'>
			<div className='flex flex-col justify-center h-60'>
				<p
					className={`${merriweather.className} italic font-bold mb-4 text-xl lg:text-2xl`}
				>
					Something went wrong...
				</p>
				<p>Please come back and try again later.</p>
			</div>
			<Link
				href='/'
				className='block mt-4 text-center font-serif border border-solid border-black bg-black text-white w-full text-base bold sm:text-lg'
			>
				Back to Top Page
			</Link>
		</div>
	);
}
