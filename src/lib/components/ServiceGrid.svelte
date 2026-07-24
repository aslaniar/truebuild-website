<script lang="ts">
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Service } from '$lib/data/site';

	let {
		eyebrow,
		title,
		lede,
				services,
		titleAccent,
		titleTail
	}: {
		eyebrow: string;
		title: string;
		lede: string;
		services: Service[];
		titleAccent?: string;
		titleTail?: string;
	} = $props();
</script>

<div class="head" use:reveal>
	<div class="head-l">
		<p class="label tick label-gold">{eyebrow}</p>
		<h2 class="t-sect">
			{title}{#if titleAccent}<em class="ital">{titleAccent}</em>{/if}{titleTail ?? ''}
		</h2>
	</div>
	<p class="lede">{lede}</p>
</div>

<div class="grid" use:reveal={90}>
	{#each services as s}
		<article class="card">
			<span class="ico"><Icon name={s.icon} /></span>
			<h3 class="t-card">{s.title}</h3>
			<p>{s.body}</p>
			<span class="kicker">{s.kicker}</span>
		</article>
	{/each}
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

	.grid {
		display: grid;
		gap: 1px;
		background: var(--rule);
		border: 1px solid var(--rule);
	}
	@media (min-width: 620px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 1040px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.card {
		background: var(--bg);
		padding: clamp(24px, 2.5vw, 36px);
		display: flex;
		flex-direction: column;
		gap: 13px;
		position: relative;
		transition: background 0.32s var(--ease);
	}
	.card::before {
		content: '';
		position: absolute;
		inset: 0 auto 0 0;
		width: 2px;
		background: var(--accent);
		transform: scaleY(0);
		transform-origin: top;
		transition: transform 0.4s var(--ease);
	}
	.card:hover {
		background: var(--surface);
	}
	.card:hover::before {
		transform: scaleY(1);
	}

	.ico {
		color: var(--accent);
		margin-bottom: 2px;
	}

	p {
		font-size: 0.97rem;
		line-height: 1.58;
		color: var(--muted);
	}

	.kicker {
		margin-top: auto;
		padding-top: 14px;
		font-family: var(--mono);
		font-size: 0.68rem;
		letter-spacing: 0.19em;
		text-transform: uppercase;
		color: var(--accent);
	}
</style>
