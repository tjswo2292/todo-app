import axios from "axios";

const API_URL = "https://pre-onboarding-selection-task.shop/";

export const client = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
