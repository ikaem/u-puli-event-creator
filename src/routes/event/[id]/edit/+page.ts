// export async function load({ params }) {
// 	const id = params.id;

import dayjs from 'dayjs';
import type { EventEntity, EventModel } from '../../../+page.server';
// import type { PageServerLoad } from './$types';
// import type { Actions } from '@sveltejs/kit';

// 	// params.id.

// 	console.log('this is entire params: ', params);
// 	console.log('this is id', id);
// }

// export const load: PageServerLoad = async ({ params, route }) => {
export async function load({ params }) {
	const id = params.id.replace('$', '');

	// TODO better us fetch from load function - or user page.server maybe better

	// params.id.

	// console.log('this is entire params: ', params);
	// console.log('this is id', id);

	// // route.id.
	// console.log('this is entire route: ', route);
	// console.log('this is route id', route.id);

	const response = await fetch('https://u-puli-api.onrender.com/events/' + id);
	const data = await response.json();

	// console.log('Loaded event:', data);

	const ok = data.ok;
	if (!ok) {
		return {
			ok: false,
			message: 'There was an issue fetching the event'
		};
	}

	// TODO create converters
	const eventEntity = data.data.event as EventEntity;
	const fullDate = dayjs(eventEntity.date, 'Europe/Zagreb');
	// const fullDate = dayjs(e.date);
	// TODO for now, we wont be handlign timezone bc it is confusing - for some reason, time is converted well
	// const croatiaDate = fullDate.tz('Europe/Zagreb');
	const date = fullDate.format('DD.MM.YYYY.');
	const time = fullDate.format('HH:mm');

	const eventModel: EventModel = {
		id: eventEntity.id,
		title: eventEntity.title,
		fullDate: fullDate.toDate(),
		location: eventEntity.location,
		url: eventEntity.url,
		imageUrl: eventEntity.imageUrl,
		description: eventEntity.description,
		date,
		time
	};

	return {
		event: eventModel
	};
}

// export const actions: Actions = {
// 	edit: async ({ request, params, route }) => {
// 		const data = await request.formData();

// 		console.log('params: ', params);
// 		console.log('route: ', route);

// 		const title = data.get('title') as string | undefined;
// 		const location = data.get('location') as string | undefined;
// 		const date = data.get('date') as string | undefined;
// 		const time = data.get('time') as string | undefined;
// 		const moreInfoUrl = data.get('moreInfoUrl') as string | undefined;
// 		const imageUrl = data.get('imageUrl') as string | undefined;
// 		const description = data.get('description') as string | undefined;

// 		console.log('this is title: ', title);

// 		return {
// 			message: 'Event updated successfully',
// 			editValue: {
// 				title,
// 				location,
// 				date,
// 				time,
// 				moreInfoUrl,
// 				imageUrl,
// 				description
// 			}
// 		};
// 	}
// };
