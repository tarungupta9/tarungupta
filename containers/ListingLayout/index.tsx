import clsx from "clsx";

function ListingLayout({ children }) {
	return (
		<div
			className={clsx(
				"w-full",
				"bg-stone-900",
				"h-full",
				"overflow-auto",
				"px-4",
				"border-r",
				"border-r-stone-700",
				"shrink-0",
				"md:w-4/12"
			)}
		>
			{children}
		</div>
	);
}

export default ListingLayout;
