import type { TTimestamps } from '$lib/ts';

export type TDocument = TTimestamps & {
	_id: string;
};
