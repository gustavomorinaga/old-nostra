import type { TDocument } from '$lib/ts';

export interface IBrand extends TDocument {
	name: string;
	description?: string;
}
