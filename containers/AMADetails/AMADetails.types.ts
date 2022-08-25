export type CommentType = {
	id: string;
	comment: string;
	userEmail: string;
	userImage: string;
	userName: string;
	createdAt: string;
};

export type AMADetailsType = {
	id: string;
	description: string;
	query: string;
	userEmail: string;
	userImage: string;
	userName: string;
	createdAt: string;
	comments: CommentType[];
};
