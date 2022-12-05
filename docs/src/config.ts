export const SITE = {
	title: 'AtEInput',
	description: 'Arabic to English Input docs',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'Arabic to English Input docs',
	},
	twitter: 'mzaien_',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/mzaien/ArabicToEnglishInput/tree/main/docs`;




export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'React', link: 'en/react' },
			{ text: 'Preact', link: 'en/preact' },
			{ text: 'Solid', link: 'en/solid' },
			{ text: 'Svelte', link: 'en/svelte' },
			{ text: 'Vue', link: 'en/vue' },
			{ text: 'Lit', link: 'en/lit' },
		],
		'Other frameworks': [{ text: 'Other', link: 'en/other' }],
		'Changelog': [{ text: 'Changelog', link: 'en/changelog' }],
	},
};
