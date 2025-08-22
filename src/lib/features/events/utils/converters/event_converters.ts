import dayjs from 'dayjs';
import type { EventModel } from '../../domain/event_model';
import type { EventEntity } from '../../data/entities/event_entity';
import type { EditEventModel } from '../../domain/edit_event_model';

export abstract class EventConverters {
	static modelFromEntity = (entity: EventEntity): EventModel => {
		const fullDate = dayjs(entity.date, 'Europe/Zagreb');
		// const fullDate = dayjs(e.date);
		// TODO for now, we wont be handlign timezone bc it is confusing - for some reason, time is converted well
		// const croatiaDate = fullDate.tz('Europe/Zagreb');
		const date = fullDate.format('DD.MM.YYYY.');
		const time = fullDate.format('HH:mm');
		const eventModel: EventModel = {
			id: entity.id,
			title: entity.title,
			location: entity.location,
			url: entity.url,
			imageUrl: entity.imageUrl,
			description: entity.description,
			date,
			time
		};
		return eventModel;
	};

	static editModelFromEntity = (entity: EventEntity): EditEventModel => {
		const isoDate = dayjs(entity.date, 'Europe/Zagreb').toISOString();
		const date = isoDate.split('T')[0]; // YYYY-MM-DD
		const time = isoDate.split('T')[1].split('.')[0]; // HH:mm

		const eventModel: EditEventModel = {
			id: entity.id,
			title: entity.title,
			location: entity.location,
			date,
			time,
			url: entity.url,
			imageUrl: entity.imageUrl,
			description: entity.description
		};
		return eventModel;
	};

	static entityFromData = (data: any): EventEntity => {
		return {
			id: data.id,
			title: data.title,
			location: data.location,
			url: data.url,
			imageUrl: data.imageUrl,
			description: data.description,
			date: data.date
		};
	};
}
