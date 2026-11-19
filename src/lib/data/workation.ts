export const FORM_URL = 'https://bdnforms.lovable.app/workation-form';

export const WORKATION_META = {
	code: 'BDN Workation 001',
	community: 'Barcelona Digital Nomads',
	destination: 'Gran Canaria, Spain',
	dates: '24–30 January 2027',
	duration: 'Seven days',
	capacity: 'Approximately 40 people',
	capacityNote: 'Working capacity per initial announcement — final headcount to be confirmed'
} as const;

export const NAV_LINKS = [
	{ label: 'The Idea', href: '#idea' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Destination', href: '#destination' },
	{ label: 'Details', href: '#details' }
] as const;

export interface ExperienceChapter {
	id: string;
	numeral: string;
	title: string;
	lead: string;
	body: string;
	rhythmItems: string[];
}

export const EXPERIENCE_CHAPTERS: ExperienceChapter[] = [
	{
		id: 'work-together',
		numeral: 'I',
		title: 'Work together.',
		lead: 'Trade the solo desk for focused mornings alongside people building things you actually care about.',
		body: 'During the week, the villa doubles as a shared studio. The interest survey is helping us shape the right balance between quiet deep-work blocks, coworking facilities, and informal skill-sharing or workshops led by members of the community.',
		rhythmItems: [
			'Dedicated coworking & Wi-Fi (final villa specs TBC)',
			'Productivity & deep-work blocks with peers',
			'Optional community workshops & skill-sharing'
		]
	},
	{
		id: 'explore-together',
		numeral: 'II',
		title: 'Explore together.',
		lead: 'Close the laptop while the Atlantic light is still warm—volcanic ridges and ocean breaks are never far away.',
		body: 'Gran Canaria shifts from coastal swells to pine-forested calderas in under an hour. Based on what participants vote for in the survey, afternoons can open into guided island hikes, Atlantic surf sessions, coastal road trips, or boat excursions.',
		rhythmItems: [
			'Highland hikes around Roque Nublo & Tejeda',
			'Surfing & Atlantic coastal sessions (interest-gauged)',
			'Optional boat trip, road trips & island excursions'
		]
	},
	{
		id: 'make-memories-together',
		numeral: 'III',
		title: 'Make memories together.',
		lead: 'The real reason to leave Barcelona together: slow dinners, honest conversations, and familiar faces.',
		body: 'You arrive knowing people from BDN—and leave knowing dozens more properly. Evenings leave space for long communal dinners, sunset drinks overlooking the caldera or ocean, local Canarian food and wine tastings, and unhurried time around the villa.',
		rhythmItems: [
			'Communal dinners & sunset drinks',
			'Local Canarian food & cultural tastings',
			'Poolside downtime, wellness & unscheduled evenings'
		]
	}
];

export interface DetailRow {
	label: string;
	value: string;
	note: string;
}

export const PROVISIONAL_DETAILS: DetailRow[] = [
	{
		label: 'Proposed dates',
		value: '24–30 January 2027',
		note: 'Targeting the last week of January; subject to final organizer confirmation.'
	},
	{
		label: 'Duration',
		value: '7 days / 6 nights',
		note: 'A full Monday-to-weekend rhythm balancing remote work and island time.'
	},
	{
		label: 'Working capacity',
		value: 'Approx. 40 participants',
		note: 'Based on the BDN announcement; final headcount depends on confirmed villa capacity.'
	},
	{
		label: 'Destination',
		value: 'Gran Canaria, Spain',
		note: 'One shared private villa; exact municipality and property address to be confirmed.'
	},
	{
		label: 'Shared twin room (indicative)',
		value: '€599 per person',
		note: 'Proposed tier: twin room with private bathroom, shared with one other participant. Provisional.'
	},
	{
		label: 'Private room (indicative)',
		value: '€749 per person',
		note: 'Proposed tier: own private bedroom and private bathroom. Provisional.'
	},
	{
		label: 'Next step after survey',
		value: 'Online info session & WhatsApp group',
		note: 'If sufficient interest is confirmed, BDN will share exact logistics and future €100 refundable deposit details. No deposit is collected now.'
	}
];
