import type { IProduct } from '$lib/ts';

export type TQueryProduct = Partial<
	Omit<IProduct, '_id' | 'description' | 'createdAt' | 'updatedAt'>
>;
