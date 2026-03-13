/**
 * @callback TableCallback
 * @param {Auther[]} autherList
 * @returns {void}
 * 
 * @callback AddElementResultCallback
 * @param {string} message
 * @returns {void}
 */
class AutherManager
{
    /**@type {Auther[]} */
    #autherList;
    /**@type {TableCallback} */
    #tableCallback;
    /**@type {AddElementResultCallback} */
    #addElementResultCallback;

    /**@param {TableCallback} value  */
    set tableCallback(value)
    {
        this.#tableCallback = value
    }

    /**
     * @param {AddElementResultCallback} value 
     */
    set addElementResultCallback(value)
    {
        this.#addElementResultCallback = value;
    }

    constructor()
    {
        this.#autherList = []
    }
    
    /**
     * 
     * @param {import(".").AuthorType} element
     */
    addElement(element)
    {
        const auther = new Auther();
        auther.id = this.#autherList.length;
        auther.name = element.author;
        auther.work = element.work;
        auther.concept = element.concept;
        if(auther.validate())
        {
            this.#autherList.push(auther);
            this.#addElementResultCallback("Sikeres elemfelvetel");
        } else
        {
            this.#addElementResultCallback("Nem volt sikeres elemfelvetel");
        }
    }

    /**
     * @returns {void}
     */
    getAllElement()
    {
        this.#tableCallback(this.#autherList);
    }

}

class Auther{
    /**@type {string} */
    #id;
    /**@type {string} */
    #name;
    /**@type {string} */
    #work;
    /**@type {string} */
    #concept;
    
    get id()
    {
        return this.#id;
    }
    get name()
    {
        return this.#name;
    }
    get work()
    {
        return this.#work;
    }
    get concept()
    {
        return this.#concept;
    }

    set id(value)
    {
        this.#id = value;
    }
    set name(value)
    {
        this.#name = value;
    }
    set work(value)
    {
        this.#work = value;
    }
    set concept(value)
    {
        this.#concept = value;
    }

    /**
     * @returns {boolean}
     */
    validate()
    {
        return this.#name && this.#concept && this.#work
    }

}

export {AutherManager};