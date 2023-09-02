import { API_URI } from '$env/static/private';
import type { IProduct } from '$lib/ts';

export const load = async ({ fetch, params: { slug } }) => {
	const [product] = await Promise.all([
		fetch(`${API_URI}/products/${slug}`).then<IProduct>((res) => res.json())
	]);

	return { product };
};
