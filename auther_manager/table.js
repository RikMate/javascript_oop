import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { AutherManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class TableView extends ViewElement // táblázatot tartalmazzó viewelement definiálása a viewelementből leszármazik
{
    /**@type {AutherManager} */
    #manager; // privát tulajdonság a managernek
    /**@type {HTMLTableSectionElement} */
    #tbody; // privát tulajdonság a táblázat törzsének
    /**
     * 
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {AutherManager} manager 
     */
    constructor(id, headerArray, manager)
    {
        super(id); // privát tulajdonság a táblázat törzsénekszülőosztály konstruktorának meghívása
        this.#manager = manager; // a manager értéke a bemeneti manager példány
        const table = document.createElement("table"); // létrehozunk egy táblázatot
        this.div.appendChild(table); // hozzácsatoljuk a táblázatot a divhez
        const thead = createTableHeader(headerArray) // létrehozzuk a táblázat fejlécét a string tömb alapján
        table.appendChild(thead); // hozzácsatoljuk a táblázathoz a thead-et
        this.#tbody = document.createElement("tbody"); // létrehozzuk a tbody-t
        table.appendChild(this.#tbody); // hozzácsatoljuk a tbody-t a table-höz
        this.#manager.tableCallback = (autherList) => {  // definiljuk a manager tablecallback-jét
          if(autherList.length == 0) // ha a lista üres
          {
              const tr = document.createElement("tr"); // létrehozunk egy sor elemet
              this.#tbody.appendChild(tr); // hozzácsatoljuk a tbody-hoz
              const td = createTableCell(tr, "Nincs megjelenitendo sor"); // létrehozzuk egy cellát tartalommal és hozzácsatoljuk a sorhoz
              td.colSpan = 3; // kiterjesztjük a cellát a 3 oszlopos szélességüre
          } // bele lehetne tenni egy else ágba
          for(const auther of autherList) // végigiterálunk az authorlist-en
          {
              const tr = document.createElement("tr"); // létrehozzunk egy sort
              this.#tbody.appendChild(tr); // hozzácsatoljuk a tbody-hoz
              createTableCell(tr, auther.name); // létrehozunk egy cellát a sorhoz az author nevével
              createTableCell(tr, auther.work); // létrehozunk egy cellát a sorhoz az author work-vel
              createTableCell(tr, auther.concept); // létrehozunk egy cellát a sorhoz az author concept-el
          }
        }
        this.activateCallback = () => { // definiáljuk az activatecallback-et
            this.#tbody.innerHTML = ''; // töröljük a tbody tartalmát
            this.#manager.getAllElement(); // meghívjuk a manager getAllElement-jét (ami meghívja a tablecallback-et lásd: AuthorManager.getAllElement)
        }
    }
}

export {TableView} // exportáljuk a TableView-t