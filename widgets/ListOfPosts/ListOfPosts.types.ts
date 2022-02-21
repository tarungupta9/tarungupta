export type PostProptypes = {
	id: string;
	name: string;
	readingTime: string;
	createdAt: string;
	slug: string;
};

export type ListOfPostsTypes = {
	posts: PostProptypes[];
};
