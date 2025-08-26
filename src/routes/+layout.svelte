<script>
  import Header from '$lib/Header.svelte';
	import favicon from '$lib/icons/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children?.()}
