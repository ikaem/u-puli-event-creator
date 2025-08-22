<script lang="ts">
	import EventBrief from './event_brief.component.svelte';
	import type { EventModel } from '../../domain/event_model';

	type Props = {
		events: EventModel[];
		onToggleDeleteModal: (event: EventModel) => void;
	};

	const { events, onToggleDeleteModal }: Props = $props();
</script>

<ul class="flex flex-col gap-2">
	{#each events as event, index (event.id)}
		<!-- onHandlers are not event needed - we are navigating here, so we will just navigate with anchor? -->
		<li>
			<EventBrief {event} {onToggleDeleteModal} />
		</li>
	{/each}
</ul>
