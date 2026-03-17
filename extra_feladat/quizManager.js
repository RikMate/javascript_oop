class QuizManager
{
    /**@type {number} */
    #currentQuestionNumber;
    /**@type {QuestionType[]} */
    #questions;
    /**@type {string[]} */
    #questionsAnswers;
    /**@type {NextQuestionCallback} */
    #nextQuestionCallback;
    /**@type {FinishResultCallback} */
    #finishResultCallback;

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions)
    {
        this.#currentQuestionNumber = 0;
        this.#questionsAnswers = [];
        this.#questions = questions;
    }

    startQuiz()
    {
        this.#nextQuestionCallback(this.#questions[this.#currentQuestionNumber]);
    }

    /**
     * 
     * @param {string} answer 
     * @returns {void}
     */
    nextQuestion(answer)
    {
        let correctAnswer = 0;
        this.#questionsAnswers.push(answer);
        if(this.#questions.length - 1 > this.#currentQuestionNumber)
        {
            this.#currentQuestionNumber++;
            this.#nextQuestionCallback(this.#questions[this.#currentQuestionNumber]);
        }
        else
        {
            for (let i = 0; i < this.#questionsAnswers.length; i++) {
                if(this.#questionsAnswers[i] == this.#questions[i].rightAnswer)
                {
                    correctAnswer++;
                }
            }
            this.#finishResultCallback("Ennyit sikerült eltalálni: " + this.#questions.length + "/" + correctAnswer);
        }
    }

    /**@param {NextQuestionCallback} value  */
    set nextQuestionCallback(value)
    {
        this.#nextQuestionCallback = value;
    }

    /**@param {FinishResultCallback} value  */
    set finishResultCallback(value)
    {
        this.#finishResultCallback = value;
    }
}

export {QuizManager}