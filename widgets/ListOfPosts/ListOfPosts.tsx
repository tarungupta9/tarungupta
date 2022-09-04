import Post from "./Post";
import { useRouter } from "next/router";
import clsx from "clsx";
import { ListOfPostsTypes, PostProptypes } from "./ListOfPosts.types";

function ListOfPosts({ posts, selectedId }: ListOfPostsTypes) {
	const router = useRouter();
	return <div>{renderPostsList(posts, redirect, selectedId)}</div>;

	function redirect(slug: string) {
		if (slug) {
			router.push(slug);
		}
	}
}

function renderPostsList(
	posts: PostProptypes[],
	redirect: (slug: string) => void,
	selectedId?: string
) {
	if (posts?.length < 0) {
		return [];
	}

	return posts.map((post) => {
		return (
			<div
				id={post.id}
				className={clsx(
					"p-2",
					"m-2",
					"text-sm",
					"rounded-md",
					"hover:bg-stone-700",
					"hover:cursor-pointer",
					post.id == selectedId && "bg-stone-700 shadow shadow-stone-700/70"
				)}
				onClick={() => redirect(post.slug)}
			>
				<Post {...post} />
			</div>
		);
	});
}

export default ListOfPosts;
