<script lang="ts">
	import { ColorConstants } from '$lib/assets/utils/constants/color_constants.js';
	import { IconConstants } from '$lib/assets/utils/constants/icon_constants.js';
	import ColoredLabel from '$lib/components/colored_label.component.svelte';
	import EventActions from '$lib/features/events/presentation/components/event_actions.component.svelte';

	const { data } = $props();

	const event = data.event;
</script>

{#if !event}
	<p class="bg-{ColorConstants.greenLight} p-2">Događaj nije pronađen</p>
{:else}
	<div class="bg-{ColorConstants.yellowLight} flex flex-col gap-2 p-2">
		<div class="h-60 w-full bg-{ColorConstants.greenLight}">
			<img
				class="h-full w-full object-cover object-center"
				src={event?.imageUrl}
				alt="Slika događaja"
			/>
		</div>
		<h1 class="btext-xl mt-2 font-bold">{event?.title}</h1>
		<ColoredLabel
			text={event?.location}
			icon={IconConstants.location}
			color={ColorConstants.yellow}
		/>
		<div class="flex gap-2">
			<ColoredLabel
				text={event?.date}
				icon={IconConstants.calendar}
				color={ColorConstants.yellow}
			/>
			<ColoredLabel text={event?.time} icon={IconConstants.clock} color={ColorConstants.yellow} />
		</div>
		<a class="flex" href={event.url} target="_blank" rel="noopener noreferrer">
			<ColoredLabel
				text="Detalji događaja"
				icon={IconConstants.link}
				color={ColorConstants.green}
			/>
		</a>
		{#if event?.description.trim().length !== 0}
			<hr class="border-white" />
			<p>
				{event.description}
			</p>
		{/if}
		<hr class="border-white" />

		<EventActions id={event.id} onDeleteAction={() => {}} />
	</div>
{/if}
