import { unifrakturMaguntia, merriweather } from "@/app/ui/fonts";
import Hero from "./ui/hero";
import RSVP from "./ui/rsvp";
import Details from "./ui/details";
import Countdown from "./ui/countdown";

export default function Home() {
	return (
		<main className='px-8 my-4 min-h-dvh min-w-64 sm:max-w-[600px] sm:mx-auto'>
			<h1
				className={`${unifrakturMaguntia.className} text-3xl text-center sm:text-4xl`}
			>
				The Wedding Times
			</h1>
			<div className='font-serif text-xs border-y border-solid border-y-black flex justify-between px-4 py-1 sm:text-sm'>
				<p>Calgary AB</p>
				<p>Sunday, October 13, 2024</p>
				<p>7:00 PM</p>
			</div>
			<p
				className={`${merriweather.className} text-center uppercase italic bold text-3xl border-b border-solid border-b-black px-4 py-2`}
			>
				You are invited
			</p>
			<section>
				<Hero />
			</section>
			<RSVP />
			<section className='my-8'>
				<Details />
			</section>
			<RSVP />
			<section className='mt-5 sm:mt-6'>
				<Countdown />
			</section>
			<footer className='font-serif text-xs text-center my-2 sm:my-3'>
				Made with ♡ by Kaho Shibuya
			</footer>
		</main>
	);
}
