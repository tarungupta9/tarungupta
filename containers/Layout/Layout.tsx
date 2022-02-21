import Navbar from "@containers/Navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="w-full h-full flex">
			<div className="w-2/12 h-full">
				<Navbar />
			</div>
			<main className="w-10/12">{children}</main>
		</div>
	);
}

export default Layout;
