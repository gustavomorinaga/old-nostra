import type { IUser, IProduct, IProductVariant, TDocument } from '$lib/ts';

export interface ICartGeneric extends TDocument {
	user: TDocument['_id'];
	products: {
		product: TDocument['_id'];
		variant: TDocument['_id'];
		quantity: number;
	}[];
}

export interface ICart extends Omit<ICartGeneric, 'user' | 'products'> {
	user: IUser;
	products: {
		product: IProduct;
		variant: IProductVariant;
		quantity: number;
	}[];
}
