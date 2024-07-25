import { merriweather } from "@/app/ui/fonts";

export default function Loading() {
	return (
		<div className='font-serif text-center'>
			<div className='flex flex-col justify-center h-60'>
				<h2
					className={`${merriweather.className} italic text-lg mt-10 text-center lg:text-xl`}
				>
					Loading...
				</h2>
			</div>
		</div>
	);
}
