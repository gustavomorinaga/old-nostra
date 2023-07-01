import type { IUser, IProduct, IProductVariant, TDocument } from '$lib/ts';

export interface IFavoritesGeneric extends TDocument {
	user: TDocument['_id'];
	products: {
		product: TDocument['_id'];
		variant: TDocument['_id'];
	}[];
}

export interface IFavorites extends Omit<IFavoritesGeneric, 'user' | 'products'> {
	user: IUser;
	products: {
		product: IProduct;
		variant: IProductVariant;
	}[];
}
