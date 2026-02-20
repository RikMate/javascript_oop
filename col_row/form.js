import { Manager } from "./manager.js";

class formController
{
    /**
     * @type {HTMLFormElement}
     */
    #form;
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @type {FormFieldType}
     */
    #formFieldElemList;

    /**
     * @param {FormFieldType} formFieldList 
     * @param {Manager} manager 
     */
    constructor(formFieldList, manager)
    {
        this.#manager = manager;
        const form = document.createElement("form");
        this.#form = form;
        document.body.appendChild(form);
        this.#formFieldElemList = [];

        const button = document.createElement("button");
        button.innerText = "Submit";
        this.#form.appendChild(button);
        for(const formField of formFieldList)
        {
            const formFieldElem = new FormField(formField.id, formField.name, formField.label, formField.required, this.#form);
            this.#formFieldElemList.push(formFieldElem);
        }

        this.#form.addEventListener("submit", (e) => {
            e.preventDefault();

            const elem = this.#createElement();
            if(elem)
            {
                this.#manager.addElement(elem)
                e.target.reset();
            }
        })
    }

    /**
     * 
     * @returns {ColspanType | RowspanType | null}
     */
    #createElement()
    {
        let result = {};
        let valid = true;
        for (const inputField of this.#formFieldElemList)
        {
            if(inputField.validate())
            {
                result[inputField.name] = inputField.value;
            }
            else
            {
                valid = false;
            }
        }
        if(valid)
        {
            return result;
        }
        else
        {
            return null;
        }
    }
}

class FormField{
    /**
     * @type {HTMLInputElement}
     */
    #input

    /**
     * @type {string}
     */
    #name

    /**
     * @type {boolean}
     */
    #required

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv

    get value()
    {
        if(this.#input.value)
        {
            return this.#input.value;
        }
        return undefined;
    }

    get name()
    {
        return this.#name;
    }

    /**
     * @param {string} id 
     * @param {string} name 
     * @param {string} labelContent
     * @param {boolean} required 
     * @param {HTMLElement} parent 
     */
    constructor(id, name, labelContent, required, parent)
    {
        const div = document.createElement("div");
        parent.appendChild(div);

        div.appendChild(document.createElement("br"));
        const label = document.createElement("label");
        label.innerText = labelContent;
        div.appendChild(label);

        div.appendChild(document.createElement("br"));

        const input = document.createElement("input");
        input.id = id;
        input.name = name;
        div.appendChild(input);

        this.#input = input;
        this.#name = name;

        const errordiv = document.createElement("div");
        errordiv.classList.add(".error");
        div.appendChild(errordiv);

        this.#required = required;
        this.#errorDiv = errordiv;
    }

    /**
     * 
     * @returns {boolean}
     */
    validate()
    {
        const result = true;
        if(this.#required && !this.value)
        {
            result = false;
            this.#errorDiv.innerText = "Kötelező!";
        }
        else
        {
            this.#errorDiv.innerText = "";
        }
        return result;
    }
}

export {formController}