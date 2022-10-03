import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import clsx from "clsx";
import { FaPlusCircle } from "react-icons/fa";
import ListOfAmas from "@widgets/ListOfAmas/ListOfAmas";
import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import SignIn from "@containers/SignIn";
import Modal from "@components/Modal/Modal";
import { prisma } from "../../db";
import AMADetails from "@containers/AMADetails";
import { AMADetailsType } from "@containers/AMADetails/AMADetails.types";
import fetcher from "@utils/fetcher";
import useSnackbar from "@contexts/snackbar/useSnackbar";

function Ama({ queries }) {
	const setAlert = useSnackbar();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [query, setQuery] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [amaData, setAmaData] = useState<AMADetailsType>();
	const [error, setError] = useState();
	// TODO: Implement useFetch hook

	const router = useRouter();
	const { ids } = router.query;
	const { data: session } = useSession();

	const amaQueries = JSON.parse(queries);

	let selectedId = Array.isArray(ids) ? ids[0] : ids;

	useEffect(() => {
		if (selectedId) {
			const promises = [
				fetcher({
					url: "/api/ama",
					config: {
						params: {
							id: selectedId,
						},
					},
				}),
				fetcher({
					url: "/api/comments",
					config: {
						params: {
							id: selectedId,
						},
					},
				}),
			];

			Promise.all(promises)
				.then(([amaData, commentData]) => {
					if (amaData.data) {
						amaData.data.comments = commentData.data;
						setAmaData(amaData.data);
					}
				})
				.catch((err) => {
					setError(err);
				});
		}
	}, [selectedId]);

	return (
		<main className={clsx("flex", "h-full ", "text-base", "text-primary")}>
			<ListingLayout>
				<div className={clsx("flex justify-between items-center pt-4 mb-4")}>
					<span className="ml-2">Ask me anything</span>
					<FaPlusCircle
						className={clsx("cursor-pointer")}
						onClick={() => setShowModal(!showModal)}
					/>
				</div>
				<ListOfAmas amas={amaQueries} selectedId={selectedId} />
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
							<div className={clsx("flex", "flex-col", "flex-1")}>
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
									onChange={(e) => setQuery(e.target.value)}
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
									onChange={(e) => setDescription(e.target.value)}
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
										!query && "bg-blue-400 hover:cursor-not-allowed"
									)}
									disabled={!query}
									onClick={() =>
										handleQuery(
											{
												name: session.user.name,
												email: session.user.email,
												image: session.user.image,
												query,
												description,
											},
											() => setShowModal(!showModal)
										)
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
			</ListingLayout>
			{selectedId && amaData?.id && (
				<AMADetails
					id={amaData.id}
					createdAt={amaData.createdAt}
					description={amaData.description}
					query={amaData.query}
					email={amaData.email}
					image={amaData.image}
					name={amaData.name}
					comments={amaData.comments}
				/>
			)}
		</main>
	);

	async function handleQuery(
		{
			name,
			email,
			image,
			query,
			description,
		}: {
			name: string;
			email: string;
			image: string;
			query: string;
			description?: string;
		},
		onCompletion
	) {
		await axios
			.post("/api/ama", {
				name,
				email,
				image,
				query,
				description,
			})
			.then(() =>
				setAlert({
					message:
						"Thanks for submitting your query, it will get published soon",
					type: "success",
				})
			)
			.catch(() =>
				setAlert({
					message: "Sorry, something went wrong. Please try again later.",
					type: "error",
				})
			)
			.finally(() => {
				onCompletion();
			});
	}
}

export async function getServerSideProps(context) {
	let queries;

	try {
		queries = await prisma.ama.findMany({
			where: {
				public: {
					equals: true,
				},
			},
			select: {
				id: true,
				query: true,
				name: true,
				email: true,
				image: true,
				createdAt: true,
			},
		});
	} catch (error) {
		console.error(error);
	}

	return {
		props: { queries: JSON.stringify(queries) },
	};
}

Ama.Layout = Layout;

export default Ama;
