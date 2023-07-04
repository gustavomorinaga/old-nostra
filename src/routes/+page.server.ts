import { API_URI } from '$env/static/private';
import type { IProduct, TPayload } from '$lib/ts';

export const load = async ({ fetch }) => {
	const [products] = await Promise.all([
		fetch(`${API_URI}/products`).then<TPayload<IProduct>>((res) => res.json())
	]);

	return { products };
};
