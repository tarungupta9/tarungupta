import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";

function Blogs({ children }) {
	return (
		<Layout>
			<main
				className={clsx("flex", "h-full ", "text-base", "text-primary")}
			>
				<div className={clsx("bg-background", "h-full", "p-3")}>
					Blogs listing
				</div>
				<div
					className={clsx(
						"bg-background-dark",
						"h-full",
						"flex-1",
						"border",
						"border-outline",
						"p-4"
					)}
				>
					{children}
				</div>
			</main>
		</Layout>
	);
}

export default Blogs;
