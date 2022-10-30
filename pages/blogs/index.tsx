import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";
import blogListing from "@data/Blogs.data";

function Blogs({ selectedId, children }) {
	return (
		<Layout>
			<main className={clsx("flex", "h-full ", "text-base", "text-primary")}>
				<ListingLayout>
					<h4 className={"sticky top-0 bg-stone-900 py-4 text-primary z-10"}>
						Writings
					</h4>
					<ListOfPosts selectedId={selectedId} posts={blogListing} />
				</ListingLayout>
				<div
					className={clsx(
						"bg-stone-800",
						"h-full",
						"flex-1",
						"p-4",
						"text-base",
						"text-tertiary"
					)}
				>
					{children}
				</div>
			</main>
		</Layout>
	);
}

export default Blogs;
