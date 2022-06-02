import { useState } from "react";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import SignIn from "@containers/SignIn";
import ListOfPosts from "@widgets/ListOfPosts/ListOfPosts";
import Modal from "@components/Modal/Modal";
import axios from "axios";

function Ama({ children }) {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [query, setQuery] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const { data: session } = useSession();

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
					{session ? (
						<Modal
							title="Ask Me Anything"
							show={showModal}
							onClose={() => {
								setShowModal(false);
							}}
						>
							<div className={clsx("flex")}>
								<div className={clsx("h-10 w-10 mr-4")}>
									<Image
										layout="fixed"
										src={session?.user?.image}
										alt="profile"
										height="40"
										width="40"
									/>
								</div>
								<div
									className={clsx(
										"flex",
										"flex-col",
										"flex-1"
									)}
								>
									<textarea
										rows={1}
										className={clsx(
											"resize-none",
											"mb-4",
											"p-2",
											"bg-stone-700",
											"rounded-md"
										)}
										placeholder="Ask me anything..."
										value={query}
										onChange={(e) =>
											setQuery(e.target.value)
										}
									/>
									<textarea
										rows={4}
										className={clsx(
											"resize-none",
											"mb-4",
											"p-2",
											"bg-stone-700",
											"rounded-md"
										)}
										placeholder="Optional: Want to describe more?"
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>
									<button
										className={clsx(
											"flex",
											"self-end",
											"text-primary",
											"text-sm",
											"text-center",
											"font-bold",
											"p-2",
											"mt-2",
											"rounded",
											"hover:cursor-pointer",
											"bg-blue-500 ",
											!query &&
												"bg-blue-400 hover:cursor-not-allowed"
										)}
										disabled={!query}
										onClick={() =>
											addQuery({
												userName: session.user.name,
												userEmail: session.user.email,
												query,
												description,
											})
										}
									>
										Ask Away
									</button>
								</div>
							</div>
						</Modal>
					) : (
						<Modal
							title="Sign In"
							footer="Delete your account any time. I will only request access to your public Google profile information. You won’t be subscribed to anything."
							show={showModal}
							onClose={() => {
								setShowModal(false);
							}}
						>
							<SignIn />
						</Modal>
					)}
					{/* <ListOfPosts posts={blogListing} /> */}
				</ListingLayout>
			</main>
		</Layout>
	);
}

async function addQuery({
	userName,
	userEmail,
	query,
	description,
}: {
	userName: string;
	userEmail: string;
	query: string;
	description?: string;
}) {
	await axios
		.post("/api/ama", {
			userName,
			userEmail,
			query,
			description,
		})
		.then(console.log)
		.catch(console.error);
}

export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default Ama;
