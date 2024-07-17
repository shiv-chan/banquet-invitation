import Image from "next/image";
import { merriweather } from "@/app/ui/fonts";
import { rgbDataURL } from "@/app/lib/utils";

export default function Countdown() {
	const today = new Date() as any;
	const eventDate = new Date(2024, 9, 13) as any;
	const oneDay = 60 * 60 * 24 * 1000;
	const diffDays = Math.floor((eventDate - today) / oneDay) + 1;

	let countdown;
	if (diffDays >= 0) {
		countdown = (
			<>
				<h2 className='uppercase text-base sm:text-lg'>
					Looking forward to meeting you in...
				</h2>
				<p className='italic text-2xl my-3.5 text-center sm:text-[28px]'>
					{diffDays} days
				</p>
			</>
		);
	} else {
		countdown = (
			<h2 className='text-base'>Thank you for coming to our celebration!</h2>
		);
	}

	return (
		<div
			className={`${merriweather.className} font-bold flex gap-x-1 border-b border-b-black border-solid pb-5 justify-center sm:gap-x-3`}
		>
			<div>{countdown}</div>
			<Image
				src='/moraine-lake.jpg'
				alt='kaho-and-jade-at-moraine-lake'
				width={1280}
				height={720}
				className='w-32 h-36 object-cover sm:w-56'
				placeholder='blur'
				blurDataURL={rgbDataURL(181, 181, 181)}
			/>
		</div>
	);
}
