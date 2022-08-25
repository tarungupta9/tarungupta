import Post from "./Post";
import { ListOfPostsTypes, PostProptypes } from "./ListOfPosts.types";
import { useRouter } from "next/router";

function ListOfPosts({ posts }: ListOfPostsTypes) {
	const router = useRouter();
	return <div>{renderPostsList(posts, redirect)}</div>;

	function redirect(slug: string) {
		if (slug) {
			router.push(slug);
		}
	}
}

function renderPostsList(
	posts: PostProptypes[],
	redirect: (slug: string) => void
) {
	if (posts?.length < 0) {
		return [];
	}

	return posts.map((post) => {
		return (
			<div className="my-4" onClick={() => redirect(post.slug)}>
				<Post id={post.id} {...post} />
			</div>
		);
	});
}

export default ListOfPosts;
