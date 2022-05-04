import clsx from "clsx";
import { PostProptypes } from "./ListOfPosts.types";

function Post({ name, createdAt, readingTime }: PostProptypes) {
	return (
		<div className="cursor-pointer text-sm">
			<span className={clsx("text-primary")}>{name}</span>
			<div className={clsx("flex", "justify-between", "text-tertiary")}>
				<span>{createdAt}</span>
				<span>{readingTime}</span>
			</div>
		</div>
	);
}

export default Post;
