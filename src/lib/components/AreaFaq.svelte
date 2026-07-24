<script lang="ts">
	import { towns, faqs } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';
</script>

<div class="split">
	<div use:reveal>
		<div class="head">
			<p class="label tick">Where we work</p>
			<h2 class="t-sect">We cover greater Los Angeles.</h2>
			<p class="lede">
				We work out of North Hills and take jobs across greater Los Angeles, from the Valley over to the Westside and out to Pasadena.
			</p>
		</div>

		<ul class="towns">
			{#each towns as town}
				<li>{town}</li>
			{/each}
		</ul>

		<p class="note">
			Not on the list? Call anyway! We travel for larger builds.
		</p>
	</div>

	<div use:reveal={80}>
		<div class="head">
			<p class="label tick">Questions we get</p>
			<h2 class="t-sect">Straight answers.</h2>
		</div>

		<div class="faq">
			{#each faqs as item}
				<details>
					<summary>
						<span>{item.q}</span>
						<span class="sign" aria-hidden="true">+</span>
					</summary>
					<div class="ans"><p>{item.a}</p></div>
				</details>
			{/each}
		</div>
	</div>
</div>

<style>
	.split {
		display: grid;
		gap: clamp(48px, 5vw, 76px);
	}
	@media (min-width: 1000px) {
		.split {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
			align-items: start;
		}
	}

	.head {
		display: flex;
		flex-direction: column;
		gap: 18px;
		margin-bottom: 30px;
	}

	.towns {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 0 26px;
		border-top: 1px solid var(--rule);
	}
	.towns li {
		display: flex;
		align-items: center;
		gap: 11px;
		padding: 11px 0;
		border-bottom: 1px solid var(--rule);
		font-size: 0.98rem;
		color: var(--ink-2);
	}
	.towns li::before {
		content: '';
		width: 5px;
		height: 5px;
		background: var(--accent);
		transform: rotate(45deg);
		flex: none;
	}

	.note {
		margin-top: 18px;
		font-family: var(--mono);
		font-size: 0.71rem;
		letter-spacing: 0.08em;
		line-height: 1.8;
		color: var(--muted);
	}

	/* ---- faq ---- */
	.faq {
		border-top: 1px solid var(--rule);
	}
	details {
		border-bottom: 1px solid var(--rule);
	}

	summary {
		list-style: none;
		cursor: pointer;
		display: flex;
		align-items: baseline;
		gap: 22px;
		padding: clamp(17px, 2vw, 24px) 0;
		font-family: var(--display);
		font-weight: 680;
		font-stretch: 108%;
		font-size: clamp(1.02rem, 1.6vw, 1.24rem);
		letter-spacing: -0.02em;
		line-height: 1.25;
		transition: color 0.22s var(--ease);
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary:hover {
		color: var(--accent);
	}

	.sign {
		margin-left: auto;
		flex: none;
		font-family: var(--mono);
		font-size: 1.05rem;
		font-weight: 400;
		color: var(--muted);
		line-height: 1;
		transition:
			transform 0.32s var(--ease),
			color 0.22s var(--ease);
	}
	details[open] .sign {
		transform: rotate(45deg);
		color: var(--accent);
	}

	.ans {
		padding-bottom: 26px;
	}
	.ans p {
		font-size: 1rem;
		color: var(--muted);
		max-width: 58ch;
	}
</style>
