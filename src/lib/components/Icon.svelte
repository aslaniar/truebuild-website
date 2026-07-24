<script lang="ts">
	/** Line icons drawn on a 30×30 grid at a consistent 1.4 stroke. */
	let { name, size = 30 }: { name: string; size?: number } = $props();

	const paths: Record<string, string[]> = {
		house: ['M3 27h24M5 27V13l10-7 10 7v14M12 27v-8h6v8'],
		// ground-up: a framed house still on its crane hook
		newbuild: ['M3 27h24M6 27V15l9-6 9 6v12M6 21h18M15 9V3h11M26 3v5l-3 1', 'M11 27v-6h8v6'],
		// ADU: a smaller second dwelling behind the main house
		adu: ['M2 27h26M4 27V14l7-5 7 5v13', 'M18 27v-8l5-3.5 5 3.5v8M8 27v-5h6v5'],
		// remodel: a wall being opened up
		remodel: ['M3 27h24M5 27V9h20v18M5 15h20M15 15v12', 'M18 4.5l3.5 3.5M25 11l3.5 3.5M17 12l6-6 5 5-6 6z'],
		// design & planning: a drawing sheet with a scale rule
		design: ['M5 3h14l6 6v18H5zM19 3v6h6', 'M9 15h12M9 20h12M9 15v2M13 15v2M17 15v2M21 15v2'],
		excavator: ['M2 22h26M2 22l6-9h9l5 9M8 13V7h4v6M17 27h6l3-5'],
		foundation: ['M3 20h24v6H3zM6 20V9h18v11M10 9V5h10v4'],
		repair: ['M3 25h24M5 25V15h20v10M5 15l4-6h12l4 6M11 25v-5h8v5'],
		wall: ['M3 24h24M3 24V14h9v10M12 24V8h15v16M6 19h3M16 13h6M16 18h6'],
		deck: ['M2 12h26M2 12l4-5h18l4 5M4 12v13M26 12v13M4 25h22M9 12v13M15 12v13M21 12v13'],
		pool: [
			'M3 11h24v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
			'M3 19c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2M8 11V6h5'
		],
		trowel: ['M4 26 20 10l-4-4L2 20v6zM17 5l4-4 8 8-4 4M13 9l8 8'],
		spa: ['M5 20h20v6H5zM9 20v-5h12v5M12 15V9h6v6M15 9V3'],
		// a gear with a hub — a bare circle-and-rays reads as a sun
		gear: [
			'M24 15h2.8M3.2 15H6M15 6V3.2M15 24v2.8M21.36 8.64l1.98-1.98M6.66 23.34l1.98-1.98M21.36 21.36l1.98 1.98M6.66 6.66l1.98 1.98'
		],
		drop: ['M15 3s7 8.6 7 13a7 7 0 1 1-14 0c0-4.4 7-13 7-13z', 'M11.5 17.5a3.6 3.6 0 0 0 3.5 3'],
		bolt: ['M16 2 7 16h7l-1 12 9-14h-7z']
	};

	const circles: Record<string, [number, number, number][]> = {
		spa: [[15, 23, 1.6]],
		gear: [
			[15, 15, 9],
			[15, 15, 3.2]
		]
	};
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 30 30"
	fill="none"
	stroke="currentColor"
	stroke-width="1.4"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#each paths[name] ?? [] as d}
		<path {d} />
	{/each}
	{#each circles[name] ?? [] as [cx, cy, r]}
		<circle {cx} {cy} {r} />
	{/each}
</svg>
