import clsx from "clsx";

function ListingLayout({ children }) {
	return (
		<div
			className={clsx(
				"w-4/12",
				"bg-stone-900",
				"h-full",
				"overflow-auto",
				"p-4",
				"border-r",
				"border-r-stone-700"
			)}
		>
			{children}
		</div>
	);
}

export default ListingLayout;
