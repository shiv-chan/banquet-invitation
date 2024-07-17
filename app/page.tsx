import { unifrakturMaguntia, merriweather } from "@/app/ui/fonts";
import Hero from "./ui/hero";
import RSVP from "./ui/rsvp";
import Details from "./ui/details";
import Countdown from "./ui/countdown";

export default function Home() {
	return (
		<main className='px-8 pt-4 min-h-dvh min-w-64 sm:max-w-[600px] sm:mx-auto md:max-w-[704px] lg:max-w-[950px]'>
			<h1
				className={`${unifrakturMaguntia.className} text-3xl text-center sm:text-4xl lg:text-5xl lg:mb-2`}
			>
				The Wedding Times
			</h1>
			<div className='font-serif text-xs border-y border-solid border-y-black flex justify-between px-4 py-1 sm:text-sm lg:text-base'>
				<p>Calgary AB</p>
				<p>Saturday, October 12, 2024</p>
				<p>7:00 PM</p>
			</div>
			<p
				className={`${merriweather.className} text-center uppercase italic bold text-3xl border-b border-solid border-b-black px-4 py-2 lg:text-4xl lg:py-3`}
			>
				You are invited
			</p>
			<div className='md:grid md:grid-cols-2 md:auto-rows-auto md:gap-x-4 md:gap-y-6 md:border-b md:border-b-black md:min-h-[calc(100vh-190px)]'>
				<section className='md:col-span-1 md:row-start-1 md:row-end-2'>
					<Hero />
				</section>
				<section className='md:col-span-1 md:row-start-2 md:row-end-3'>
					<RSVP />
				</section>
				<section className='my-8 md:col-start-2 md:row-span-4 md:m-0 md:border-l md:border-l-black'>
					<Details />
				</section>
				<section className='md:hidden'>
					<RSVP />
				</section>
				<section className='mt-5 sm:mt-6 md:col-span-1 md:row-start-3 md:row-end-5 md:m-0'>
					<Countdown />
				</section>
			</div>
			<footer className='font-serif text-xs text-center my-2 sm:my-3'>
				Made with ♡ by Kaho Shibuya
			</footer>
		</main>
	);
}
