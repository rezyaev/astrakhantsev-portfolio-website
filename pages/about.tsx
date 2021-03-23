import { fetchPerson, Person } from "lib/api";
import { formatPhoneNumber } from "lib/utils";
import { GetStaticProps } from "next";
import Image from "next/image";

type AboutProps = { person: Person };
export default function AboutPage({ person }: AboutProps) {
	return (
		<div className="flex flex-col h-full">
			<div className="flex justify-between">
				<div className="box-content max-w-sm pt-12 pb-24 pl-32 text-xl">
					<p className="mb-12 leading-8">{person.description}</p>

					<h2 className="mb-4 font-bold">Skills</h2>
					<ul className="leading-8 list-inside list-dash">
						{person.skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>

				<Image src="/images/workplace.jpg" alt="Workplace" width="512" height="512" />
			</div>

			<div className="relative flex-1 py-8 pl-32 text-2xl text-white bg-trueGray-900">
				<address className="not-italic">
					<a className="block mb-1" href="mailto:hello@evgeniyastrakhantsev.com">
						{person.email}
					</a>
					<a className="block" href={`tel:${person.phoneNumber}`}>
						{formatPhoneNumber(person.phoneNumber)}
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

export const getStaticProps: GetStaticProps = async function () {
	const person = await fetchPerson();
	return { props: { person } };
};
