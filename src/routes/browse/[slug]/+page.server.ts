import { API_URI } from '$env/static/private';
import type { IProduct, TPayload } from '$lib/ts';

export const load = async ({ fetch, params: { slug } }) => {
	const [product, relatedProducts] = await Promise.all([
		fetch(`${API_URI}/products/${slug}`).then<IProduct>((res) => res.json()),
		fetch(`${API_URI}/products`).then<TPayload<IProduct>>((res) => res.json())
	]);

	return { product, relatedProducts };
};
