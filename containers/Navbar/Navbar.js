import { useContext } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import ListOfHyperlinks from "@widgets/ListOfHyperlinks/ListOfHyperlinks";
import NavbarData from "@data/Navbar.data";
import { useNavbarContext } from "@contexts/useNavbarContext";

function Navbar() {
	const { brandName, listings } = NavbarData;
	const router = useRouter();
	const { NavbarContext } = useNavbarContext(
		router.pathname.slice(1) || "home"
	);
	const [activeHyperlink, setActiveHyperlink] = useContext(NavbarContext);

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

	function getListings(listings) {
		return listings.map(function listingMapper(
			{ heading, hyperlinks },
			index
		) {
			const hyperlinksParsed = hyperlinks.map(function hyperlinksMapper({
				id,
				isExternal,
				Icon,
				label,
				slug,
			}) {
				return {
					id,
					isExternal,
					isSelected: id === activeHyperlink,
					Icon,
					label,
					slug,
				};
			});

			return (
				<div key={index} className="mt-4">
					<ListOfHyperlinks
						key={index}
						heading={heading}
						hyperlinks={hyperlinksParsed}
						setActiveHyperlink={function handler(id) {
							setActiveHyperlink(id);
						}}
					/>
				</div>
			);
		});
	}
}

export default Navbar;
