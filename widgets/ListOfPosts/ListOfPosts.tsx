import { PostProptypes } from "./ListOfPosts.types";

function ListOfPosts(posts: PostProptypes[]) {
	return <div>Hello</div>;
}

// function renderPostsList(posts: PostProptypes[]) {
// 	if (posts?.length < 0) {
// 		return [];
// 	}

// 	return posts.map(({ id }) => {
// 		return <Post key={id} />;
// 	});
// }

export default ListOfPosts;
