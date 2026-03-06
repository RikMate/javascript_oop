/**
 * @callback TableCallback
 * @param {Auther[]} autherList
 * @returns {void}
 */
class AutherManager
{
    /**@type {Auther[]} */
    #autherList;
    /**@type {TableCallback} */
    #tableCallback;

    /**@param {TableCallback} value  */
    set TableCallback(value)
    {
        this.#tableCallback = value
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
        this.#autherList.push(auther);
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

}

export {AutherManager};