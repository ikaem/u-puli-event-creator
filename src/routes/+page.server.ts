import { EventConverters } from '$lib/features/events/utils/converters/event_converters';

// TODO create some kind of wrapper for dayjs

export async function load() {
	const response = await fetch('https://u-puli-api.onrender.com/events');

	const data = await response.json();

	// console.log('Loaded events:', data);

	const ok = data.ok;
	if (!ok) {
		return {
			ok: false,
			message: 'There was an issue fetching all events'
		};
	}

	const eventEntities = data.data.events.map(EventConverters.entityFromData);
	const eventModels = eventEntities.map(EventConverters.modelFromEntity);

	return {
		ok: true,
		message: 'Events fetched successfully',
		events: eventModels
	};
}
