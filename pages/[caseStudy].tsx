import { CaseStudy, CaseStudySection, fetchCaseStudies } from "lib/api";
import { sanityImageRefToUrl } from "lib/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";

type CaseStudyProps = { caseStudy: CaseStudy };
export default function CaseStudyPage({ caseStudy }: CaseStudyProps) {
	return (
		<>
			<section className="max-w-screen-lg mx-auto mt-24 mb-16">
				<div className="px-32">
					<h1 className="mb-8 text-5xl font-bold leading-tight">{caseStudy.title}</h1>
					<p className="text-2xl text-gray-500 mb-11">{caseStudy.description}</p>
				</div>
				<div dangerouslySetInnerHTML={{ __html: caseStudy.vimeoEmbedCode }}></div>
			</section>

			{caseStudy.sections.map((section, index) => (
				<Section key={section._key} section={section} index={index}></Section>
			))}
		</>
	);
}

type SectionProps = { section: CaseStudySection; index: number };
function Section({ section, index }: SectionProps) {
	const isEven = index % 2 === 0;
	const image = (
		<Image
			src={sanityImageRefToUrl(section.image.asset._ref)}
			alt="Placeholder"
			width="530"
			height="560"
		/>
	);

	return (
		<section className={`py-16 ${section.isDark ? "bg-trueGray-900" : ""}`}>
			<div className="grid items-center max-w-screen-lg grid-cols-2 gap-32 mx-auto">
				{isEven && <div className="flex-shrink-0">{image}</div>}

				<div className={`text-xl ${section.isDark ? "text-white" : "text-black"}`}>
					<h2 className="text-3xl font-bold mb-7">{section.header}</h2>
					<div>
						<BlockContent
							blocks={section.text}
							className="grid gap-8"
							serializers={{ listItem: ListItem }}
						/>
					</div>
				</div>

				{!isEven && <div className="flex-shrink-0">{image}</div>}
			</div>
		</section>
	);
}

const ListItem: React.FC = function ({ children }) {
	return (
		<li className="relative pl-5 mb-6 list-none last:mb-0">
			<span className="absolute inline-block w-1.5 h-1.5 transform rotate-45 bg-black top-2.5 left-0"></span>
			{children}
		</li>
	);
};

export const getStaticPaths: GetStaticPaths = async function () {
	const caseStudies = await fetchCaseStudies();
	const paths = caseStudies.map((caseStudy) => ({
		params: { caseStudy: caseStudy.title.replace(/\s/g, "-") },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async function (context) {
	const caseStudyTitle = (context.params as { caseStudy: string }).caseStudy.replace(/-/g, " ");
	const caseStudies = await fetchCaseStudies();
	const caseStudy = caseStudies.find((study) => study.title === caseStudyTitle);

	return { props: { caseStudy } };
};
