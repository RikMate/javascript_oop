/**
 * @import {functions.js}
 * 
 * @callback addCallback
 * @param {ColspanType | RowspanType} param
 * @returns {void}
 */

class Manager
{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #tableArray;
    /**
     * @type {addCallback}
     */
    #addCallback;
    constructor()
    {
        this.#tableArray = [];
    }

    /**
     * @param {ColspanType || RowspanType} element
     */
    addElement(element)
    {
        this.#tableArray.push(element);
        if(this.#addCallback)
        {
            this.#addCallback(element);
        }
    }

    /**
     * @param {addCallback} callback
     */
    set Setter(callback)
    {
        this.#addCallback = callback;
    }
}

export {Manager};