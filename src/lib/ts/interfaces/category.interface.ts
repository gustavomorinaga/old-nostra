import type { TDocument } from '$lib/ts';

export interface IBaseCategory extends TDocument {
	name: string;
	description?: string;
}

export interface ICategoryGeneric extends IBaseCategory {
	subCategories?: TDocument['_id'][];
}

export interface ICategory extends IBaseCategory {
	subCategories: IBaseCategory[];
}
