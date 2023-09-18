import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

// Schemas
import { managePasswordSchema as schema } from '$lib/schemas';

export const load = async () => {
	const managePasswordForm = await superValidate(schema);

	return { managePasswordForm };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) return fail(400, { form });

		return message(form, 'Password updated');
	}
};
