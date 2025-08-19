<script lang="ts">
	import { on } from 'svelte/events';
	import type { EventModel } from '../../routes/+page.server';

	type Props = {
		event: EventModel | undefined;
		handleDelete: () => void;
		onClose: () => void;
	};

	const { event, handleDelete, onClose }: Props = $props();
</script>

{#if event}
	<div class="fixed top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center">
		<!-- just for background darkening -->
		<div class="absolute h-full w-full bg-black opacity-50"></div>
		<!-- content -->
		<div class="relative z-10 flex w-96 flex-col bg-white p-4">
			<button class="self-end" aria-label="Close modal" onclick={onClose}>
				<span class="icon-[mdi--close-circle]"></span>
			</button>
			<hr class="my-2 border-gray-200" />
			<div class="flex flex-col items-stretch">
				<p class="text-sm text-gray-600">ŽELIŠ LI IZBRISATI DOGAĐAJ?</p>

				<div class="my-4">
					<h2 class="mb-2 text-lg font-bold">
						{event.title}
					</h2>
					<p class="text-sm text-gray-600">
						{event.date} u {event.time}
					</p>
					<p class="text-sm text-gray-600">
						<span>na lokaciji </span>
						<span>{event.location}</span>
					</p>

					<a
						href={event.url}
						class="mt-2 flex text-gray-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="me-1 icon-[mdi--link]"></span>
						<span class="text-xs">Više detalja</span>
					</a>
				</div>

				<button
					onclick={handleDelete}
					class="mt-4 bg-red-700 px-4 py-2 text-white hover:bg-red-600"
				>
					IZBRIŠI
				</button>
			</div>
		</div>
		<!-- <p>This is a modal for deleting an event.</p>
	<p>Are you sure you want to delete this event?</p>
	<p>Please say no</p> -->
		<!-- <p>But you can say yes</p> -->
	</div>
{/if}
