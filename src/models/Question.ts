export class Question {

	readonly category: string;
	readonly type: QuestionType;
	readonly difficulty: Difficulty;
	readonly question: string;
	readonly correctAnswer: string;
	readonly incorrectAnswers: string[];
	readonly propositions: string[];

	constructor(obj: any) {
		this.category = obj.category;
		this.type = obj.type;
		this.difficulty = obj.difficulty;
		this.question = obj.question;
		this.correctAnswer = obj.correct_answer;
		this.incorrectAnswers = obj.incorrect_answers;
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