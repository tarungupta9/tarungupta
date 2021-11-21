import clsx from "clsx";
import ListOfHyperlinks from "@widgets/ListOfHyperlinks/ListOfHyperlinks";
import NavbarData from "@data/Navbar.data";

function Navbar() {
	const { brandName, listings } = NavbarData;

	return (
		<nav className="bg-dark h-full">
			<div
				className={clsx(
					"text-base",
					"font-medium",
					"text-primary",
					"p-4"
				)}
			>
				{brandName}
			</div>
			{getListings(listings)}
		</nav>
	);
}

function getListings(listings) {
	return listings.map(function listingMapper({ heading, hyperlinks }, index) {
		const hyperlinksParsed = hyperlinks.map(function hyperlinksMapper({
			isExternal,
			isSelected,
			Icon,
			label,
			slug,
		}) {
			return {
				isExternal,
				isSelected,
				Icon,
				label,
				slug,
			};
		});

		return (
			<div className="mt-4">
				<ListOfHyperlinks
					key={index}
					heading={heading}
					hyperlinks={hyperlinksParsed}
				/>
			</div>
		);
	});
}

export default Navbar;
