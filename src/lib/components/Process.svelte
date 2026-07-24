<script lang="ts">
	import { process } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';
	/* Numbered because this genuinely is a sequence — each stage has to
	   close before the next one opens. */
</script>

<div class="head" use:reveal>
	<div class="head-l">
		<p class="label tick">How a job runs</p>
		<h2 class="t-sect">Five stages, and you know which one you are in.</h2>
	</div>
	<p class="lede">
		Each stage closes before the next one opens. You get a written scope, a schedule, and one number to call.
	</p>
</div>

<ol class="process">
	{#each process as step, i}
		<li class="step" use:reveal={i * 60}>
			<span class="bar" aria-hidden="true"></span>
			<span class="no">Stage {step.no}</span>
			<h3 class="t-step">{step.title}</h3>
			<p>{step.body}</p>
		</li>
	{/each}
</ol>

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

	.process {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--rule);
	}

	.step {
		position: relative;
		display: grid;
		gap: 8px;
		padding: clamp(22px, 3vw, 34px) 0;
		border-bottom: 1px solid var(--rule);
		transition: padding-left 0.4s var(--ease);
	}
	@media (min-width: 900px) {
		.step {
			grid-template-columns: 110px minmax(0, 320px) minmax(0, 1fr);
			gap: 36px;
			align-items: start;
		}
		.step:hover {
			padding-left: 16px;
		}
	}

	.bar {
		position: absolute;
		left: 0;
		top: 0;
		bottom: -1px;
		width: 2px;
		background: var(--accent);
		transform: scaleY(0);
		transform-origin: top;
		transition: transform 0.45s var(--ease);
	}
	.step:hover .bar {
		transform: scaleY(1);
	}

	.no {
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--accent);
		padding-top: 0.4em;
		font-variant-numeric: tabular-nums;
	}

	.t-step {
		font-size: clamp(1.3rem, 2.2vw, 1.85rem);
		font-stretch: 112%;
	}

	p {
		font-size: 1rem;
		color: var(--muted);
	}
</style>
