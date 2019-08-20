export class TriviaError {

	status: any;
	message: any;
	details: any;

	constructor(status: any, message?: any, details?: any) {
		this.status = status;
		this.message = message;
		this.details = details;
	}

}