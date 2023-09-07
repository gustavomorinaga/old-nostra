import type { OnNavigate } from '@sveltejs/kit';

/**
 * This function is used to start a view transition.
 * It is used in the `onMount` lifecycle hook of the `+layout.svelte` component.
 * @param {OnNavigate} navigation
 * @returns {Promise<void> | undefined}
 */
export const startViewTransition = (navigation: OnNavigate) => {
	if (!document.startViewTransition) return;

	return new Promise<void>((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
};
