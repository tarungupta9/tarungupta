export type CommentType = {
	id: string;
	comment: string;
	email: string;
	image: string;
	name: string;
	createdAt: string;
};

export type AMADetailsType = {
	id: string;
	description: string;
	query: string;
	email: string;
	image: string;
	name: string;
	createdAt: string;
	comments: CommentType[];
};
