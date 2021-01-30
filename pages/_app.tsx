import { SocialMediaLink } from "components/social-media-link";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<main className="flex-1">
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

function Header() {
	return (
		<header className="flex justify-between pt-9 px-9">
			<div className="flex">
				<div className="mt-1 mr-8 bg-black rounded-full w-14 h-14"></div>
				<div className="text-xl">
					<h1 className="font-bold">Yevgeniy Astrakhantsev</h1>
					<h2 className="font-medium">
						Independent Animation Director <br /> & Animator
					</h2>
				</div>
			</div>

			<nav className="text-xl font-medium">
				<a className="mr-8" href="">
					Work
				</a>
				<a href="">About</a>
			</nav>
		</header>
	);
}

function Footer() {
	return (
		<footer className="flex items-center justify-between pb-10 text-xl font-medium px-9">
			<p>Based in Moscow, Russia</p>

			<address>
				<a href="mailto:hello@evgeniyastrakhantsev.com">hello@evgeniyastrakhantsev.com</a>
			</address>

			<div className="flex">
				<SocialMediaLink socialMedia="Behance" className="mr-7" />
				<SocialMediaLink socialMedia="Vimeo" className="mr-7" />
				<SocialMediaLink socialMedia="Facebook" className="mr-7" />
				<SocialMediaLink socialMedia="VK" className="mr-7" />
				<SocialMediaLink socialMedia="LinkedIn" />
			</div>
		</footer>
	);
}
