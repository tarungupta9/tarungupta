import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import { FaRegComment } from "react-icons/fa";
import {
	AMADetailsType,
	CommentType,
} from "@containers/AMADetails/AMADetails.types";
import CommentBox from "@components/CommentBox/CommentBox";
import { beautifyDate } from "@utils/date";

function AMADetails({
	id,
	createdAt,
	description,
	query,
	userImage,
	userName,
	comments = [],
}: AMADetailsType) {
	const [allComments, setAllComments] = useState<CommentType[]>(comments);

	const { data: session } = useSession();

	useEffect(() => {
		setAllComments(comments);
	}, [comments]);

	return (
		<div className="flex flex-col w-full">
			<div className="mt-4 overflow-y-auto flex-2">
				<div className="flex items-center p-4">
					<Image
						className="rounded-full"
						src={userImage}
						alt="profile"
						width={32}
						height={32}
					/>
					<span className="ml-2">{userName}</span>
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
			<div className="sticky bottom-0 w-full">
				<CommentBox submitComment={handleCommentSubmission} />
			</div>
		</div>
	);

	async function handleCommentSubmission(newComment) {
		const commentPayload = {
			ama_id: id,
			comment: newComment,
			userEmail: session.user.email,
			userImage: session.user.image,
			userName: session.user.name,
		};

		await axios
			.post("/api/comments", commentPayload)
			.then(() => {
				setAllComments((allComments) => [
					...allComments,
					{
						...commentPayload,
						id: Math.random().toString(),
						createdAt: new Date().toISOString(),
					},
				]);
			})
			.catch(() => {}); // TODO: Toast failed to comment please try again
	}
}

function getComments(comments) {
	return comments?.length > 0 ? (
		comments.map(
			({ id, comment, userEmail, userImage, userName, createdAt }) => (
				<div key={id}>
					<div className="flex items-center mt-4">
						<Image
							className="rounded-full"
							src={userImage}
							alt="profile"
							width={24}
							height={24}
						/>
						<div>
							<span className="ml-2">{userName}</span>
							&nbsp;&middot;&nbsp;
							<span className="text-tertiary">{beautifyDate(createdAt)}</span>
						</div>
					</div>
					<p className="pl-8 text-tertiary">{comment}</p>
				</div>
			)
		)
	) : (
		<div>No Comments 🤓</div>
	);
}

export default AMADetails;
