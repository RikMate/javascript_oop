/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { FormView } from "./form.js";
import { AutherManager } from "./manager.js";
import { NavigationBar } from "./navigationBar.js"
import { TableView } from "./table.js";

const formFields = [{
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

const headerArray = ['Szerző', 'Mű', 'Fogalom']

const navbar = new NavigationBar();
const manager = new AutherManager();
navbar.appendTo(document.body);

const tableView = new TableView("table", headerArray, manager);
tableView.appendTo(document.body);
navbar.addViewElement("Táblázat", tableView);

const formView = new FormView("tableform", formFields, manager);
formView.appendTo(document.body);
navbar.addViewElement("Form", formView);

//navbar.addViewElement("Export/Import", )

navbar.activate("table");