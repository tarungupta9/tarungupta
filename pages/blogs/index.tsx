import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";
import blogListing from "@data/Blogs.data";
import { FaPlusCircle } from "react-icons/fa";
import ListingLayout from "@containers/ListingLayout";

function Blogs({ children }) {
	return (
		<Layout>
			<main
				className={clsx(
					"flex",
					"h-full ",
					"text-base",
					"text-primary",
				)}
			>
				<ListingLayout>
					<div
						className={clsx(
							"flex justify-between items-center p-4"
						)}
					>
						<span>Writings</span>
						<FaPlusCircle className={clsx("cursor-pointer")} />
					</div>
					<div className="px-4">
						<ListOfPosts posts={blogListing} />
					</div>
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
