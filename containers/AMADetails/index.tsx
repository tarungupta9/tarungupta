import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import { FaRegComment, FaRegTrashAlt } from "react-icons/fa";
import {
	AMADetailsType,
	CommentType,
} from "@containers/AMADetails/AMADetails.types";
import CommentBox from "@components/CommentBox/CommentBox";
import useSnackbar from "@contexts/snackbar/useSnackbar";
import { beautifyDate } from "@utils/date";

function AMADetails({
	id,
	createdAt,
	description,
	query,
	image,
	name,
	comments = [],
}: AMADetailsType) {
	const [allComments, setAllComments] = useState<CommentType[]>(comments);

	const { data: session } = useSession();
	const setAlert = useSnackbar();

	useEffect(() => {
		setAllComments(comments);
	}, [comments]);

	return (
		<div className="flex flex-col w-full">
			<div className="mt-4 overflow-y-auto grow">
				<div className="flex items-center p-4">
					<Image
						className="rounded-full"
						src={image}
						alt="profile"
						width={32}
						height={32}
					/>
					<span className="ml-2">{name}</span>
					&nbsp;&middot;&nbsp;
					<span className="text-tertiary">{beautifyDate(createdAt)}</span>
				</div>
				<div className="flex flex-col p-4">
					<h1 className="text-3xl">{query}</h1>
					<p className="flex mt-2 text-tertiary text-md leading-tight">
						{description}
					</p>
				</div>
				<div className="flex justify-center mt-4 px-6">
					<FaRegComment />
				</div>
				<div className="p-4">{getComments(allComments)}</div>
			</div>
			<div className="sticky bottom-0 w-full p-4 border-t bg-stone-800 border-stone-700 box-border">
				<CommentBox submitComment={handleCommentSubmission} />
			</div>
		</div>
	);

	function getComments(comments) {
		return comments?.length > 0 ? (
			comments.map(({ id, comment, image, name, email, createdAt }) => (
				<div key={id} className="group mt-2">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Image
								className="rounded-full"
								src={image}
								alt="profile"
								width={24}
								height={24}
							/>
							<div>
								<span className="ml-2">{name}</span>
								&nbsp;&middot;&nbsp;
								<span className="text-tertiary">{beautifyDate(createdAt)}</span>
							</div>
						</div>
						{email === session.user.email && (
							<FaRegTrashAlt
								className="hidden cursor-pointer group-hover:block"
								onClick={() => handleCommentDeletion(id)}
							/>
						)}
					</div>
					<p className="pl-8 text-tertiary">{comment}</p>
				</div>
			))
		) : (
			<div>No Comments 🤓</div>
		);
	}

	async function handleCommentSubmission(newComment) {
		const commentPayload = {
			ama_id: id,
			comment: newComment,
		};

		try {
			const {
				data: { id, name, image, email, comment, createdAt } = { data: {} },
			} = await axios.post("/api/comments", commentPayload);

			setAllComments((allComments) => [
				...allComments,
				{
					id,
					comment,
					email,
					image,
					name,
					createdAt,
				},
			]);
		} catch (error) {
			setAlert({
				message: "Sorry, failed to comment. Please try again in sometime!",
				type: "error",
			});
		}
	}

	async function handleCommentDeletion(commentId) {
		confirm("Do you want to delete the comment?");
		try {
			await axios.patch("/api/comments", { data: { id: commentId } });

			setAllComments((prevAllComments) =>
				prevAllComments.filter(({ id }) => id != commentId)
			);
		} catch (error) {
			setAlert({
				message:
					"Sorry, couldn't delete the comment. Please try again in sometime!",
				type: "error",
			});
		}
	}
}

export default AMADetails;
