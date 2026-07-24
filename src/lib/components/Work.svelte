<script lang="ts">
	import Figure from './Figure.svelte';
	import { work } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';
</script>

<div class="head" use:reveal>
	<div class="head-l">
		<p class="label tick">Selected work</p>
		<h2 class="t-sect">Jobs that needed both crews on the same lot.</h2>
	</div>
	<p class="lede">
		We are proudest of the lots that needed a foundation crew and a pool crew at once, where a retaining wall holds back the hill the infinity edge looks over.
	</p>
</div>

<div class="grid">
	{#each work as item, i}
		<article class="work" use:reveal={i * 70}>
			<div class="fig">
				<Figure name={item.figure} label={item.title} />
				<span class="stamp" class:water={item.key === 'water'}>{item.stamp}</span>
			</div>
			<div class="body">
				<h3 class="t-card">{item.title}</h3>
				<p>{item.body}</p>
				<div class="meta">
					{#each item.meta as m}<span>{m}</span>{/each}
				</div>
			</div>
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
		gap: clamp(18px, 2.2vw, 28px);
	}
	@media (min-width: 780px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.work {
		border: 1px solid var(--rule);
		background: var(--bg);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition:
			border-color 0.32s var(--ease),
			transform 0.4s var(--ease),
			box-shadow 0.4s var(--ease);
	}
	.work:hover {
		border-color: var(--rule-2);
		transform: translateY(-4px);
		box-shadow: var(--shadow);
	}

	.fig {
		position: relative;
		aspect-ratio: 16 / 10;
		border-bottom: 1px solid var(--rule);
		overflow: hidden;
	}

	.stamp {
		position: absolute;
		top: 14px;
		left: 14px;
		font-family: var(--mono);
		font-size: 0.63rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		padding: 5px 10px;
		border: 1px solid currentColor;
		background: color-mix(in srgb, var(--bg) 80%, transparent);
		color: var(--accent);
	}
	.stamp.water {
		color: color-mix(in srgb, var(--water) 80%, var(--ink));
	}

	.body {
		padding: clamp(20px, 2.2vw, 30px);
		display: flex;
		flex-direction: column;
		gap: 11px;
		flex: 1;
	}

	p {
		font-size: 0.97rem;
		color: var(--muted);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 18px;
		margin-top: auto;
		padding-top: 15px;
		border-top: 1px solid var(--rule);
		font-family: var(--mono);
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}
</style>
