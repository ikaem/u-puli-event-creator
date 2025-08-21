<script lang="ts">
	import { enhance } from '$app/forms';

	// TODO this needs to be moved to domain or utils/values or something

	export type EventEditValue = {
		title?: string;
		location?: string;
		// date: Date;
		date?: string;
		time?: string;
		moreInfoUrl?: string;
		imageUrl?: string;
		description?: string;
	};

	type Props = {
		editValue: EventEditValue;
		submitButtonText: string;
		submitAction: string;
		submitMethod: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null | undefined;
	};
	const { editValue, submitButtonText, submitAction, submitMethod }: Props = $props();

	// const dateISOString = editValue?.date.toISOString();

	// const dateSegment = dateISOString?.split('T')[0];
	// const timeSegment = dateISOString?.split('T')[1].split('.')[0];

	// console.log({
	// 	date: dateSegment,
	// 	time: timeSegment,
	// 	isoString: dateISOString
	// });
</script>

<div class="bg-green-100 p-2">
	<!-- use:enhance={() => {
			return async ({ update }) => {
				await update();
			};
		}} -->
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
				value={editValue?.title}
			/>
			<!-- value={editValue?.title} -->
		</label>
		<label class="flex flex-col gap-1">
			<span class="text-sm">Lokacija</span>
			<!-- TODO maybe form.location should be used? -->
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="location"
				value={editValue?.location}
			/>
		</label>

		<div class="flex gap-2">
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Lokacija</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="date"
					name="date"
					value={editValue?.date}
				/>
			</label>
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Lokacija</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="time"
					name="time"
					value={editValue?.time}
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
				value={editValue?.moreInfoUrl}
			/>
		</label>

		<div class="flex flex-col gap-2">
			<label class="flex flex-col gap-1">
				<span class="text-sm">Url na sliku</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="text"
					name="imageUrl"
					value={editValue?.imageUrl}
				/>
			</label>
			<div class="h-30 w-full bg-amber-100">
				<img
					class="h-full w-full object-contain object-center"
					src={editValue?.imageUrl}
					alt="Slika događaja"
				/>
			</div>
		</div>

		<label class="flex flex-col gap-1">
			<span class="text-sm">Opis</span>
			<!-- <input class="border-0 outline-none focus:ring-0 focus:outline-none" type="text" /> -->
			<textarea
				name="description"
				id=""
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				value={editValue?.description}
				rows="5"
			></textarea>
		</label>

		<button type="submit" class="mt-4 self-end bg-amber-400 px-8 py-1 text-white"
			>{submitButtonText}</button
		>
	</form>
</div>
