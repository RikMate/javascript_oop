import { QuizManager } from "./quizManager.js";

class View
{
   /**@type {QuizManager} */
   #manager;
   /**@type {HTMLDivElement} */
   #container;

   /**
    * 
    * @param {QuizManager} manager 
    */
   constructor(manager)
   {
      this.#manager = manager;
      this.#container = document.createElement("div");
      /**@param {QuestionViewType} */
      this.#manager.nextQuestionCallback = (question) => {
         this.#container.innerHTML = "";
         const errorDiv = document.createElement("div");
         errorDiv.classList.add("question");
         const span = document.createElement("span");
         span.innerText = question.question;
         errorDiv.appendChild(span);

         const answers = document.createElement("div");
         answers.classList.add("answers");
         for (const answer of question.answers) {
            const button = document.createElement("button");
            button.innerText = answer;
            button.addEventListener("click", (e) => {
               e.preventDefault();
               this.#manager.nextQuestion(answer);
            })
            answers.appendChild(button);
         }
         this.#container.appendChild(errorDiv);
         this.#container.appendChild(answers);
      }

      this.#manager.finishResultCallback = (result) => {
         this.#container.innerHTML = "";
         const resultDiv = document.createElement("div");
         resultDiv.classList.add("result");
         resultDiv.innerText = result;
         this.#container.appendChild(resultDiv);
      }
   }

   /**
    * 
    * @param {HTMLElement} parent 
    * @returns {void}
    */
   appendTo(parent)
   {
      parent.appendChild(this.#container);
   }
}

export {View}