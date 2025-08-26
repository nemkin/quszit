<script>
  import Header from '$lib/Header.svelte';
	import favicon from '$lib/icons/favicon.png';
  import '../global.css';
	let { children } = $props();
</script>

<svelte:head>
  <title>QuSZIT</title>
  <meta name="description" content="QuSZIT - Quantum algorithms at BME VIK SZIT" />
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children?.()}
