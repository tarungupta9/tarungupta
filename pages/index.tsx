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
			develop highly performant web applications, study web and
			functional programming. I keep myself fit by doing crossfit and playing sports.
			<br />
			<br />
			<span>
				hey
			</span>
		</div>
	);
}

Home.Layout = Layout;

export default Home;
