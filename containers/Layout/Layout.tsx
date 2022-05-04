import Navbar from "@containers/Navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="w-full h-full flex">
			<Navbar />
			<main className="w-10/12 bg-background-dark">{children}</main>
		</div>
	);
}

export default Layout;
