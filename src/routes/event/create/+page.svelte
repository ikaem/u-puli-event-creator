<script>
	import EditEvent from '$lib/components/edit_event.component.svelte';
	import PageTitle from '$lib/components/page_title.component.svelte';
</script>

<PageTitle title="NOVI DOGAĐAJ" colorClass="border-l-green-700" />
<EditEvent submitButtonText="Dodaj" submitAction="?/create" submitMethod="POST" />
