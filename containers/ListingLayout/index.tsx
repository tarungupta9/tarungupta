import clsx from "clsx";

function ListingLayout({ children }) {
	return (
		<div
			className={clsx(
				"w-4/12",
				"bg-background",
				"h-full",
				"overflow-auto",
				"p-4"
			)}
		>
			{children}
		</div>
	);
}

export default ListingLayout;
