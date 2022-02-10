import axios from "axios";

const instance = axios.create({
	baseURL: process.env.CMS_DOMAIN,
	timeout: 5000,
});

export default instance;
