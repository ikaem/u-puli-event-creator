import { EnvVarWrapper } from '$lib/utils/wrappers/env_var_wrapper';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	create: async ({ request, fetch }) => {
		// TODO extract this validation because almost same is reused in edit
		const formData = await request.formData();

		const title = formData.get('title') as string | undefined;
		const location = formData.get('location') as string | undefined;
		const date = formData.get('date') as string | undefined;
		const time = formData.get('time') as string | undefined;
		const imageUrl = formData.get('imageUrl') as string | undefined;
		const moreInfoUrl = formData.get('moreInfoUrl') as string | undefined;
		const description = formData.get('description') as string | undefined;

		const assembledDateNative = new Date(`${date}T${time}`);

		console.log('Assembled date (native):', assembledDateNative.toString());

		const createValue = {
			title,
			location,
			date,
			time,
			moreInfoUrl,
			imageUrl,
			description
		};
		console.log('createValue:', createValue);

		if (!title || !location || !date || !time || !moreInfoUrl || !imageUrl || !description) {
			// TODO i am not sure about these stastus codes

			return fail(400, {
				createValue,
				isOk: false,
				message: 'All fields are required'
			});
		}

		const response = await fetch(EnvVarWrapper.apiUrl + '/events', {
			method: 'POST',
			body: JSON.stringify({
				title,
				location,
				date: assembledDateNative.getTime(),
				url: moreInfoUrl,
				imageUrl: imageUrl,
				description
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		// TODO should try catch this
		const responseData = await response.json();

		redirect(303, '/event/' + responseData.data.event.id);
	}
};
