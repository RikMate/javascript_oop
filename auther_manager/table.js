import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { AutherManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class TableView extends ViewElement
{
    /**@type {AutherManager} */
    #manager;
    /**@type {HTMLTableSectionElement} */
    #tbody;
    /**
     * 
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {AutherManager} manager 
     */
    constructor(id, headerArray, manager)
    {
        super(id);
        this.#manager = manager;
        const table = document.createElement("table");
        this.div.appendChild(table);
        const thead = createTableHeader(headerArray)
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
        this.#manager.tableCallback = (autherList) => {
          if(autherList.length == 0)
          {
              const tr = document.createElement("tr");
              this.#tbody.appendChild(tr);
              const td = createTableCell(tr, "Nincs megjelenitendo sor");
              td.colSpan = 3;
          }
          for(const auther of autherList)
          {
              const tr = document.createElement("tr");
              this.#tbody.appendChild(tr);  
              createTableCell(tr, auther.name);
              createTableCell(tr, auther.work);
              createTableCell(tr, auther.concept);
          }
        }
        this.activateCallback = () => {
            this.#tbody.innerHTML = '';
            this.#manager.getAllElement();
        }
    }
}

export {TableView}