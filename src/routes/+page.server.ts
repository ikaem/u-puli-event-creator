import { EventConverters } from '$lib/features/events/utils/converters/event_converters';
import { EnvVarWrapper } from '$lib/utils/wrappers/env_var_wrapper';
// import { API_URL } from '$env/static/private';

// TODO create some kind of wrapper for dayjs
// TODO NEED also wrapper for fetching data

export async function load({ fetch }) {
	// const response = await fetch('https://u-puli-api.onrender.com/events');
	const response = await fetch(`${EnvVarWrapper.apiUrl}/events`);
	// console.log('API_URL:', API_URL);

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
