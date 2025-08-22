<script lang="ts">
	import PageTitle from '$lib/components/page_title.component.svelte';
	import EventEdit from '$lib/features/events/presentation/components/event_edit.component.svelte';
	import { toast } from 'svelte-sonner';

	const { data, form } = $props();

	const event = data.event;

	$effect(() => {
		if (form?.isOk) {
			toast('Promjene uspješno spremljene');
		}
	});
</script>

<PageTitle title="UREDI DOGAĐAJ" colorClass="border-l-green-700" />
<EventEdit {event} submitButtonText="SPREMI" submitAction="?/edit" submitMethod="POST" />
