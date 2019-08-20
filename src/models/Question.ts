export class Question {

	readonly category: string;
	readonly type: QuestionType;
	readonly difficulty: Difficulty;
	readonly question: string;
	readonly correctAnswer: string;
	readonly incorrectAnswers: string[];

	constructor(obj: any) {
		this.category = obj.category;
		this.type = obj.type;
		this.difficulty = obj.difficulty;
		this.question = obj.question;
		this.correctAnswer = obj.correct_answer;
		this.incorrectAnswers = obj.incorrect_answers;
	}


	isAnswerCorrect(answer: string) {
		return answer && this.correctAnswer === answer;
	}

}

export type QuestionType = "multiple" | "boolean";
export type Difficulty = "easy" | "medium" | "hard";