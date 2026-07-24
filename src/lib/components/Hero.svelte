<script lang="ts">
	import LogoMark from './LogoMark.svelte';
	import { company } from '$lib/data/site';

	/* The full TB mark sits oversized behind the type, with a gold datum line
	   drawing across on load and a specular sweep travelling over the B. */
	const specs = [
		['Licence', `${company.license} · ${company.credentials}`],
		['Based in', `${company.address.city}, ${company.address.state}. Serving ${company.region}`],
		['Contractor', `${company.owner}, ${company.ownerTitle}`],
		['Estimates', 'Free, on-site, no obligation']
	];
</script>

<section class="hero" id="top">
	<div class="field" aria-hidden="true"></div>

	<div class="ghost" aria-hidden="true">
		<LogoMark />
		<span class="sheen"></span>
	</div>

	<div class="wrap inner">
		<p class="label tick eyebrow">
			Licensed general contractor · {company.regionShort}
		</p>

		<h1 class="t-hero">
			<span class="w" style="--i: 0">We build it</span>
			<span class="w gold" style="--i: 1">true.</span>
		</h1>

		<div class="datum" aria-hidden="true"></div>

		<p class="lede">
			We build new homes, additions, ADUs and remodels across {company.region}. We draw the plans
			and pull the permits ourselves, and we build pools.
		</p>

		<div class="btn-row">
			<a class="btn" href="#contact">Get a free estimate <span class="arw" aria-hidden="true">&rarr;</span></a>
			<a class="btn btn-ghost" href="#services">See what we do</a>
		</div>
	</div>

	<div class="wrap">
		<dl class="specs">
			{#each specs as [term, detail]}
				<div class="spec">
					<dt>{term}</dt>
					<dd>{detail}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: min(calc(100svh - var(--nav-h)), 740px);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: clip;
		padding-top: clamp(24px, 5vh, 56px);
	}

	/* elevation-drawing grid, fading out toward the top */
	.field {
		position: absolute;
		inset: 0;
		z-index: 0;
		background-image:
			repeating-linear-gradient(to right, var(--rule) 0 1px, transparent 1px 96px),
			repeating-linear-gradient(to bottom, var(--rule) 0 1px, transparent 1px 96px);
		opacity: 0.55;
		-webkit-mask-image: radial-gradient(120% 90% at 12% 100%, #000 20%, transparent 72%);
		mask-image: radial-gradient(120% 90% at 12% 100%, #000 20%, transparent 72%);
		pointer-events: none;
	}

	/* the whole TB mark — roofline, T and B — oversized behind the type */
	.ghost {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		/* Height-driven so the mark always fits between the nav and the datum
		   strip. Sizing by width let the roofline run up under the header. */
		height: 84%;
		width: auto;
		aspect-ratio: 185.25 / 157.48; /* the mark's own viewBox proportion */
		z-index: 0;
		pointer-events: none;
		opacity: 0.09;
		/* the logo's T and B sit flush with its bounding box, so an unmasked
		   watermark ends on a hard horizontal cut. Dissolve the edges. */
		-webkit-mask-image: radial-gradient(96% 96% at 62% 50%, #000 40%, transparent 92%);
		mask-image: radial-gradient(96% 96% at 62% 50%, #000 40%, transparent 92%);
	}
	:root[data-theme='light'] .ghost {
		opacity: 0.13;
	}
	.ghost :global(svg) {
		width: 100%;
		height: 100%;
	}

	/* The sweep belongs to the gold B alone, so it is pinned to the B's
	   sub-rectangle within the mark's viewBox and masked by the B itself. */
	.sheen {
		position: absolute;
		left: 41.99%;
		top: 21.97%;
		width: 50.66%;
		height: 78.03%;
		background: linear-gradient(
			104deg,
			transparent 38%,
			color-mix(in srgb, var(--gold-hi) 85%, transparent) 47%,
			color-mix(in srgb, var(--bone) 70%, transparent) 50%,
			color-mix(in srgb, var(--gold-hi) 85%, transparent) 53%,
			transparent 62%
		);
		background-size: 300% 100%;
		-webkit-mask-image: url('/tb-b.webp');
		mask-image: url('/tb-b.webp');
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		opacity: 0.55;
		animation: sweep 9s var(--ease) 1.4s infinite;
	}
	@keyframes sweep {
		0% {
			background-position: 160% 0;
		}
		38%,
		100% {
			background-position: -60% 0;
		}
	}

	@media (max-width: 860px) {
		.ghost {
			right: -18%;
			top: 46%;
			height: 62%;
			opacity: 0.07;
		}
		:root[data-theme='light'] .ghost {
			opacity: 0.1;
		}
	}

	.inner {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 22px);
		padding-bottom: clamp(24px, 4vh, 44px);
	}

	.eyebrow {
		animation: rise 0.8s var(--ease) both;
	}

	h1 {
		display: flex;
		flex-direction: column;
		margin-block: 4px 0;
	}
	.w {
		display: block;
		animation: rise 0.9s var(--ease) both;
		animation-delay: calc(0.12s + var(--i) * 0.1s);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(0.3em);
		}
	}

	/* the datum: a gold hairline that finds true across the page */
	.datum {
		height: 1px;
		width: 100%;
		max-width: 720px;
		background: linear-gradient(to right, var(--accent), var(--rule-gold) 70%, transparent);
		transform-origin: left;
		animation: draw 1.1s var(--ease) 0.5s both;
	}
	@keyframes draw {
		from {
			transform: scaleX(0);
		}
	}

	.lede {
		max-width: 50ch;
		animation: rise 0.9s var(--ease) 0.62s both;
	}
	.btn-row {
		animation: rise 0.9s var(--ease) 0.74s both;
	}

	/* ---- datum strip ---- */
	.specs {
		position: relative;
		z-index: 2;
		margin: 0;
		border-top: 1px solid var(--rule);
		display: grid;
		grid-template-columns: 1fr;
		animation: rise 0.9s var(--ease) 0.86s both;
	}
	@media (min-width: 780px) {
		.specs {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.spec {
		padding: 20px 0 22px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	@media (min-width: 780px) {
		.spec {
			padding: 22px 26px 26px;
			border-left: 1px solid var(--rule);
		}
		.spec:first-child {
			padding-left: 0;
			border-left: 0;
		}
	}
	@media (max-width: 779px) {
		.spec + .spec {
			border-top: 1px solid var(--rule);
		}
	}

	dt {
		font-family: var(--mono);
		font-size: 0.7rem;
		letter-spacing: 0.19em;
		text-transform: uppercase;
		color: var(--accent);
	}
	dd {
		margin: 0;
		font-family: var(--display);
		font-weight: 620;
		font-stretch: 104%;
		font-size: 1.03rem;
		letter-spacing: -0.018em;
		line-height: 1.3;
		color: var(--ink-2);
	}

	@media (prefers-reduced-motion: reduce) {
		.sheen {
			animation: none;
			opacity: 0;
		}
	}
</style>
