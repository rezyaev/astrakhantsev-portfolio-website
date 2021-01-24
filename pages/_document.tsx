import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html className="h-full">
				<Head>
					<link rel="stylesheet" href="/fonts/fonts.css" />
				</Head>
				<Body>
					<Header />
					<Main />
					<NextScript />
				</Body>
			</Html>
		);
	}
}

type BodyProps = { children: JSX.Element[] };
function Body({ children }: BodyProps) {
	return (
		<body className="relative grid h-full place-items-center">
			<div className="absolute left-0 z-0 w-2/3 h-full bg-body-border-dark"></div>
			<div className="absolute right-0 z-0 w-1/3 h-full bg-body-border-light"></div>
			<div className="relative bg-white h-body w-body">{children}</div>
		</body>
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
