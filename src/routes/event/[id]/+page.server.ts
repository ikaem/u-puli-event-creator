import { EventConverters } from '$lib/features/events/utils/converters/event_converters';
import { EnvVarWrapper } from '$lib/utils/wrappers/env_var_wrapper';
import type { PageServerLoad } from './edit/$types';

export const load: PageServerLoad = async ({ params }) => {
	// we will create a function somewhwere in data source that will redirect this
	const id = params.id.replace('$', '');
	const response = await fetch(EnvVarWrapper.apiUrl + '/events/' + id);
	const data = await response.json();

	const ok = data.ok;
	if (!ok) {
		return {
			ok: false,
			message: 'There was an issue fetching the event'
		};
	}

	const entity = EventConverters.entityFromData(data.data.event);
	const model = EventConverters.modelFromEntity(entity);

	return {
		ok: true,
		message: 'Event fetched successfully',
		event: model
	};
};
