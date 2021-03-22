const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneNumberRegex = /^\+[1-9]{1}[0-9]{3,14}$/;

export default {
	title: "Person",
	name: "person",
	type: "document",
	fields: [
		{
			title: "Name",
			name: "name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Role",
			name: "role",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Description",
			name: "description",
			type: "text",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Skills",
			name: "skills",
			type: "array",
			of: [{ type: "string" }],
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Location",
			name: "location",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "E-mail",
			name: "email",
			type: "string",
			validation: (Rule) => Rule.required().regex(emailRegex),
		},
		{
			title: "Phone Number",
			name: "phoneNumber",
			type: "string",
			validation: (Rule) => Rule.required().regex(phoneNumberRegex),
		},
		{
			title: "Photo",
			name: "photo",
			type: "image",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Social Media Links",
			name: "socialMediaLinksMap",
			type: "object",
			fields: [
				{ title: "Behance", name: "behance", type: "url" },
				{ title: "Vimeo", name: "vimeo", type: "url" },
				{ title: "Facebook", name: "facebook", type: "url" },
				{ title: "VK", name: "vk", type: "url" },
				{ title: "LinkedIn", name: "linkedIn", type: "url" },
			],
			validation: (Rule) => Rule.required(),
		},
	],
};
