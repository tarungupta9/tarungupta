import axios from "axios";

const instance = axios.create({
	baseURL: process.env.CMS_HOST,
	timeout: 5000,
});

export default instance;
