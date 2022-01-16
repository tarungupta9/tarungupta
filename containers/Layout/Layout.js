import Navbar from "@containers/Navbar/Navbar";
import { useNavbarContext } from "@contexts/useNavbarContext";

function Layout({ children }) {
	const { NavbarContextProvider } = useNavbarContext("home");

	return (
		<div className="w-full h-full flex">
			<div className="w-3/12 h-full">
				<NavbarContextProvider>
					<Navbar />
				</NavbarContextProvider>
			</div>
			<main className="w-9/12">{children}</main>
		</div>
	);
}

export default Layout;
