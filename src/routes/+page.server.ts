import { API_URI } from '$env/static/private';

export const load = async ({ fetch }) => {
	const [products] = await Promise.all([fetch(`${API_URI}/products`).then((res) => res.json())]);

	return { products };
};
