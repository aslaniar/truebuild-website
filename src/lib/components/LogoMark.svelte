<script lang="ts">
	/**
	 * The TB house monogram, lifted out of GoldLogo.svg with the wordmark
	 * removed so we can set that type properly in HTML.
	 *
	 * The roofline and the knock-out behind the B's counter are driven by CSS
	 * custom properties, so the mark sits correctly on either ground. The gold
	 * B keeps its original metallic gradient (extracted to /tb-b.webp).
	 */
	let { size = 34, class: klass = '' }: { size?: number; class?: string } = $props();
</script>

<svg
	class="mark {klass}"
	viewBox="84 5.37 185.25 157.48"
	width={size}
	height={(size * 157.48) / 185.25}
	role="img"
	aria-label="TrueBuild Construction"
>
	<!-- roofline + T -->
	<path
		class="structure"
		d="M211.5,29.25V12.75h27v33.38l30.75,21v27.38l-95.75-60.94c-2.8,2.72-17.73,9.82-18.25,12.56l1.5,115.88h-27l-.75-99.75-45,26.25v-27.75L173.07,5.37l2.39.26,36.04,23.62Z"
	/>
	<!-- gold B -->
	<image href="/tb-b.webp" width="391" height="512" transform="translate(161.79 39.97) scale(.24)" />
	<path class="gold-sliver" d="M163.5,145.5l.75,15.75c16.46-.41,33.05.54,49.5,0l-50.25.75v-16.5Z" />
	<!-- keeps the roof from showing through the B's upper counter -->
	<path
		class="knockout"
		d="M191.25,137.25v-24.75h24.38c1.07,0,5.75,2.7,6.78,3.72,4.96,4.98,4.71,15.81-1.62,19.43-.52.3-4.13,1.6-4.4,1.6h-25.12Z"
	/>
</svg>

<style>
	.mark {
		flex: none;
		overflow: visible;
	}
	.structure {
		fill: var(--mark-structure);
		transition: fill 0.4s var(--ease);
	}
	.knockout {
		fill: var(--mark-knockout);
		transition: fill 0.4s var(--ease);
	}
	.gold-sliver {
		fill: var(--gold);
	}
</style>
