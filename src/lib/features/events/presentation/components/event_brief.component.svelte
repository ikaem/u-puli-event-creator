<script lang="ts">
	import { ColorConstants } from '$lib/assets/utils/constants/color_constants';
	import { IconConstants } from '$lib/assets/utils/constants/icon_constants';
	import ColoredLabel from '$lib/components/colored_label.component.svelte';
	import type { EventModel } from '$lib/features/events/domain/event_model';
	import EventActions from './event_actions.component.svelte';

	type Props = {
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
			<ColoredLabel
				text={event.location}
				icon={IconConstants.location}
				color={ColorConstants.yellow}
			/>
			<div class="flex gap-2">
				<ColoredLabel
					text={event.date}
					icon={IconConstants.calendar}
					color={ColorConstants.yellow}
				/>
				<ColoredLabel text={event.time} icon={IconConstants.clock} color={ColorConstants.yellow} />
			</div>
		</div>
	</div>

	<EventActions id={event.id} onDeleteAction={() => onToggleDeleteModal(event)} />
</article>
