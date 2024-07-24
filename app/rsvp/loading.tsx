import { merriweather } from "@/app/ui/fonts";

export default function Loading() {
	return (
		<div
			className={`${merriweather.className} italic text-lg mt-10 text-center lg:text-xl`}
		>
			Loading...
		</div>
	);
}
