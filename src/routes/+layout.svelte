<script lang="ts">
	// Self-hosted so there is no third-party font request at runtime.
	// Archivo is loaded with its width axis — the expanded display cut is what
	// gives the headings their facade-like proportion.
	import '@fontsource-variable/archivo/standard.css';
	import '@fontsource-variable/instrument-sans';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource/instrument-serif/400-italic.css';

	import '../app.css';

	let { children } = $props();
</script>

{@render children()}
