import { Fragment } from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";
import config from "@config/seo.json";

function Head() {
	return (
		<Fragment>
			<DefaultSeo {...config} />
			<NextHead>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="manifest"
					href="/site.webmanifest"
					key="site-manifest"
				/>
			</NextHead>
		</Fragment>
	);
}

export default Head;
