<script lang="ts">
	import { enhance } from '$app/forms';
	import type { EditEventModel } from '$lib/features/events/domain/edit_event_model';

	type Props = {
		event?: EditEventModel;
		submitButtonText: string;
		submitAction: string;
		submitMethod: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null | undefined;
	};
	const { event, submitButtonText, submitAction, submitMethod }: Props = $props();

	let imageUrl = $state(event?.imageUrl);
</script>

<div class="bg-green-100 p-2">
	<form
		action={submitAction}
		method={submitMethod}
		class="flex flex-col items-stretch gap-4"
		use:enhance={() => {
			return async ({ update }) => {
				await update({
					// ok, so reset false is the key
					reset: false
				});
			};
		}}
	>
		<label class="flex flex-col gap-1">
			<span class="text-sm">Naziv</span>
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="title"
				value={event?.title}
			/>
		</label>
		<label class="flex flex-col gap-1">
			<span class="text-sm">Lokacija</span>
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="location"
				value={event?.location}
			/>
		</label>

		<div class="flex gap-2">
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Datum</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="date"
					name="date"
					value={event?.date}
				/>
			</label>
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Vrijeme</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="time"
					name="time"
					value={event?.time}
				/>
			</label>
		</div>

		<hr class="my-1 border-white" />

		<label class="flex flex-col gap-1">
			<span class="text-sm">Url na više informacija</span>
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="moreInfoUrl"
				value={event?.url}
			/>
		</label>

		<div class="flex flex-col gap-2">
			<label class="flex flex-col gap-1">
				<span class="text-sm">Url na sliku</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="text"
					name="imageUrl"
					bind:value={imageUrl}
				/>
			</label>
			<div class="h-30 w-full bg-amber-100">
				{#if imageUrl}
					<img
						class="h-full w-full object-contain object-center"
						src={imageUrl}
						alt="Slika događaja"
					/>
				{/if}
			</div>
		</div>

		<label class="flex flex-col gap-1">
			<span class="text-sm">Opis</span>
			<!-- <input class="border-0 outline-none focus:ring-0 focus:outline-none" type="text" /> -->
			<textarea
				name="description"
				id=""
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				value={event?.description}
				rows="5"
			></textarea>
		</label>

		<button type="submit" class="mt-4 self-end bg-amber-400 px-8 py-1 text-white"
			>{submitButtonText}</button
		>
	</form>
</div>
