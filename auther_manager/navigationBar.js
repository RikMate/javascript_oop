import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./viewElement.js";

class NavigationBar extends ViewElement // navigationBar osztály definíciója
{
    /**@type {ViewElement[]} */
    #viewElementList; // privát tulajdonság, ami tartalmazza a megjelenítendő viewelement leszármazottakat (táblázat, form, importexport)
     constructor() // konstruktor definíció
     {
        super('navbar'); // meghívjuk a szülőosztály konstruktorát
        this.#viewElementList = []; // inicializáljuk a viewelementlistet egy üres tömbbel
        this.div.addEventListener("change", (e) => { // feliratkozunk a div change eseményére (mivel a div radiógombokat for tartalmazni, ezért tudjuk figyelni a divnél, hogy melyik rádiógomb van kijelölve)
            const radioButtonValue = e.target.value; // elkérjük a target value értékét
            this.activate(radioButtonValue); // meghívjuk az activate függvény a kiválasztott rádiógomb értékével (a viewelement azonosítói lehetnek lásd: addViewElement)
        })
     }

     /**
      * @param {string} label 
      * @param {viewElement} viewElement 
      */
     addViewElement(label, viewElement) // navigationbae példányának definiál egy függvényt
     {
        this.#viewElementList.push(viewElement); // bemeneti viewelement hozzáadjuk a viewElementListhez
        const div = createRadioButton({id: viewElement.id, name: this.id, label}); 
        this.div.appendChild(div); // hozzáfüzzük a divheza rádiógomb kreálás visszatérési értékét (this.div lásd: viewelement osztály definiciója)
     }
     /**
      * @override
      * @param {string} value 
      */
     activate(value) // A szülő osztály definiál egy activate függvényt lásd: ViewElement.activate), de a navigác
     {
        for(const viewElement of this.#viewElementList) // végigiterálunk a viewelementlist (table, form, és importexportot tartalmazza)
        {
            viewElement.activate(value); //  meghívjuk az activate függvényét minden viewelementként
        }
        this.div.querySelector(`#${value}`).checked = true; // a diven belül lekérjük a bemeneti paraméterrel megegyező id jó element
     }
}

export {NavigationBar};