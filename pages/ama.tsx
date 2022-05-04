import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";
import { FaPlusCircle } from "react-icons/fa";
import ListingLayout from "@containers/ListingLayout";

function Ama({ children }) {
	return (
		<Layout>
			<main
				className={clsx("flex", "h-full ", "text-base", "text-primary")}
			>
				<ListingLayout>
					<div className={clsx("flex justify-between items-center")}>
						<span>Ask me anything</span>
						<FaPlusCircle className={clsx("cursor-pointer")} />
					</div>
					{/* <ListOfPosts posts={blogListing} /> */}
				</ListingLayout>
			</main>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default Ama;
