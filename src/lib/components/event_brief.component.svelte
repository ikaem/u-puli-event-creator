<script lang="ts">
	import type { EventModel } from '../../routes/+page.server';
	import EventActions from './event_actions.component.svelte';

	type Props = {
		// id: number;
		// title: string;
		// location: string;
		// date: string;
		// time: string;
		// imageUrl: string;
		event: EventModel;
		onToggleDeleteModal: (event: EventModel) => void;
	};
	const { event, onToggleDeleteModal }: Props = $props();
</script>

<!-- html -->

<article class="bg-amber-100 p-2">
	<div class="flex gap-2 border-b-1 border-white pb-2">
		<div class="h-auto w-15">
			<img class="h-full w-full object-cover" src={event.imageUrl} alt="" />
		</div>
		<div class="flex flex-col gap-2">
			<h2 class="inline-block font-bold">
				<a href="/event/{event.id}">
					{event.title}
				</a>
			</h2>
			<p class="flex items-center gap-1 self-start bg-amber-400 px-2 py-1 text-sm">
				<span class="icon-[mdi--location]"></span>
				<span>{event.location}</span>
			</p>
			<div class="flex gap-2">
				<p class="flex items-center gap-1 bg-amber-400 px-2 py-1 text-sm">
					<span class="icon-[mdi--calendar]"></span>
					<span>{event.date}</span>
				</p>
				<p class="flex items-center gap-1 bg-amber-400 px-2 py-1 text-sm">
					<span class="icon-[mdi--clock-outline]"></span>
					<span>{event.time}</span>
				</p>
			</div>
		</div>
	</div>

	<EventActions id={event.id} onDeleteAction={() => onToggleDeleteModal(event)} />

	<!-- <ul class="flex justify-end gap-2 pt-2">
		<li>
			<button onclick={onDelete} class="flex items-center gap-1 bg-red-700 px-2 py-1 text-white">
				<span class="icon-[mdi--trash-can]"></span>
				<span>IZBRIŠI</span>
			</button>
		</li>
		<li>
			<button onclick={onEdit} class="bg-blue-500 px-2 py-1 text-white">
				<span class="icon-[mdi--pencil]"></span>
				<span>UREDI</span>
			</button>
		</li>
	</ul> -->
</article>
