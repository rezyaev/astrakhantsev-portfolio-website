import { Block } from "@sanity/block-content-to-react";

type DocumentSanityInternals<T> = {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: T;
};

type ArrayItemSanityInternals = {
	_key: string;
};

type SanityImage = {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
};

export type Person = DocumentSanityInternals<"person"> & {
	name: string;
	role: string;
	email: string;
	phoneNumber: string;
	location: string;
	description: string;
	skills: string[];
	socialMediaLinksMap: {
		behance: string;
		vimeo: string;
		facebook: string;
		vk: string;
		linkedIn: string;
	};
};

export async function fetchPerson() {
	const response = await api<Person>("*[_type == 'person']");

	return response.result[0];
}

export type CaseStudy = DocumentSanityInternals<"caseStudy"> & {
	title: string;
	description: string;
	vimeoEmbedCode: string;
	sections: CaseStudySection[];
};

export type CaseStudySection = ArrayItemSanityInternals & {
	header: string;
	text: Block | Block[];
	image: SanityImage;
	isDark: boolean;
};

export async function fetchCaseStudies() {
	const response = await api<CaseStudy>("*[_type == 'caseStudy']");

	return response.result;
}

async function api<T>(query: string) {
	const url = `https://6bp6zlw9.apicdn.sanity.io/v1/data/query/production?query=${query}`;
	const response = await fetch(url).then((res) => res.json());
	return response as { ms: number; query: string; result: T[] };
}
