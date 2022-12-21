import { useEffect, useState } from "react";
import Navbar from "@containers/Navbar/Navbar";
import SnackbarProvider from "@contexts/snackbar/SnackbarProvider";
import useIsMobile from "@hooks/useIsMobile";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/router";

function Layout({ children }) {
	const { pathname } = useRouter();
	const isMobile = useIsMobile();
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		setShowNavbar(false);
	}, [pathname]);

	return (
		<SnackbarProvider>
			<div className="w-full h-full flex">
				{!isMobile && <Navbar />}
				{showNavbar && (
					<div className="fixed top-0 left-0 w-full h-full text-primary z-10 transition ease-in-out delay-1000">
						<CgClose
							className="fixed top-2 left-2"
							size={24}
							onClick={() => setShowNavbar(!showNavbar)}
						/>
						<Navbar />
					</div>
				)}
				{isMobile && !showNavbar && (
					<FiMenu
						className="fixed top-2 left-2 text-primary"
						size={24}
						onClick={() => setShowNavbar(!showNavbar)}
					/>
				)}
				<main className="w-full bg-stone-800 pt-12 md:w-10/12 md:pt-0">
					{children}
				</main>
			</div>
		</SnackbarProvider>
	);
}

export default Layout;
