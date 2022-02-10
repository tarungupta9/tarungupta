import Layout from "@containers/Layout/Layout";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

function Blogs() {
	const { data, error } = useSWR(
		{
			url: "/v3/content/posts",
			config: {
				params: {
					key: process.env.GHOST_CONTENT_API,
				},
			},
		},
		fetcher
	);
	console.log(data, "@@@");
	return <div>Blogs</div>;
}

Blogs.Layout = Layout;

export default Blogs;
