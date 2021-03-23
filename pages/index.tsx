import { CaseStudy, fetchCaseStudies } from "lib/api";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

type HomeProps = { caseStudies: CaseStudy[] };
export default function HomePage({ caseStudies }: HomeProps) {
	return (
		<>
			<div className="absolute top-4 left-4">
				<Link href={`/${caseStudies[0].title.replaceAll(" ", "-")}`}>
					<a>
						<Image src="/images/yandex-money.png" alt="Yandex Money" width="400" height="340" />
					</a>
				</Link>
			</div>
			<div className="absolute left-1/4 bottom-4">
				<Image src="/images/hexagons.png" alt="Hexagons" width="350" height="256" />
			</div>
			<div className="absolute right-1/3 top-4">
				<Image src="/images/woman.png" alt="Woman" width="160" height="460" />
			</div>
			<div className="fixed -bottom-2 right-32">
				<Image src="/images/man.svg" alt="Man" width="220" height="720" />
			</div>
		</>
	);
}

export const getStaticProps: GetStaticProps = async function () {
	const caseStudies = await fetchCaseStudies();
	return { props: { caseStudies } };
};
