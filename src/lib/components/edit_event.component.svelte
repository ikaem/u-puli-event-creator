<script lang="ts">
	import { enhance } from '$app/forms';

	type Props = {
		submitButtonText: string;
		submitAction: string;
		submitMethod: 'dialog' | 'get' | 'post' | 'DIALOG' | 'GET' | 'POST' | null | undefined;
	};
	const { submitButtonText, submitAction, submitMethod }: Props = $props();
</script>

<div class="bg-green-100 p-2">
	<form
		action={submitAction}
		method={submitMethod}
		class="flex flex-col items-stretch gap-4"
		use:enhance
	>
		<label class="flex flex-col gap-1">
			<span class="text-sm">Naziv</span>
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="title"
			/>
		</label>
		<label class="flex flex-col gap-1">
			<span class="text-sm">Lokacija</span>
			<input
				class="border-0 outline-none focus:ring-0 focus:outline-none"
				type="text"
				name="location"
			/>
		</label>

		<div class="flex gap-2">
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Lokacija</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="date"
					name="date"
				/>
			</label>
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Lokacija</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="time"
					name="time"
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
			/>
		</label>

		<div class="flex h-20 items-end gap-2">
			<div class="h-full w-48 bg-amber-500">
				<img
					class="h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1531907933630-126f527982d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D"
					alt=""
				/>
			</div>
			<label class="flex flex-1 flex-col gap-1">
				<span class="text-sm">Url na sliku</span>
				<input
					class="border-0 outline-none focus:ring-0 focus:outline-none"
					type="text"
					name="imageUrl"
				/>
			</label>
		</div>

		<label class="flex flex-col gap-1">
			<span class="text-sm">Url na više informacija</span>
			<!-- <input class="border-0 outline-none focus:ring-0 focus:outline-none" type="text" /> -->
			<textarea
				name="description"
				id=""
				class="border-0 outline-none focus:ring-0 focus:outline-none"
			></textarea>
		</label>

		<button type="submit" class="mt-4 self-end bg-amber-400 px-8 py-1 text-white"
			>{submitButtonText}</button
		>
	</form>
</div>
