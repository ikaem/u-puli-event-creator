// import dayjs from 'dayjs';
// import 'dayjs/locale/es';
// import what from "dayjs/plugin/advancedFormat"

import dayjs from 'dayjs';
// import timezone from 'dayjs/plugin/timezone';
// import utc from 'dayjs/plugin/utc';

// this is entity type
// TODO these types need to be moved to some layers, for clean arch
export type EventEntity = {
	id: number;
	title: string;
	date: number;
	location: string;
	url: string;
	imageUrl: string;
	description: string;
};

// TODO we will move this somewhere else
export type EventModel = {
	id: number;
	title: string;
	fullDate: Date;
	location: string;
	url: string;
	imageUrl: string;
	description: string;
	date: string;
	time: string;
	// getDateOnly: () => string;
	// getTimeOnly: () => string;
};

// TODO create some kind of wrapper for dayjs
// dayjs.extend(utc);
// dayjs.extend(timezone);

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

	const eventEntities = data.data.events as EventEntity[];

	// TODO create converters
	const eventModels = eventEntities.map((e) => {
		const fullDate = dayjs(e.date, 'Europe/Zagreb');
		// const fullDate = dayjs(e.date);
		// TODO for now, we wont be handlign timezone bc it is confusing - for some reason, time is converted well
		// const croatiaDate = fullDate.tz('Europe/Zagreb');
		const date = fullDate.format('DD.MM.YYYY.');
		const time = fullDate.format('HH:mm');

		const eventModel: EventModel = {
			id: e.id,
			title: e.title,
			fullDate: fullDate.toDate(),
			location: e.location,
			url: e.url,
			imageUrl: e.imageUrl,
			description: e.description,
			date,
			time
		};

		return eventModel;
	});

	return {
		events: eventModels
	};
}
