import clsx from "clsx";
import Layout from "@containers/Layout/Layout";

function Home() {
	return (
		<div
			className={clsx(
				"bg-stone-800",
				"text-base",
				"text-tertiary",
				"h-full",
				"flex-col",
				"justify-between",
				"p-16"
			)}
		>
			Hey 👋,
			<br /> My name is Tarun Gupta.
			<br />
			A frontend engineer who craves to learn and develop highly
			performant isomorphic web applications, study web and functional
			programming.
			<br />
			<span>
				ReactJS | Redux | NextJS | PWA | Javascript | HTML | CSS |
				NodeJS
			</span>
		</div>
	);
}

Home.Layout = Layout;

export default Home;
