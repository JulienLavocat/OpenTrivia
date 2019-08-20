import {Difficulty, QuestionType} from "./Question";

export interface QuestionQuery {
	difficulty?: Difficulty;
	type?: QuestionType;
	category?: number;
}