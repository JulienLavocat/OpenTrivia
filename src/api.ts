import {QuestionQuery} from "./models";
import { Axios } from "./axios";

export class OpenTriviaAPI {

	axios: Axios;

	constructor() {
		this.axios = new Axios("https://opentdb.com/");
	}

	getQuestions(amount: number, params?: QuestionQuery) {
		let query = toQuery(params);
		query += "&amount=" + amount;
		return this.axios.get(`api.php${query}`);
	}

}

function toQuery(obj: any): string {
	if(!obj)
		return "?";
	let query = "?";
	Object.entries<any>(obj).forEach((k, v) => {
		query += `${k[0]}=${k[1]}&`;
	});
	return query.slice(0, query.length -1);
}