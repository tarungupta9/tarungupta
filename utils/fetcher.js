import axios from "./axios";

export default async function fetcher({ url, config }) {
	console.log(url, config, "@");
	return await axios.get(url, config);
}
