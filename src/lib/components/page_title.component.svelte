<script lang="ts">
	type Props = {
		title: string;
		colorClass: string;
	};
	let { title, colorClass } = $props();
</script>

<h1 class="mb-2 inline-block border-l-3 border-solid {colorClass} pl-1 font-bold">{title}</h1>
