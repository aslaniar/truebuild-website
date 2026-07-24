<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Page section with a sticky left "datum rail" — the section number and
	 * label ride down the gutter beside the content, the way a story pole
	 * marks off elevations on site.
	 */
	let {
		id,
		num,
		label,
		tone = 'base',
		children
	}: {
		id?: string;
		num: string;
		label: string;
		tone?: 'base' | 'alt' | 'invert';
		children: Snippet;
	} = $props();
</script>

<section {id} class="section tone-{tone}">
	<div class="wrap grid">
		<div class="rail" aria-hidden="true">
			<div class="rail-inner">
				<span class="rail-num">{num}</span>
				<span class="rail-line"></span>
				<span class="rail-label">{label}</span>
			</div>
		</div>
		<div class="body">
			{@render children()}
		</div>
	</div>
</section>

<style>
	.section {
		padding-block: clamp(46px, 5.2vw, 84px);
		border-top: 1px solid var(--rule);
		position: relative;
	}

	.tone-alt {
		background: var(--bg-2);
	}
	
	.tone-invert {
		background: var(--bitumen);
		--ink: #f2ede3;
		--ink-2: #cdc7ba;
		--muted: #8e887d;
		--rule: #322b22;
		--rule-2: #453d31;
		--accent: var(--gold);
		--accent-ink: #17130c;
		color: var(--ink);
	}

	.grid {
		display: grid;
		gap: 26px;
	}

	@media (min-width: 1100px) {
		.grid {
			grid-template-columns: var(--rail-w) minmax(0, 1fr);
			gap: clamp(24px, 2.4vw, 40px);
		}
	}

	/* ---- rail ---- */
	.rail-inner {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.rail-num {
		font-family: var(--mono);
		font-size: 0.77rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		color: var(--accent);
		font-variant-numeric: tabular-nums;
	}

	.rail-line {
		height: 1px;
		flex: 1;
		background: var(--rule-gold);
	}

	.rail-label {
		font-family: var(--mono);
		font-size: 0.72rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--muted);
	}

	@media (min-width: 1100px) {
		.rail {
			position: sticky;
			top: calc(var(--nav-h) + 30px);
			align-self: start;
			height: max-content;
		}
		.rail-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
		.rail-line {
			width: 1px;
			height: 64px;
			flex: none;
			background: linear-gradient(to bottom, var(--rule-gold), transparent);
		}
		.rail-label {
			writing-mode: vertical-rl;
			font-size: 0.7rem;
			letter-spacing: 0.24em;
		}
	}
</style>
