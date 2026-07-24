<script lang="ts">
	/**
	 * Placeholder project drawings, sized for the 16:10 slot a photograph
	 * will eventually occupy. Drawn as plans and sections rather than grey
	 * boxes, so the grid reads as intentional until the photos land.
	 */
	let { name, label }: { name: string; label: string } = $props();
</script>

<svg viewBox="0 0 400 250" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
	<rect width="400" height="250" class="ground" />

	<g class="grid">
		<path d="M0 40h400M0 90h400M0 140h400M0 190h400M60 0v250M140 0v250M220 0v250M300 0v250" />
	</g>

	{#if name === 'poolPlan'}
		<rect x="52" y="52" width="296" height="146" class="setback" />
		<path
			d="M92 92h150a44 44 0 0 1 0 76H92a34 34 0 0 1 0-76z"
			class="water-fill"
		/>
		<circle cx="278" cy="130" r="30" class="water-fill deep" />
		<rect x="96" y="96" width="42" height="68" class="ledge" />
		<g class="dim">
			<path d="M52 214h296M52 209v10M348 209v10" />
		</g>
		<text x="200" y="232" class="dim-text">40'-0"</text>
	{:else if name === 'addition'}
		<path d="M40 200V120l70-46 70 46v80z" class="existing" />
		<path d="M180 200v-58l60-38 60 38v58z" class="new-build" />
		<g class="opening">
			<rect x="210" y="150" width="20" height="20" />
			<rect x="250" y="150" width="20" height="20" />
			<rect x="210" y="176" width="20" height="20" />
			<rect x="250" y="176" width="20" height="20" />
		</g>
		<path d="M28 200h344" class="grade" />
		<path d="M28 205h344" class="grade-hatch" />
		<text x="240" y="228" class="dim-text">NEW</text>
		<text x="110" y="228" class="muted-text">EXISTING</text>
	{:else if name === 'retaining'}
		<path d="M0 210h130v-46h120v-46h150V60H0z" class="soil" />
		<path d="M0 210h130v-46h120v-46h150" class="wall-line" />
		<g class="drain">
			<circle cx="146" cy="196" r="5" />
			<circle cx="266" cy="150" r="5" />
			<path d="M146 201v14M266 155v14" />
		</g>
		<path d="M0 226h400" class="grade-hatch" />
		<text x="200" y="243" class="muted-text">TIERED WALL + SUBDRAIN</text>
	{:else if name === 'renovation'}
		<rect x="34" y="86" width="140" height="88" rx="2" class="before" />
		<g class="crack">
			<path d="M44 106l120 48M164 106l-120 48" />
		</g>
		<rect x="226" y="86" width="140" height="88" rx="2" class="water-fill after" />
		<rect x="226" y="76" width="140" height="10" class="tile" />
		<path
			d="M236 148c9 0 9 6 18 6s9-6 18-6 9 6 18 6 9-6 18-6 9 6 18 6"
			class="ripple"
		/>
		<path d="M190 130h20M204 124l8 6-8 6" class="arrow" />
		<text x="104" y="204" class="muted-text">BEFORE</text>
		<text x="296" y="204" class="dim-text">AFTER</text>
	{/if}
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.ground {
		fill: var(--surface);
	}
	.grid path {
		stroke: var(--rule);
		stroke-width: 1;
		fill: none;
	}

	.setback {
		fill: none;
		stroke: var(--muted);
		stroke-width: 1;
		stroke-dasharray: 5 5;
	}

	.water-fill {
		fill: color-mix(in srgb, var(--water) 42%, transparent);
		stroke: color-mix(in srgb, var(--water) 90%, var(--ink));
		stroke-width: 2;
	}
	.deep {
		fill: color-mix(in srgb, var(--water) 62%, transparent);
	}
	.ledge {
		fill: color-mix(in srgb, var(--water) 26%, transparent);
	}

	.existing {
		fill: none;
		stroke: var(--muted);
		stroke-width: 1.6;
		stroke-dasharray: 5 4;
	}
	.new-build {
		fill: color-mix(in srgb, var(--accent) 20%, transparent);
		stroke: var(--accent);
		stroke-width: 2;
	}
	.opening rect {
		fill: none;
		stroke: var(--accent);
		stroke-width: 1.4;
	}

	.grade {
		stroke: var(--ink);
		stroke-width: 2;
		fill: none;
	}
	.grade-hatch {
		stroke: var(--muted);
		stroke-width: 1;
		stroke-dasharray: 3 4;
		fill: none;
	}

	.soil {
		fill: color-mix(in srgb, var(--accent) 12%, transparent);
	}
	.wall-line {
		fill: none;
		stroke: var(--accent);
		stroke-width: 2.4;
	}
	.drain circle {
		fill: none;
		stroke: color-mix(in srgb, var(--water) 90%, var(--ink));
		stroke-width: 1.6;
	}
	.drain path {
		stroke: color-mix(in srgb, var(--water) 90%, var(--ink));
		stroke-width: 1.6;
		fill: none;
	}

	.before {
		fill: none;
		stroke: var(--muted);
		stroke-width: 2;
		stroke-dasharray: 6 5;
	}
	.crack path {
		stroke: var(--muted);
		stroke-width: 1;
		opacity: 0.7;
		fill: none;
	}
	.after {
		stroke-width: 2.4;
	}
	.tile {
		fill: color-mix(in srgb, var(--water) 75%, transparent);
	}
	.ripple {
		fill: none;
		stroke: color-mix(in srgb, var(--water) 95%, var(--ink));
		stroke-width: 1.6;
	}
	.arrow {
		fill: none;
		stroke: var(--accent);
		stroke-width: 2;
	}

	.dim path {
		stroke: var(--accent);
		stroke-width: 1.5;
		fill: none;
	}
	.dim-text,
	.muted-text {
		font-family: var(--mono);
		font-size: 11px;
		letter-spacing: 2px;
		text-anchor: middle;
	}
	.dim-text {
		fill: var(--accent);
	}
	.muted-text {
		fill: var(--muted);
		font-size: 10px;
	}
</style>
