import { Fragment } from "react";
import Head from "@containers/Head";
import "@styles/globals.css";

function Noop({ children }) {
	return <Fragment>{children}</Fragment>;
}

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || Noop;

	return (
		<Fragment>
			<Head />
			<Layout pageProps={pageProps}>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	);
}

export default MyApp;
