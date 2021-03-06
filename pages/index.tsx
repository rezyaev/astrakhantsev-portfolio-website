import Image from "next/image";

export default function Home() {
	return (
		<div className="relative h-full">
			<div className="absolute top-4 left-4">
				<Image src="/images/yandex-money.png" alt="Yandex Money" width="400" height="340" />
			</div>
			<div className="absolute left-1/4 bottom-4">
				<Image src="/images/hexagons.png" alt="Hexagons" width="350" height="256" />
			</div>
			<div className="absolute right-1/4 top-4">
				<Image src="/images/woman.png" alt="Woman" width="160" height="460" />
			</div>
			<div className="absolute -bottom-1/3 right-4">
				<Image src="/images/man.svg" alt="Man" width="220" height="720" />
			</div>
		</div>
	);
}
