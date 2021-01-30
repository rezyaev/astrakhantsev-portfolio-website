import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html className="h-full">
				<Head>
					<link rel="stylesheet" href="/fonts/fonts.css" />
					<style>
						{`
							#__next {
								display: flex;
								flex-direction: column;
								height: 100%;
							}
						`}
					</style>
				</Head>
				<Body>
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
		<body className="relative grid h-full place-items-center text-trueGray-900">
			<div className="absolute left-0 z-0 w-2/3 h-full bg-body-border-dark"></div>
			<div className="absolute right-0 z-0 w-1/3 h-full bg-body-border-light"></div>
			<div className="relative bg-white h-body w-body">{children}</div>
		</body>
	);
}
