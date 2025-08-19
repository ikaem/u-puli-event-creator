<script lang="ts">
	import { on } from 'svelte/events';
	import type { EventModel } from '../../routes/+page.server';
	import EventBrief from './event_brief.component.svelte';

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
