import axios from "./axios";

export default async function fetcher({ url, config }) {
	return await axios.get(url, config);
}
