import type { IAddress, IProduct, IProductVariant, IUser, TDocument } from '$lib/ts';

export interface IOrderGeneric extends TDocument {
	orderID: string;
	user: TDocument['_id'];
	deliveryAddress: IAddress;
	totalPrice: number;
	status: 'pending' | 'canceled' | 'delivered' | 'completed';
	observation?: string;
	products: {
		product: TDocument['_id'];
		variant: TDocument['_id'];
		quantity: number;
	}[];
}

export interface IOrder extends Omit<IOrderGeneric, 'user' | 'products'> {
	user: IUser;
	products: {
		product: IProduct;
		variant: IProductVariant;
		quantity: number;
	}[];
}
