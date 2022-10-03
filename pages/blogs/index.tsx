import { useEffect } from "react";
import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";
import blogListing from "@data/Blogs.data";

function Blogs({ selectedId, children }) {
	useEffect(() => {
		// fetch about the about the
	}, []);

	return (
		<Layout>
			<main className={clsx("flex", "h-full ", "text-base", "text-primary")}>
				<ListingLayout>
					<div className={clsx("flex justify-between items-center pt-4 mb-4")}>
						<span className="ml-2">Writings</span>
					</div>
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
