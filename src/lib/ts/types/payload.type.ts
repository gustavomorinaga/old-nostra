export type TPayload<T extends object> = {
	data: T[];
	metadata: {
		total: number;
		limit: number;
		page: number;
		totalPages: number;
		pagingCounter: number;
		hasPrevPage: boolean;
		hasNextPage: boolean;
		offset: number;
		prevPage: number | null;
		nextPage: number | null;
	};
};
