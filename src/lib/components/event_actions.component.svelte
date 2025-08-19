<script lang="ts">
	type Props = {
		id: number;
		onDeleteAction: () => void;
	};

	const { id, onDeleteAction }: Props = $props();
</script>

<ul class="flex items-center justify-end gap-2 pt-2">
	<li>
		<button
			onclick={onDeleteAction}
			class="flex items-center gap-1 bg-red-700 px-2 py-1 text-white"
		>
			<span class="icon-[mdi--trash-can]"></span>
			<span>IZBRIŠI</span>
		</button>
	</li>
	<li>
		<a href="/event/${id}/edit" class="flex items-center bg-blue-500 px-2 py-1 text-white">
			<span class="icon-[mdi--pencil]"></span>
			<span>UREDI</span>
		</a>
	</li>
</ul>
