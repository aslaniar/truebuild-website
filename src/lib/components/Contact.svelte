<script lang="ts">
	import { company } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';

	const lines: {
		lab: string;
		val: string;
		href: string | null;
		big: boolean;
		tight?: boolean;
	}[] = [
		{ lab: 'Call the office', val: company.phone, href: company.phoneHref, big: true },
		{ lab: 'Email', val: company.email, href: `mailto:${company.email}`, big: true, tight: true },
		{
			lab: 'Office',
			val: `${company.address.street}\n${company.address.city}, ${company.address.state} ${company.address.zip}`,
			href: null,
			big: false,
			tight: true
		},
		{
			lab: "Who you'll speak to",
			val: `${company.owner}\n${company.ownerTitle}`,
			href: null,
			big: false
		}
	];
</script>

<div class="head" use:reveal>
	<div class="head-l">
		<p class="label tick">Free estimate</p>
		<h2 class="t-sect">Pick up the phone.</h2>
	</div>
	<p class="lede">
		Tell us what you are thinking of building. We come out, walk the property and send a written
		scope, usually within the same week. No charge either way.
	</p>
</div>

<div class="tiles" use:reveal={70}>
	{#each lines as l}
		<div class="tile">
			<span class="lab">{l.lab}</span>
			{#if l.href}
				<a class="val" class:big={l.big} class:tight={l.tight} href={l.href}>{l.val}</a>
			{:else}
				<span class="val" class:big={l.big} class:tight={l.tight}>{l.val}</span>
			{/if}
		</div>
	{/each}
</div>

<div class="foot" use:reveal={120}>
	<div class="btn-row">
		<a class="btn" href={company.phoneHref}>
			Call {company.phone} <span class="arw" aria-hidden="true">&rarr;</span>
		</a>
		<a class="btn btn-ghost" href="mailto:{company.email}">Send an email</a>
	</div>
	<p class="cred">{company.legalName} · {company.license} · {company.credentials}</p>
</div>

<style>
	.head {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-bottom: clamp(26px, 3vw, 40px);
	}
	.head-l {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	@media (min-width: 960px) {
		.head {
			display: grid;
			grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
			gap: 56px;
			align-items: end;
		}
	}

	.tiles {
		display: grid;
		gap: 1px;
		background: var(--rule);
		border: 1px solid var(--rule);
	}
	@media (min-width: 620px) {
		.tiles {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		}
	}
	@media (min-width: 1100px) {
		.tiles {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	.tile {
		background: var(--surface);
		padding: clamp(22px, 2.4vw, 32px);
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-height: 150px;
	}

	.lab {
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.17em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.val {
		font-family: var(--display);
		font-weight: 680;
		font-stretch: 108%;
		font-size: 1.05rem;
		letter-spacing: -0.02em;
		line-height: 1.5;
		text-decoration: none;
		white-space: pre-line;
		margin-top: auto;
		color: var(--ink-2);
		overflow-wrap: anywhere;
	}
		.val.big {
		font-size: clamp(1.15rem, 1.6vw, 1.4rem);
		font-weight: 750;
		font-stretch: 114%;
		letter-spacing: -0.032em;
		line-height: 1.25;
		color: var(--ink);
	}
	/* the gmail address is 23 characters and will not fit at display size */
	.val.tight {
		font-size: clamp(0.95rem, 1.05vw, 1.05rem);
		font-stretch: 100%;
		letter-spacing: -0.005em;
	}

	a.val {
		transition: color 0.2s var(--ease);
	}
	a.val:hover {
		color: var(--accent);
	}

	.foot {
		margin-top: clamp(26px, 3vw, 40px);
		display: flex;
		flex-wrap: wrap;
		gap: 20px 32px;
		align-items: center;
		justify-content: space-between;
	}

	.cred {
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		line-height: 1.8;
		color: var(--muted);
	}
</style>
