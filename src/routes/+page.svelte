<script lang="ts">
	import EventBriefs from '$lib/components/event_briefs.component.svelte';
	import EventDeleteModal from '$lib/components/event_delete_modal.component.svelte';
	import PageTitle from '$lib/components/page_title.component.svelte';
	import type { EventModel } from './+page.server';

	const { data }: { data: { events: EventModel[] } } = $props();

	let eventForDelete = $state<EventModel | undefined>();
</script>

<EventDeleteModal
	event={eventForDelete}
	handleDelete={() => {
		const event = $state.snapshot(eventForDelete);
		if (!event) {
			eventForDelete = undefined;
			return;
		}

		console.log('Deleting event:', event);
		eventForDelete = undefined;
	}}
	onClose={() => (eventForDelete = undefined)}
/>
<PageTitle title="SVI DOGAĐAJI" colorClass="border-l-amber-400" />
<EventBriefs events={data.events} onToggleDeleteModal={(event) => (eventForDelete = event)} />
