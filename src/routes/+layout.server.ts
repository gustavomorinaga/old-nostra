import { API_URI } from '$env/static/private';

export const load = async ({ fetch, url: { pathname } }) => {
	const [brands] = await Promise.all([fetch(`${API_URI}/brands`).then((res) => res.json())]);

	return { currentPathname: pathname, brands };
};
