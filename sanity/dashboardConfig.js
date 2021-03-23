export default {
	widgets: [
		{
			name: "vercel",
			options: {
				deployLimit: 5,
				deployHook:
					"https://api.vercel.com/v1/integrations/deploy/prj_bk2LNmPomfgu7DeV2WwlKka78sBg/KAHngHOD5g",
				forceSmallLayout: false,
				projectId: "prj_bk2LNmPomfgu7DeV2WwlKka78sBg",
				token: process.env.SANITY_STUDIO_VERCEL_TOKEN,
			},
			layout: {
				width: "large",
			},
		},
	],
};
