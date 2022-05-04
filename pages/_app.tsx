import { Fragment } from "react";
import { SessionProvider } from "next-auth/react";
import Head from "@containers/Head";
import "@styles/globals.css";

function Noop({ children }) {
	return <Fragment>{children}</Fragment>;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const Layout = Component.Layout || Noop;

	return (
		<SessionProvider session={session}>
			<Head />
			<Layout pageProps={pageProps}>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default MyApp;
