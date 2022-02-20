export type ListOfHyperlinks = {
	heading: string;
	hyperlinks: {
		isExternal?: boolean;
		isSelected?: boolean;
		Icon?: any;
		label: string;
		slug: string;
	};
	setActiveHyperlink: any;
};
