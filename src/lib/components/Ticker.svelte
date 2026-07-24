<script lang="ts">
	import { trades } from '$lib/data/site';
	// duplicated so the -50% translation loops seamlessly
	const run = [...trades, ...trades];
</script>

<div class="ticker" aria-hidden="true">
	<div class="track">
		{#each run as trade}
			<span>{trade}</span>
		{/each}
	</div>
</div>

<style>
	.ticker {
		border-block: 1px solid var(--rule);
		background: var(--bg-2);
		overflow: hidden;
		padding-block: 14px;
		-webkit-mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
		mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
	}

	.track {
		display: flex;
		width: max-content;
		animation: slide 52s linear infinite;
	}
	.ticker:hover .track {
		animation-play-state: paused;
	}
	@keyframes slide {
		to {
			transform: translate3d(-50%, 0, 0);
		}
	}

	span {
		display: inline-flex;
		align-items: center;
		gap: 28px;
		padding-inline: 28px;
		white-space: nowrap;
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--muted);
	}
	span::after {
		content: '';
		width: 4px;
		height: 4px;
		background: var(--accent);
		transform: rotate(45deg);
		flex: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
		}
	}
</style>
