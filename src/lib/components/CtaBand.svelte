<script lang="ts">
	import { company } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="band">
	<div class="rules" aria-hidden="true"></div>
	<div class="wrap inner" use:reveal>
		<p class="label tick">Ready when you are</p>
		<h2 class="t-sect">
			Tell us about the house, the yard, or <span class="gold">both.</span>
		</h2>
		<div class="btn-row">
			<a class="btn" href="#contact">
				Request an estimate <span class="arw" aria-hidden="true">&rarr;</span>
			</a>
			<a class="btn btn-ghost" href={company.phoneHref}>{company.phone}</a>
		</div>
	</div>
</section>

<style>
	.band {
		position: relative;
		background: var(--bitumen);
		border-top: 1px solid var(--rule);
		padding-block: clamp(52px, 5.5vw, 84px);
		overflow: hidden;
		/* the band is always dark, so pin the tokens it renders with */
		--ink: #f2ede3;
		--ink-2: #cdc7ba;
		--muted: #8e887d;
		--rule-2: #453d31;
		--accent: var(--gold);
		--accent-ink: #17130c;
		color: var(--ink);
	}

	.rules {
		position: absolute;
		inset: 0;
		background-image: repeating-linear-gradient(
			to right,
			rgba(242, 237, 227, 0.055) 0 1px,
			transparent 1px 92px
		);
		pointer-events: none;
	}

	.inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: flex-start;
	}

	h2 {
		max-width: 19ch;
	}
</style>
