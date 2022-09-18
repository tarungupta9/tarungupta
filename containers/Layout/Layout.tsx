import Navbar from "@containers/Navbar/Navbar";
import SnackbarProvider from "@contexts/snackbar/SnackbarProvider";

function Layout({ children }) {
	return (
		<SnackbarProvider>
			<div className="w-full h-full flex">
				<Navbar />
				<main className="w-10/12 bg-stone-800">{children}</main>
			</div>
		</SnackbarProvider>
	);
}

export default Layout;
