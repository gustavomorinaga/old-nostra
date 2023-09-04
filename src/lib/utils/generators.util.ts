/** Generate a random DOM ID with a prefix.
 * @param prefix The prefix to use for the ID.
 * @returns The generated ID.
 */
export const generateDOMId = () => {
	return Math.random().toString(36).substring(2);
};
