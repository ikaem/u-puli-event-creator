<script lang="ts">
	import { enhance } from '$app/forms';
	import EventEdit, { type EventEditValue } from '$lib/components/event_edit.component.svelte';
	import PageTitle from '$lib/components/page_title.component.svelte';
	import type { EventModel } from '../../../+page.server';

	// import {enhance} from '$app/forms';

	// const { data }: { data: { event: EventModel } } = $props();
	let { data, form } = $props();

	const stater = $state(data.event);

	const event = data.event;

	const editValue: EventEditValue = {
		title: event?.title,
		location: event?.location,
		date: event?.fullDate.toISOString().split('T')[0],
		time: event?.fullDate.toISOString().split('T')[1].split('.')[0],
		moreInfoUrl: event?.url,
		imageUrl: event?.imageUrl,
		description: event?.description
	};

	// $effect(() => {
	// 	console.log('Edit value changed:', editValue);
	// });

	// const editValue: EventEditValue = {
	// 	title: form?.editValue.title || data.event?.title || '',
	// 	location: form?.editValue.location || data.event?.location || '',
	// 	date: form?.editValue.date || data.event?.fullDate.toISOString().split('T')[0] || '',
	// 	time:
	// 		form?.editValue.time || data.event?.fullDate.toISOString().split('T')[1].split('.')[0] || '',
	// 	moreInfoUrl: form?.editValue.moreInfoUrl || data.event?.url || '',
	// 	imageUrl: form?.editValue.imageUrl || data.event?.imageUrl || '',
	// 	description: form?.editValue.description || data.event?.description || ''
	// };

	// console.log('Event data:', data);
</script>

<!-- <form action="" use:enhance></form> -->

<PageTitle title="UREDI DOGAĐAJ" colorClass="border-l-green-700" />

<!-- TODO!!!!!!!!!!!! TRY THIS AGAIN, WITH event default to see if this will change at any point -->
<!-- <div class="bg-green-100 p-2">
	<form
		action="?/edit"
		method="POST"
		class="flex flex-col items-stretch gap-4"
		use:enhance={() => {
			return async ({ update }) => {

				await update({ reset: false });
			};
		}}
	>
		<label class="flex flex-col gap-1">
			<span class="text-sm">Naziv</span>
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="title"
				value={form?.editValue.title || data.event?.title}
			/>
		</label>

		<button
			onclick={(e) => {
				e.preventDefault();
				console.log('what is data: ', data);
			}}>What</button
		>

		<button type="submit" class="mt-4 self-end bg-amber-400 px-8 py-1 text-white"
			>{'submitButtonText'}</button
		>
	</form>
</div> -->

<!-- TODO maybe best is to check if event exists, and then render event edit -->
<EventEdit {editValue} submitButtonText="SPREMI" submitAction="?/edit" submitMethod="POST" />
<!-- <EventEdit
	editValue={{
		title: form?.editValue.title || data.event?.title,
		location: form?.editValue.location || data.event?.location,
		date: form?.editValue.date || data.event?.fullDate.toISOString().split('T')[0],
		time: form?.editValue.time || data.event?.fullDate.toISOString().split('T')[1].split('.')[0],
		moreInfoUrl: form?.editValue.moreInfoUrl || data.event?.url,
		imageUrl: form?.editValue.imageUrl || data.event?.imageUrl,
		description: form?.editValue.description || data.event?.description
	}}
	submitButtonText="SPREMI"
	submitAction="?/edit"
	submitMethod="POST"
/> -->
