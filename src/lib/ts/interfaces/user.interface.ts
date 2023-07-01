import type { IAddress, TDocument } from '$lib/ts';

export interface IUser extends TDocument {
	name: string;
	email: string;
	avatar?: string;
	password: string;
	dateOfBirth?: Date;
	billingAddress?: IAddress;
	deliveryAddress?: IAddress;
	active?: boolean;
	role: 'user' | 'admin';
}
