import Navbar from "@containers/Navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="w-full h-full flex">
			<Navbar />
			<main className="w-10/12 bg-stone-800">{children}</main>
		</div>
	);
}

export default Layout;
