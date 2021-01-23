import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html className="h-full">
				<Head />
				<body className="h-full">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
