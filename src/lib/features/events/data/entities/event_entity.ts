/**
 * Represents event data as received from the API
 */
export type EventEntity = {
	id: number;
	title: string;
	date: number;
	location: string;
	url: string;
	imageUrl: string;
	description: string;
};
