export default {
	title: "Case Study",
	name: "caseStudy",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
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
			title: "Vimeo Embed Code",
			name: "vimeoEmbedCode",
			type: "text",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Sections",
			name: "sections",
			type: "array",
			of: [
				{
					title: "Section",
					type: "object",
					fields: [
						{
							title: "Header",
							name: "header",
							type: "string",
						},
						{
							title: "Text",
							name: "text",
							type: "array",
							of: [{ type: "block" }],
							validation: (Rule) => Rule.required(),
						},
						{
							title: "Image",
							name: "image",
							type: "image",
							validation: (Rule) => Rule.required(),
						},
						{
							title: "Dark Background",
							name: "isDark",
							type: "boolean",
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
			validation: (Rule) => Rule.required(),
		},
	],
};
