import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";

function Blogs({ children }) {
	return (
		<main className={clsx("flex", "h-full ", "text-base", "text-primary")}>
			<div className={clsx("bg-dark", "h-full, p-3")}>
				{/* <Suspense fallback="Loading..."> */}
				{/* <ListOfPosts /> */}
				{/* </Suspense> */}
				hello
			</div>
			<div className={clsx("bg-dark", "h-full")}></div>
		</main>
	);
}

Blogs.Layout = Layout;

export default Blogs;
