import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { EventConverters } from '$lib/features/events/utils/converters/event_converters';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id.replace('$', '');

	const response = await fetch('https://u-puli-api.onrender.com/events/' + id);
	const data = await response.json();

	const ok = data.ok;
	if (!ok) {
		return {
			ok: false,
			message: 'There was an issue fetching the event'
		};
	}

	const entity = EventConverters.entityFromData(data.data.event);
	const model = EventConverters.editModelFromEntity(entity);

	return {
		ok: true,
		message: 'Event fetched successfully',
		event: model
	};
};

export const actions: Actions = {
	// TODO extract this action somewhere in separate file or class? probably file?
	edit: async ({ request, params }) => {
		const data = await request.formData();

		console.log('Form data received:', data);

		const title = data.get('title') as string | undefined;
		const location = data.get('location') as string | undefined;
		const date = data.get('date') as string | undefined;
		const time = data.get('time') as string | undefined;
		const moreInfoUrl = data.get('moreInfoUrl') as string | undefined;
		const imageUrl = data.get('imageUrl') as string | undefined;
		const description = data.get('description') as string | undefined;

		const editValue = {
			title,
			location,
			date,
			time,
			moreInfoUrl,
			imageUrl,
			description
		};

		const idParam = (params.id || '').replace('$', '');
		const id = parseInt(idParam, 10);

		const isNumber = !Number.isNaN(id);
		if (!isNumber) {
			return fail(400, {
				editValue,
				isOk: false,
				message: 'Invalid event ID'
			});
		}

		if (!title || !location || !date || !time || !moreInfoUrl || !imageUrl || !description) {
			// TODO i am not sure about these stastus codes

			return fail(400, {
				editValue,
				isOk: false,
				message: 'All fields are required'
			});
		}

		await new Promise((resolve) => setTimeout(resolve, 1000));

		redirect(303, '/event/' + idParam);
		// return {
		// 	editValue,
		// 	isOk: true,
		// 	message: 'Event updated successfully'
		// };

		// should validate all of it - create some kind of extracted helper for this
	}
};
