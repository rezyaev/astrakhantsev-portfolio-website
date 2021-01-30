import Image from "next/image";

export default function About() {
	return (
		<div className="flex flex-col h-full">
			<div className="flex justify-between">
				<div className="box-content max-w-sm pt-12 pb-24 pl-32 text-xl">
					<p className="mb-12 leading-8">
						I’m a freelance animation director & animator. I work closely with clients & other
						creative teams from around the globe to solve problems big & small.
					</p>

					<h2 className="mb-4 font-bold">Skills</h2>
					<ul className="leading-8 list-inside list-dash">
						<li>Animation Direction</li>
						<li>Art Direction</li>
						<li>Illustration/Character design</li>
						<li>Cel/Character animation</li>
						<li>Motion Design/2D animation</li>
					</ul>
				</div>

				<Image src="/images/workplace.jpg" alt="Workplace" width="512" height="512" />
			</div>

			<div className="relative flex-1 pt-8 pl-32 text-2xl text-white bg-trueGray-900">
				<address className="not-italic">
					<a className="block mb-1" href="mailto:hello@evgeniyastrakhantsev.com">
						hello@evgeniyastrakhantsev.com
					</a>
					<a className="block" href="tel:+79998297951">
						+7 999 829-79-51
					</a>
				</address>

				<div className="absolute top-0 right-0 flex items-center py-8 w-128 bg-body-border-light px-9">
					<ArrowIcon className="mr-5 transform rotate-180" />
					<p className="mr-5 text-black">1/5</p>
					<ArrowIcon />
				</div>
			</div>
		</div>
	);
}

type ArrowIconProps = { className?: string };
function ArrowIcon({ className }: ArrowIconProps) {
	return (
		<svg
			className={className}
			width="42"
			height="28"
			viewBox="0 0 42 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M39 14L27 2M39 14L27 26M39 14H-1.16229e-06" stroke="black" strokeWidth="3" />
		</svg>
	);
}
