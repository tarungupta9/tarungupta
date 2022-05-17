import { useContext } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import clsx from "clsx";
import ListOfHyperlinks from "@widgets/ListOfHyperlinks/ListOfHyperlinks";
import NavbarData from "@data/Navbar.data";
import { useNavbarContext } from "@contexts/useNavbarContext";
import { Session } from "next-auth";

function Navbar() {
	const { brandName, listings } = NavbarData;
	const router = useRouter();
	const { data: session } = useSession();
	const { NavbarContextProvider, NavbarContext } = useNavbarContext(
		router.pathname.slice(1) || "home"
	);
	const [activeHyperlink, setActiveHyperlink] = useContext(NavbarContext);

	return (
		<NavbarContextProvider>
			<nav
				className={clsx(
					"flex",
					"flex-col",
					"bg-stone-900",
					"w-2/12",
					"h-full",
					"border-r",
					"border-r-stone-700",
					"box-border"
				)}
			>
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
				<div
					className={clsx(
						"sticky",
						"bottom-0",
						"left-0",
						"mt-auto",
						"w-100",
						"text-primary",
						"text-sm",
						"text-center",
						"font-bold",
						"p-2",
						"m-2",
						"rounded",
						"bg-stone-700",
						"hover:cursor-pointer"
					)}
				>
					{getLoginUI(session)}
				</div>
			</nav>
		</NavbarContextProvider>
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

	function getLoginUI(session: Session) {
		if (session) {
			console.log(session, "@@2");
			return (
				<>
					Signed in as {session.user.email} <br />
					<button onClick={() => signOut()}>Sign out</button>
				</>
			);
		}

		return (
			<>
				<button onClick={() => signIn()}>Sign in</button>
			</>
		);
	}
}

export default Navbar;
