import clsx from "clsx";
import { useState } from "react";
import { CommentBoxTypes } from "./CommentBox.types";

function CommentBox({ submitComment }: CommentBoxTypes) {
	const [comment, setComment] = useState<string>("");

	return (
		<div className="flex">
			<form className="flex flex-1 items-center" onSubmit={handleSubmit}>
				<input
					className="flex flex-1 p-2 mr-4 bg-stone-700"
					type="text"
					placeholder="Write a comment"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<button
					className={clsx(
						"flex",
						"self-center",
						"text-primary",
						"text-sm",
						"text-center",
						"font-bold",
						"p-2",
						"rounded",
						"hover:cursor-pointer",
						"bg-blue-500 ",
						!comment && "bg-blue-400 hover:cursor-not-allowed"
					)}
				>
					Comment
				</button>
			</form>
		</div>
	);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!comment.trim()) {
			return;
		}

		setComment("");
		submitComment(comment);
	}
}

export default CommentBox;
