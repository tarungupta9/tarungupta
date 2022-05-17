import { useState } from "react";
import clsx from "clsx";
import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";
import Modal from "@components/Modal/Modal";
import { FaPlusCircle } from "react-icons/fa";

function Ama({ children }) {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<Layout>
			<main
				className={clsx("flex", "h-full ", "text-base", "text-primary")}
			>
				<ListingLayout>
					<div className={clsx("flex justify-between items-center")}>
						<span>Ask me anything</span>
						<FaPlusCircle
							className={clsx("cursor-pointer")}
							onClick={() => setShowModal(!showModal)}
						/>
					</div>
					<Modal
						title="A simple modal"
						show={showModal}
						onClose={() => {
							setShowModal(false);
						}}
					>
						<div>Modal</div>
					</Modal>
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
