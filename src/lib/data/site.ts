/* ============================================================
   Single source of truth for site content.

   Contact details, licence and services come from the company's
   business card. Anything marked TODO needs confirming.
   ============================================================ */

export const company = {
	name: 'TrueBuild Construction',
	legalName: 'TrueBuild Construction Company Corp.',
	shortName: 'TrueBuild',

	owner: 'Arthur Aslanian',
	ownerTitle: 'General Contractor',

	phone: '(818) 212-7100',
	phoneHref: 'tel:+18182127100',
	email: 'TrueBuildCorp@gmail.com',

	address: {
		street: '4100 W. Alameda Avenue Suite #326',
		city: 'Burbank',
		state: 'CA',
		zip: '91505'
	},

	url: 'https://truebuildcorp.com',

	license: 'CSLB Lic. #1126490',
	licenseNumber: '1126490',
	credentials: 'Bonded & Insured',

	region: 'greater Los Angeles',
	regionShort: 'Greater Los Angeles'

	// TODO (optional): office hours. Left off rather than guessed.
} as const;

/* ---------- services ----------
   One list. He is a general contractor and takes the whole job,
   pools included, so the site does not split them into camps.   */

export type Service = {
	title: string;
	body: string;
	kicker: string;
	icon: string; // key into Icon.svelte
};

export const services: Service[] = [
	{
		title: 'New builds',
		body: 'Ground-up custom homes and light commercial, from the first survey through framing and final inspection.',
		kicker: 'Ground-up',
		icon: 'newbuild'
	},
	{
		title: 'Home additions',
		body: 'Room additions, second storeys and rear extensions. We tie new footings into your foundation and finish it to match the house.',
		kicker: 'Expansion',
		icon: 'house'
	},
	{
		title: 'ADUs & garage conversions',
		body: 'Detached and attached units, junior ADUs and garage conversions, designed to California ADU rules and your lot.',
		kicker: 'ADU',
		icon: 'adu'
	},
	{
		title: 'Remodels',
		body: 'Kitchens, bathrooms and whole-home remodels. We move walls, bring systems up to code, and hand you a schedule.',
		kicker: 'Interior',
		icon: 'remodel'
	},
	{
		title: 'Design & planning',
		body: 'Drawings, structural engineering, Title 24 and the permit package. We carry it through plan check ourselves.',
		kicker: 'Pre-construction',
		icon: 'design'
	},
	{
		title: 'Foundations & groundwork',
		body: 'Excavation, grading, footings, stem walls and slabs, plus retaining walls and drainage.',
		kicker: 'Structural',
		icon: 'foundation'
	},
	{
		title: 'Swimming pools',
		body: 'Gunite and fiberglass pools, spas and water features. Same crew, same licence, same schedule as the house.',
		kicker: 'Pools',
		icon: 'pool'
	},
	{
		title: 'Pool renovation & repair',
		body: 'Replaster, new tile and coping, replumbing, leak detection, equipment and the bonding the code requires.',
		kicker: 'Pools',
		icon: 'trowel'
	},
	{
		title: 'Decks, patios & hardscape',
		body: 'Framed decks, paver and stamped-concrete patios, pool decking, coping, driveways and outdoor kitchens.',
		kicker: 'Exterior',
		icon: 'deck'
	}
];

/* ---------- process ---------- */

export const process = [
	{
		no: '01',
		title: 'Walk the property',
		body: 'We come out and look at the grade, the soil, equipment access and the house you already have. It costs you nothing, and we will say so if the job is not worth doing.'
	},
	{
		no: '02',
		title: 'Design & fixed scope',
		body: 'Drawings, material selections and a line-item scope with real numbers. We state the allowances up front, which keeps surprises off your final invoice.'
	},
	{
		no: '03',
		title: 'Permits & engineering',
		body: 'We prepare the plan set, bring in a structural or soils engineer when the job needs one, and carry it through city plan check.'
	},
	{
		no: '04',
		title: 'Build',
		body: 'Dig, steel, pour, frame, plumb, finish. We clean the site down every day, update you every week, and book inspections so the crew is not left waiting on one.'
	},
	{
		no: '05',
		title: 'Final inspection & warranty',
		body: 'Sign-off, walkthrough and punch list. On pools we start the water chemistry and show you how to run the equipment. You get the warranty in writing.'
	}
];

/* ---------- selected work ----------
   TODO: replace with real projects and photographs. The drawings
   are vector placeholders sized for a 16:10 photo slot.           */

