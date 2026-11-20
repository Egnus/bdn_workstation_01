export const FORM_URL = 'https://bdnforms.lovable.app/workation-form';

export const WORKATION_META = {
	code: 'BDN Workation 001',
	community: 'Barcelona Digital Nomads',
	destination: 'Puerto de las Nieves · Agaete, Gran Canaria',
	regionLabel: 'Northwest Gran Canaria',
	dates: '24–30 January 2027',
	duration: 'Seven days',
	capacity: 'Approximately 40 people',
	capacityNote: 'Full-building 31-room coliving + 40-seat seafront coworking (final headcount TBC)'
} as const;

export const NAV_LINKS = [
	{ label: 'The Idea', href: '#idea' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'The Venue', href: '#venue' },
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
		lead: 'Step out of your room into a dedicated 40-seat seafront coworking hub—with your own desk waiting back upstairs.',
		body: 'Days balance effortless deep work and relaxed collaboration: bright coworking tables, a 10-seat meeting room, podcast studio, pallet lounge, and a covered ocean-breeze terrace steps from the coliving, backed by a personal workstation in every bedroom.',
		rhythmItems: [
			'Dedicated seafront coworking space (up to 40 seats) steps from the rooms',
			'Personal desk & chair in every bedroom + 10-seat meeting room & podcast studio',
			'High-speed fiber Wi-Fi, specialty local coffee & covered ocean-breeze terrace'
		]
	},
	{
		id: 'explore-together',
		numeral: 'II',
		title: 'Explore together.',
		lead: 'Close the laptop while the Atlantic light is warm—Las Salinas volcanic pools are two minutes on foot.',
		body: 'Puerto de las Nieves sits right where the Tamadaba cliffs plunge into the ocean. Afternoons open naturally into coastal sunset hikes, coffee and wine tastings in the Agaete Valley, Arucas distillery visits, private coastal yacht trips, or surf sessions at Las Canteras.',
		rhythmItems: [
			'Midday dips in Las Salinas volcanic natural pools — just a 2-minute walk away',
			'Sunset cliff hikes from the village & Agaete Valley coffee and wine plantation tasting',
			'Arucas rum distillery visit, coastal yacht excursion & Las Canteras surf afternoon'
		]
	},
	{
		id: 'make-memories-together',
		numeral: 'III',
		title: 'Make memories together.',
		lead: 'Sunrise rooftop yoga overlooking the cliffs, sunset BBQs, and unhurried communal dinners around one table.',
		body: 'You arrive knowing people from Barcelona—and leave knowing the whole crew properly. Mornings can begin on the rooftop terrace above the harbor, while evenings wind into rooftop barbecues, a modern Canarian cooking class, and long-table dinners.',
		rhythmItems: [
			'Sunrise rooftop yoga overlooking the Tamadaba cliffs & Atlantic harbor',
			'Golden-hour rooftop BBQs, sunset music sessions & shaded pergola chill-outs',
			'Modern Canarian cooking class & long-table communal dinners in the coliving'
		]
	}
];

export interface VenueStat {
	value: string;
	label: string;
	detail: string;
}

export const VENUE_STATS: VenueStat[] = [
	{ value: '31', label: 'Double Bedrooms', detail: 'Twin or private double setup' },
	{ value: '31', label: 'Private Bathrooms', detail: 'En-suite in every single room' },
	{ value: '31', label: 'In-Room Desks', detail: 'Personal desk & chair upstairs' },
	{ value: '40', label: 'Coworking Seats', detail: 'Seafront hub steps away' }
];

export const INCLUDED_SERVICES: string[] = [
	'High-Speed Wi-Fi',
	'Specialty Local Coffee',
	'Seafront Coworking + In-Room Desk',
	'Private En-Suite Bathroom',
	'Equipped Communal Kitchen',
	'Rooftop Barbecue',
	'Weekly Cleaning',
	'Laundry Facilities',
	'Fresh Bed Linen',
	'Bath Towels'
];

export interface NeighborhoodSpot {
	distance: string;
	place: string;
	note: string;
}

