<script lang="ts">
	import LogoMark from './LogoMark.svelte';
	import { company, navLinks } from '$lib/data/site';

	let scrolled = $state(false);
	let open = $state(false);
	let theme = $state<'dark' | 'light'>('dark');

	$effect(() => {
		theme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ?? 'dark';

		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);
		try {
			localStorage.setItem('tb-theme', theme);
		} catch {
			/* private mode — the choice just won't persist */
		}
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<header class="nav" class:scrolled>
	<div class="wrap nav-inner">
		<a class="brand" href="#top" onclick={() => (open = false)}>
			<LogoMark size={38} />
			<span class="brand-type">
				<span class="brand-name">TRUEBUILD</span>
				<span class="brand-sub">Construction</span>
			</span>
		</a>

		<nav class="links" aria-label="Sections">
			{#each navLinks as link}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<div class="actions">
			<!-- tap-to-call outranks the theme switch on a phone -->
			<a class="icon-btn call" href={company.phoneHref} aria-label="Call {company.phone}">
				<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
					<path
						d="M6.3 3.5h3.1l1.6 4-2 1.2a11.4 11.4 0 0 0 5.3 5.3l1.2-2 4 1.6v3.1a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 4.5 5.5a1.8 1.8 0 0 1 1.8-2z"
						stroke-linejoin="round"
					/>
				</svg>
			</a>

			<button
				class="icon-btn theme"
				onclick={toggleTheme}
				aria-label="Switch to {theme === 'dark' ? 'light' : 'dark'} theme"
				title="Switch to {theme === 'dark' ? 'light' : 'dark'} theme"
			>
				{#if theme === 'dark'}
					<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
						<circle cx="12" cy="12" r="4.2" />
						<path d="M12 2.4v2.4M12 19.2v2.4M2.4 12h2.4M19.2 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" stroke-linecap="round" />
					</svg>
				{:else}
					<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
						<path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a6.9 6.9 0 0 0 11.1 11.1z" stroke-linejoin="round" />
					</svg>
				{/if}
			</button>

			<a class="phone" href={company.phoneHref}>{company.phone}</a>

			<a class="quote-cta" href="#contact">Free estimate</a>

			<button
				class="icon-btn burger"
				onclick={() => (open = !open)}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
			>
				<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
					{#if open}
						<path d="M5 5l14 14M19 5L5 19" stroke-linecap="round" />
					{:else}
						<path d="M3 7h18M3 12h18M3 17h18" stroke-linecap="round" />
					{/if}
				</svg>
			</button>
		</div>
	</div>
</header>

{#if open}
	<div class="sheet">
		<nav aria-label="Sections">
			{#each navLinks as link}
				<a href={link.href} onclick={() => (open = false)}>
					<span class="sheet-label">{link.label}</span>
				</a>
			{/each}
		</nav>
		<div class="sheet-foot">
			<a class="btn" href="#contact" onclick={() => (open = false)}>
				Free estimate <span class="arw" aria-hidden="true">&rarr;</span>
			</a>
			<a class="sheet-phone" href={company.phoneHref}>{company.phone}</a>
		</div>
	</div>
{/if}

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 80;
		height: var(--nav-h);
		display: flex;
		align-items: center;
		border-bottom: 1px solid transparent;
		transition:
			background 0.35s var(--ease),
			border-color 0.35s var(--ease),
			backdrop-filter 0.35s var(--ease);
	}
	.nav.scrolled {
		background: color-mix(in srgb, var(--bg) 84%, transparent);
		backdrop-filter: saturate(160%) blur(16px);
		-webkit-backdrop-filter: saturate(160%) blur(16px);
		border-bottom-color: var(--rule);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		gap: 24px;
		width: 100%;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		margin-right: auto;
	}
	.brand-type {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}
	.brand-name {
		font-family: var(--display);
		font-weight: 750;
		font-stretch: 118%;
		font-size: 1.02rem;
		letter-spacing: 0.02em;
		line-height: 1;
	}
	.brand-sub {
		font-family: var(--mono);
		font-size: 0.6rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--muted);
		line-height: 1;
	}

	.links {
		display: none;
		gap: 26px;
	}
	@media (min-width: 1180px) {
		.links {
			display: flex;
		}
	}
	.links a {
		position: relative;
		font-family: var(--mono);
		font-size: 0.74rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
		text-decoration: none;
		padding: 6px 0;
		transition: color 0.2s var(--ease);
	}
	.links a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background: var(--accent);
		transition: width 0.3s var(--ease);
	}
	.links a:hover {
		color: var(--ink);
	}
	.links a:hover::after {
		width: 100%;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.icon-btn {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--rule-2);
		background: transparent;
		color: var(--ink-2);
		border-radius: 1px;
		cursor: pointer;
		transition:
			border-color 0.2s var(--ease),
			color 0.2s var(--ease);
	}
	.icon-btn:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.burger {
		display: grid;
	}
	@media (min-width: 1180px) {
		.burger {
			display: none;
		}
	}

	/* the icon-only call button covers the range where the number itself is hidden */
	.call {
		display: grid;
	}
	@media (min-width: 720px) {
		.call {
			display: none;
		}
	}

	.phone {
		display: none;
		align-items: center;
		gap: 0.6em;
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		padding: 9px 15px;
		border: 1px solid var(--rule-2);
		border-radius: 1px;
		white-space: nowrap;
		transition:
			border-color 0.2s var(--ease),
			color 0.2s var(--ease);
	}
	@media (min-width: 720px) {
		.phone {
			display: inline-flex;
		}
	}
	.phone:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.quote-cta {
		display: none;
		font-family: var(--mono);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-decoration: none;
		padding: 10px 18px;
		border: 1px solid var(--accent);
		background: var(--accent);
		color: var(--accent-ink);
		border-radius: 1px;
		white-space: nowrap;
		transition:
			background 0.22s var(--ease),
			color 0.22s var(--ease);
	}
	@media (min-width: 1180px) {
		.quote-cta {
			display: inline-flex;
		}
	}
	.quote-cta:hover {
		background: transparent;
		color: var(--accent);
	}

	/* ---- mobile sheet ---- */
	.sheet {
		position: fixed;
		inset: var(--nav-h) 0 0;
		z-index: 79;
		background: var(--bg);
		border-top: 1px solid var(--rule);
		padding: clamp(24px, 6vw, 48px) var(--pad) 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 32px;
		overflow-y: auto;
		animation: sheetIn 0.35s var(--ease);
	}
	@media (min-width: 1180px) {
		.sheet {
			display: none;
		}
	}
	@keyframes sheetIn {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
	}
	.sheet nav {
		display: flex;
		flex-direction: column;
	}
	.sheet nav a {
		padding: 18px 0;
		border-bottom: 1px solid var(--rule);
		text-decoration: none;
		font-family: var(--display);
		font-weight: 750;
		font-stretch: 118%;
		font-size: clamp(1.6rem, 6vw, 2.2rem);
		letter-spacing: -0.03em;
		transition: color 0.2s var(--ease);
	}
	.sheet nav a:hover {
		color: var(--accent);
	}
	.sheet-foot {
		display: flex;
		flex-direction: column;
		gap: 18px;
		align-items: flex-start;
	}
	.sheet-phone {
		font-family: var(--mono);
		font-size: 0.82rem;
		letter-spacing: 0.12em;
		color: var(--muted);
		text-decoration: none;
	}
</style>
