type BlogType = {
	id: string;
	name: string;
	createdAt: string;
	readingTime: string;
	slug: string;
};

const blogListing: BlogType[] = [
	{
		id: "How to Follow Design System Effectively",
		name: "How to Follow Design System Effectively",
		createdAt: "February 1, 2022",
		readingTime: "5 min",
		slug: "/blogs/how-to-follow-design-system-effeciently",
	},
	{
		id: "How to Follow Design System Effectively 2",
		name: "How to Follow Design System Effectively 2",
		createdAt: "February 1, 2022",
		readingTime: "5 min",
		slug: "/blogs/how-to-follow-design-system-effeciently",
	},
];

export default blogListing;