export const NEIGHBORHOOD_DISTANCES: NeighborhoodSpot[] = [
	{
		distance: '2 min walk',
		place: 'Las Salinas Natural Pools',
		note: 'Volcanic ocean swimming pools sheltered from the swell'
	},
	{
		distance: '4 min walk',
		place: 'Agaete Beach & Old Pier',
		note: 'Harbor promenade and seafront seafood restaurants'
	},
	{
		distance: '5 min walk',
		place: 'Gym, Padel, Tennis & Diving',
		note: 'Local sports courts nearby + dive center around the corner'
	},
	{
		distance: '8 min walk',
		place: 'Fred Olsen Ferry Pier',
		note: 'Direct fast-ferry harbor linking Gran Canaria & Tenerife'
	},
	{
		distance: '10 min drive',
		place: 'Agaete Valley & Tamadaba',
		note: 'Historic European coffee plantations, vineyards & ridge trails'
	},
	{
		distance: '30 min drive',
		place: 'Las Canteras Urban Beach',
		note: 'Surf breaks, beach volley & palm-lined sunset promenade'
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
		note: 'Seven consecutive island days balancing remote work and island time.'
	},
	{
		label: 'Destination',
		value: 'Puerto de las Nieves · Agaete, Gran Canaria',
		note: 'Northwest volcanic coast & fishing port · exact property address shared upon confirmation.'
	},
	{
		label: 'Accommodation',
		value: 'Full-Building Coliving (31 Rooms) + Seafront Coworking',
		note: '31 private-bath rooms with in-room desks · Shared Twin (€599) or Private Double (€749) indicative.'
	},
	{
		label: 'Shared twin room (indicative)',
		value: '€599 per person',
		note: '2 single beds with private en-suite bathroom, personal desk & chair, shared with one participant. Provisional.'
	},
	{
		label: 'Private double room (indicative)',
		value: '€749 per person',
		note: '1 double bed (solo use) with private en-suite bathroom, personal desk & chair. Provisional.'
	},
	{
		label: 'Working capacity',
		value: 'Approx. 40 participants',
		note: 'Sized around the 31-room coliving and 40-seat seafront coworking hub; final headcount TBC.'
	},
	{
		label: 'Next step after survey',
		value: 'Online info session & WhatsApp group',
		note: 'Once interest is confirmed, BDN will share exact logistics and future €100 refundable deposit details. No deposit is collected now.'
	}
];

export interface TransportRoute {
	mode: string;
	duration: string;
	fare: string;
	route: string;
	tip: string;
}

export const TRANSPORT_ROUTES: TransportRoute[] = [
	{
		mode: 'Direct Taxi (LPA Airport)',
		duration: '~45 min',
		fare: '~€70 per cab',
		route: 'Gran Canaria Airport (LPA) → Puerto de las Nieves via GC-1 & GC-2',
		tip: 'Fastest door-to-town option — ~€18–€23 per person when sharing a 3–4 person taxi.'
	},
	{
		mode: 'Bus + Taxi Combo',
		duration: '~1h 30m',
		fare: '~€38 total',
		route: 'LPA Airport → San Telmo via Global Line 60, 1, or 91 (~€3) + Taxi to Agaete (~€35)',
		tip: 'Great mid-budget bridge connecting airport express buses directly across the north coast.'
	},
	{
		mode: 'Public Bus (Lines 60 + 103)',
		duration: '~2 hours',
		fare: '~€8 total',
		route: 'Bus 60 LP Exprés to San Telmo (~€3) → Bus 103 to Puerto de las Nieves (~€5) + 2-min walk',
		tip: 'Frequent Global coastal route dropping you right in the harbor center of Puerto de las Nieves.'
	},
	{
		mode: 'Fred Olsen Ferry (Tenerife)',
		duration: '8 min walk',
		fare: 'Ferry pier arrival',
		route: 'Santa Cruz de Tenerife → Puerto de las Nieves Pier → level seafront walk',
		tip: 'Arriving from Tenerife? The ferry dock is steps from the promenade in Puerto de las Nieves.'
	}
];
