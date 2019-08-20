export * from "./models";
import {OpenTriviaAPI} from "./api";
import { QuestionQuery, Question } from "./models";

export class OpenTriviaClient {

	api: OpenTriviaAPI;

	constructor() {
		this.api = new OpenTriviaAPI();
	}

	async getQuestions(amount: number = 10, params?: QuestionQuery): Promise<Question[]> {
		const raw = await this.api.getQuestions(amount, params);
		return raw.results.map((q: any) => new Question(q));
	}

}