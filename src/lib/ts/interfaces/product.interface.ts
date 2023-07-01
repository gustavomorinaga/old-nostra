import type { IBrand, IBaseCategory, TDocument } from '$lib/ts';

export interface IProductGeneric extends TDocument {
	slug: string;
	name: string;
	description: string;
	brand: TDocument['_id'];
	category: TDocument['_id'];
	subCategory: TDocument['_id'];
	active?: boolean;
	variants?: TDocument['_id'][];
}

export interface IProductVariant extends TDocument {
	name: string;
	sku: string;
	price: number;
	stock: number;
	status?: 'low-stock' | 'out-of-stock' | 'in-stock';
	active?: boolean;
}

export interface IProduct
	extends Omit<IProductGeneric, 'brand' | 'category' | 'subCategory' | 'variants'> {
	brand: IBrand;
	category: IBaseCategory;
	subCategory: IBaseCategory;
	variants: IProductVariant[];
}