export const work = [
	{
		stamp: 'ADU',
		key: 'ground' as const,
		figure: 'addition' as const,
		title: 'Detached ADU on a Valley lot',
		body: 'A detached accessory dwelling unit behind the main house, on its own foundation with its own utilities and address.',
		meta: ['ADU', 'Foundation', 'Full permit set']
	},
	{
		stamp: 'Pool',
		key: 'water' as const,
		figure: 'poolPlan' as const,
		title: 'Free-form pool, spa & tanning ledge',
		body: 'Gunite shell with an attached raised spa and spillway, pebble finish, travertine coping and a full equipment pad.',
		meta: ['Gunite · 18×40', 'Spa + spillway', 'Automation']
	},
	{
		stamp: 'Groundwork',
		key: 'ground' as const,
		figure: 'retaining' as const,
		title: 'Tiered retaining walls on a sloped lot',
		body: 'Two engineered block tiers with geogrid, drain rock and perforated subdrain. We cut and graded the slope into a usable yard.',
		meta: ['Engineered', 'Excavation', 'Drainage']
	},
	{
		stamp: 'Renovation',
		key: 'water' as const,
		figure: 'renovation' as const,
		title: 'Full renovation of a 1980s plaster pool',
		body: 'We chipped it back to the shell and replumbed it, then added waterline tile, coping, a pebble interior and LED lighting.',
		meta: ['Replaster', 'Retile', 'Replumb']
	}
];

/* ---------- service area ---------- */

export const towns = [
	'North Hills',
	'Van Nuys',
	'Northridge',
	'Sherman Oaks',
	'Encino',
	'Woodland Hills',
	'Calabasas',
	'Studio City',
	'Burbank',
	'Glendale',
	'Pasadena',
	'Hollywood',
	'Beverly Hills',
	'Santa Monica',
	'Culver City',
	'Santa Clarita',
	'Downtown LA',
	'Westwood'
];

/* ---------- FAQ ---------- */

export const faqs = [
	{
		q: 'Are you licensed?',
		a: `Yes. ${company.legalName} holds California contractor's licence ${company.licenseNumber}, and we are bonded and insured. Verify it yourself at cslb.ca.gov before you hire anyone, including us.`
	},
	{
		q: 'Can you build an ADU on my property?',
		a: 'Most likely. California ADU law is generous, though your lot size, setbacks and utilities decide what will pass, along with whether you want it detached, attached or converted from the garage. We walk the property, tell you what the city will approve, and handle the drawings and permits.'
	},
	{
		q: 'Do you handle permits and plan check?',
		a: 'We prepare the plan set, coordinate structural and Title 24 engineering, and take the job through city plan check and inspection. On pools we meet the bonding, grounding and barrier code as part of the build.'
	},
	{
		q: 'What does an estimate cost?',
		a: 'Nothing. We walk the property, talk through what you want, and send a written line-item scope. No pressure and no charge, whether you hire us or not.'
	},
	{
		q: 'How long does a job take?',
		a: 'A remodel runs weeks. An ADU or addition takes a few months once the permits are in hand, and a new pool runs 8 to 14 weeks from the first dig. Permitting is the part no contractor can promise, so we start it early and keep you posted.'
	}
];

/* ---------- quote form options ---------- */

export const scopeOptions = [
	'New build',
	'Home addition',
	'ADU / garage conversion',
	'Remodel',
	'Design & planning',
	'Foundation / groundwork',
	'Pool',
	'Deck / patio',
	'Something else'
];

export const timelineOptions = [
	'As soon as possible',
	'Within 1–3 months',
	'Within 3–6 months',
	'Just gathering estimates'
];

export const budgetOptions = [
	'Not sure yet',
	'Under $25,000',
	'$25,000 – $75,000',
	'$75,000 – $150,000',
	'$150,000 – $350,000',
	'$350,000+'
];

/* ---------- nav ---------- */

export const navLinks = [
	{ href: '#services', label: 'Services' },
	{ href: '#process', label: 'Process' },
	{ href: '#work', label: 'Work' },
	{ href: '#area', label: 'Service area' },
	{ href: '#contact', label: 'Contact' }
];

/* ---------- marquee terms ---------- */

export const trades = [
	'New builds',
	'Home additions',
	'ADUs',
	'Garage conversions',
	'Kitchen & bath remodels',
	'Design & planning',
	'Permits & plan check',
	'Foundations & footings',
	'Excavation & grading',
	'Retaining walls',
	'Swimming pools',
	'Pool renovation',
	'Spas & water features',
	'Decks & hardscape'
];
