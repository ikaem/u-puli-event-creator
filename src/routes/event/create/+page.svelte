<script>
	import PageTitle from '$lib/components/page_title.component.svelte';
	import EventEdit from '$lib/features/events/presentation/components/event_edit.component.svelte';
</script>

<PageTitle title="NOVI DOGAĐAJ" colorClass="border-l-green-700" />
<EventEdit submitButtonText="Dodaj" submitAction="?/create" submitMethod="POST" />
