<script lang="ts">
	import LogoMark from './LogoMark.svelte';
	import { company, navLinks } from '$lib/data/site';

	/* Deliberately thin. The contact section sits directly above this, so
	   repeating the address, email and the full service list here would be
	   the third time a visitor reads them. */
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="wrap top">
		<div class="brand-col">
			<a class="brand" href="#top">
				<LogoMark size={42} />
				<span class="brand-type">
					<span class="brand-name">TRUEBUILD</span>
					<span class="brand-sub">Construction</span>
				</span>
			</a>
			<p>Licensed general contractor in {company.address.city}, working across {company.region}.</p>
		</div>

		<nav class="links" aria-label="Footer">
			{#each navLinks as link}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>
	</div>

	<div class="wrap bottom">
		<span>&copy; {year} {company.legalName}</span>
		<span>{company.license} · {company.credentials}</span>
	</div>
</footer>

<style>
	.footer {
		background: var(--bg-2);
		border-top: 1px solid var(--rule);
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		gap: 32px 48px;
		align-items: flex-start;
		justify-content: space-between;
		padding-block: clamp(38px, 4.5vw, 60px);
	}

	.brand-col {
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: flex-start;
		max-width: 34ch;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 13px;
		text-decoration: none;
	}
	.brand-type {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.brand-name {
		font-family: var(--display);
		font-weight: 750;
		font-stretch: 118%;
		font-size: 1.14rem;
		letter-spacing: 0.02em;
		line-height: 1;
	}
	.brand-sub {
		font-family: var(--mono);
		font-size: 0.62rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--muted);
		line-height: 1;
	}
	.brand-col p {
		font-size: 0.97rem;
		color: var(--muted);
	}

	.links {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, auto));
		gap: 12px 40px;
	}
	@media (min-width: 1000px) {
		.links {
			grid-template-columns: repeat(3, minmax(0, auto));
		}
	}
	.links a {
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.13em;
		text-transform: uppercase;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.2s var(--ease);
	}
	.links a:hover {
		color: var(--accent);
	}

	.bottom {
		border-top: 1px solid var(--rule);
		padding-block: 20px;
		display: flex;
		flex-wrap: wrap;
		gap: 8px 26px;
		align-items: center;
		font-family: var(--mono);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
	}
</style>
