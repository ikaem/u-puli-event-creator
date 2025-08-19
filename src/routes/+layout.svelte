<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import logo from '$lib/assets/logo.svg';

	import { page, navigating } from '$app/state';

	// props
	let { children } = $props();

	// state
	const isCreateEvent = $derived(page.url.pathname == '/event/create');
	const isAllEvents = $derived(page.url.pathname == '/');

	// variables
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="m-auto w-full p-2 lg:w-1/2">
	<nav class="flex justify-between">
		<div class="h-10">
			<img class="h-full" src={logo} alt="Logo" />
		</div>

		<ul class="flex gap-1">
			<li>
				<!-- TODO should have some kind a list, to loop this, so it is not repeated -->
				<div class={['px-2 py-1 text-sm', { 'bg-stone-800 text-white': isAllEvents }]}>
					<a href="/">SVI DOGAĐAJI</a>
				</div>
			</li>

			<li>
				<!-- <div class="px-2 py-1 text-sm text-black"> -->
				<div class={['px-2', 'py-1', 'text-sm', { 'bg-stone-800 text-white': isCreateEvent }]}>
					<a href="/event/create">NOVI DOGAĐAJ</a>
				</div>
			</li>
			<li class="ml-2">
				<div class="px-2 py-1 text-sm text-black">
					<a href="">ODJAVA</a>
				</div>
			</li>
		</ul>
	</nav>

	<main class="mt-10">
		{@render children?.()}
	</main>
</div>
