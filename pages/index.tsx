import Layout from "@containers/Layout/Layout";
import HomeContent from "@components/HomeContent/index.mdx";
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
			<HomeContent />
		</div>
	);
}

Home.Layout = Layout;
export default Home;
