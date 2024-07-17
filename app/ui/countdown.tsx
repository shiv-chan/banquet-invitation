import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";
import { rgbDataURL } from "@/app/lib/utils";

export default function Countdown() {
	const today = new Date() as any;
	const eventDate = new Date(2024, 9, 12) as any;
	const oneDay = 60 * 60 * 24 * 1000;
	const diffDays = Math.floor((eventDate - today) / oneDay);

	let countdown;
	if (diffDays > 0) {
		countdown = (
			<>
				<h2 className='uppercase text-lg sm:text-xl lg:text-2xl'>
					Looking forward to meeting you {diffDays == 0 ? "" : "in..."}
				</h2>
				<p className='italic text-2xl my-3.5 text-center sm:text-[28px] md:my-6 lg:text-3xl'>
					{diffDays} day{diffDays > 1 ? "s" : ""}
				</p>
			</>
		);
	} else if (diffDays === 0) {
		countdown = (
			<h2 className='uppercase text-lg italic sm:text-xl lg:text-2xl'>
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
				src='/moraine-lake.jpg'
				alt='kaho-and-jade-at-moraine-lake'
				width={1280}
				height={720}
				className='w-32 h-36 object-cover sm:w-56 md:w-full md:h-full'
				placeholder='blur'
				blurDataURL={rgbDataURL(181, 181, 181)}
			/>
		</div>
	);
}
