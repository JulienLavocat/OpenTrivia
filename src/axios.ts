import axios, { AxiosInstance } from "axios";
import { TriviaError } from "./models";

//TODO: use baseUrl property

export class Axios {

	private axios: AxiosInstance;

	constructor(url: string) {
		this.axios = axios.create({
			baseURL: url
		});
	}

	async get(url: string, config?: any): Promise<any> {
		url = encodeURI(url);
		try {
			const result = await this.axios.get(url, config);
			delete result.data.success;
			return result.data;
		} catch (error) {
			if (error.response) {
				throw new TriviaError(error.response.status, "An error occured", error.response);
			} else if (error.request) {
				throw new TriviaError("EMPTY_RESPONSE", "No response received");
			} else {
				throw error;
			}
		}
	}
}
