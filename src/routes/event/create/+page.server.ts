import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();

		const title = formData.get('title') as string | undefined;
		const location = formData.get('location') as string | undefined;
		const date = formData.get('date') as string | undefined;
		const time = formData.get('time') as string | undefined;
		const imageUrl = formData.get('imageUrl') as string | undefined;
		const moreInfoUrl = formData.get('moreInfoUrl') as string | undefined;
		const description = formData.get('description') as string | undefined;

		console.log({
			title,
			location,
			date,
			time,
			imageUrl,
			moreInfoUrl,
			description
		});

		return {
			ok: true,
			message: 'Event created successfully'
		};
	}
};
