export type AmaType = {
	id: string;
	query: string;
	name: string;
	email: string;
	image: string;
	createdAt: string;
};

export type ListOfAmasType = {
	amas: AmaType[];
	selectedId?: string;
};
