export type Person = SanityInternals & {
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

type SanityInternals = {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: "person";
};

export async function fetchPerson() {
	const response = await api<Person>(
		"https://6bp6zlw9.apicdn.sanity.io/v1/data/query/production?query=*[_type == 'person']"
	);

	return response.result[0];
}

async function api<T>(url: string) {
	const response = await fetch(url).then((res) => res.json());
	return response as { ms: number; query: string; result: T[] };
}
