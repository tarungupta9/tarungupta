import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import HomeContent from "@components/HomeContent/index.mdx";

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
				"p-4",
				"overflow-auto",
				"md:p-16"
			)}
		>
			<HomeContent />
		</div>
	);
}

Home.Layout = Layout;
export default Home;
