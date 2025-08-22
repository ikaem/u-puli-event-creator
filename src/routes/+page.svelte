<script lang="ts">
	import PageTitle from '$lib/components/page_title.component.svelte';
	import type { EventModel } from '$lib/features/events/domain/event_model';
	import EventBriefs from '$lib/features/events/presentation/components/event_briefs.component.svelte';
	import EventDeleteModal from '$lib/features/events/presentation/components/event_delete_modal.component.svelte';

	// const { data }: { data: { events: EventModel[] } } = $props();

	const { data } = $props();

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
<EventBriefs events={data.events || []} onToggleDeleteModal={(event) => (eventForDelete = event)} />
