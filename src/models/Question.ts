import atob from "atob";

export class Question {

	readonly category: string;
	readonly type: string;
	readonly difficulty: string;
	readonly question: string;
	readonly correctAnswer: string;
	readonly incorrectAnswers: string[];
	readonly propositions: string[];

	constructor(obj: any) {
		this.category = atob(obj.category);
		this.type = atob(obj.type);
		this.difficulty = atob(obj.difficulty);
		this.question = atob(obj.question);
		this.correctAnswer = atob(obj.correct_answer);
		this.incorrectAnswers = obj.incorrect_answers.map((o: any) => atob(o));
		this.propositions = shuffle([...this.incorrectAnswers, this.correctAnswer]);
	}

	isAnswerCorrect(answer: string) {
		return answer && this.correctAnswer === answer;
	}
}

function shuffle(a: any[]) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

export type QuestionType = "multiple" | "boolean";
export type Difficulty = "easy" | "medium" | "hard";