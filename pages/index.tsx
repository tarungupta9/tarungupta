import Layout from "@containers/Layout/Layout";
import clsx from "clsx";

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
			Hey folks 👋
			<br /> My name is Tarun Gupta. A frontend engineer who craves to learn and
			develop highly performant isomorphic web applications, study web and
			functional programming. I keep myself fit by doing crossfit and presently
			making sincere efforts to learn swimming. I have also started reading
			books recently.
			<br />
			<br />
			<span>
				Tech Stack:
				<br />
				ReactJS | Redux | NextJS | PWA | Javascript | HTML | CSS | NodeJS
			</span>
		</div>
	);
}

Home.Layout = Layout;

export default Home;
