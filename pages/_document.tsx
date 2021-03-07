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
								flex: 1 1 0%;
								display: flex;
								flex-direction: column;
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
		<body className="flex min-h-full p-6 text-trueGray-900">
			<div className="fixed top-0 bottom-0 left-0 z-0 w-2/3 bg-body-border-dark"></div>
			<div className="fixed top-0 bottom-0 right-0 z-0 w-1/3 bg-body-border-light"></div>
			<div className="relative flex flex-1 bg-white">{children}</div>
		</body>
	);
}
