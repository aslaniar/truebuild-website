<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
	import Section from '$lib/components/Section.svelte';
	import ServiceGrid from '$lib/components/ServiceGrid.svelte';
	import Process from '$lib/components/Process.svelte';
	import Work from '$lib/components/Work.svelte';
	import AreaFaq from '$lib/components/AreaFaq.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { company, services, faqs, towns } from '$lib/data/site';

	const title = `${company.name} — General Contractor in ${company.address.city}, CA`;

	const description =
		`Licensed general contractor (${company.license}) in ${company.address.city}, CA. ` +
		`New builds, home additions, ADUs, remodels, design and planning, pools and groundwork ` +
		`across ${company.region}.`;

	// Local structured data. This is what puts the business in map results.
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'GeneralContractor',
		name: company.legalName,
		alternateName: company.name,
		description,
		telephone: company.phone,
		email: company.email,
		founder: { '@type': 'Person', name: company.owner, jobTitle: company.ownerTitle },
		address: {
			'@type': 'PostalAddress',
			streetAddress: company.address.street,
			addressLocality: company.address.city,
			addressRegion: company.address.state,
			postalCode: company.address.zip,
			addressCountry: 'US'
		},
		areaServed: towns.map((t) => ({ '@type': 'City', name: `${t}, CA` })),
		hasCredential: {
			'@type': 'EducationalOccupationalCredential',
			credentialCategory: 'California Contractors State License Board',
			identifier: company.licenseNumber
		},
		makesOffer: services.map((s) => ({
			'@type': 'Offer',
			itemOffered: { '@type': 'Service', name: s.title, description: s.body }
		}))
	};

	const faqLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}<\/script>`}
</svelte:head>

<Nav />

<main>
	<Hero />
	<Ticker />

	<Section id="services" num="01" label="Services">
		<ServiceGrid
			eyebrow="What we do"
			title="One licensed contractor for the "
			titleAccent="whole"
			titleTail=" job."
			lede="We hold the general contractor's licence, so we run all of it: drawings, plan check, permits, trades, inspections and schedule. The pool in the back yard is the same licence and the same crew as the addition on the house."
			{services}
		/>
	</Section>

	<Section id="process" num="02" label="Process">
		<Process />
	</Section>

	<Section id="work" num="03" label="Work" tone="alt">
		<Work />
	</Section>

		<CtaBand />

	<Section id="area" num="04" label="Area & FAQ">
		<AreaFaq />
	</Section>

	<Section id="contact" num="05" label="Contact">
		<Contact />
	</Section>
</main>

<Footer />
