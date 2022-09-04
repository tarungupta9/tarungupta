type BlogType = {
	id: string;
	name: string;
	createdAt: string;
	readingTime: string;
	slug: string;
};

const blogListing: BlogType[] = [
	{
		id: "how-to-follow-design-system-effeciently",
		name: "How to Follow Design System Effectively",
		createdAt: "February 1, 2022",
		readingTime: "5 min",
		slug: "/blogs/how-to-follow-design-system-effeciently",
	},
	{
		id: "how-to-estimate-effort-correctly-and-not-overcommit",
		name: "How to estimate effort correctly and not overcommit?",
		createdAt: "September 3, 2022",
		readingTime: "5 min",
		slug: "/blogs/how-to-estimate-effort-correctly-and-not-overcommit",
	},
];

export default blogListing;
