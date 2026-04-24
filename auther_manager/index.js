/**
 * @typedef {{id: number; author?: string; work?: string; concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { FormView } from "./form.js";
import { ImportView } from "./importExport.js";
import { AutherManager } from "./manager.js";
import { NavigationBar } from "./navigationBar.js"
import { TableView } from "./table.js";

const formFields = [{ // létrehozunk egy formField listát
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom'] // létrehozunk egy header listát

const navbar = new NavigationBar();
const manager = new AutherManager();
navbar.appendTo(document.body); // hozzáfüzzük a nabart a document.body-hoz

const tableView = new TableView("table", headerArray, manager); // példányosítjuk a table-t
tableView.appendTo(document.body); // hozzáfüzzük a tablet a document.body-hoz
navbar.addViewElement("Táblázat", tableView); // hozzáadjuk a formcontrollert az tablehez

const formView = new FormView("tableform", formFields, manager); // példányosítjuk a formot
formView.appendTo(document.body); // hozzáfüzzük a formot a document.body-hoz
navbar.addViewElement("Form", formView); // hozzáadjuk a formcontrollert az formhoz

const importExport = new ImportView("importexport", manager); // példányosítjuk az importexportot
importExport.appendTo(document.body); // hozzáfüzzük a importexport-t a document.body-hoz
navbar.addViewElement("Export/Import", importExport); // hozzáadjuk a formcontrollert az importexporthoz

navbar.activate("table"); // meghívjuk a navbar activate metódusát a table azonosítójával