/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from './functions.js' 
 */
import {Manager} from './manager.js'
import data from './data.json' with{type:"json"}
import { Table } from './table.js';
import { formController } from './form.js';

const manager = new Manager();
const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow((tbody,elem)=>{
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    createTAbleTD(elem.neve,tr)
    createTAbleTD(elem.kor,tr)  
    const td = createTAbleTD(elem.szerelme1,tr) 
    if(elem.szerelme2){
        createTAbleTD(elem.szerelme2,tr)
    }else{
        td.colSpan=2
    }
})
for(const d of data.colspanDataArr){
    manager.addElement(d)
}
/**
 * @param {string} celltxt 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function createTAbleTD(celltxt,parentRow){
    const td = document.createElement('td')
    td.innerText=celltxt
    parentRow.appendChild(td)
    return td
}

/**
 * @param {HTMLTableSectionElement} tbody
 * @param {RowspanType} elem
 */
const renderTbodyRowspan = (tbody, elem)=>{
    const tr = document.createElement("tr");
    tbody.appendChild("tr");
 
    const td1 = document.createElement("td");
    td1.innerText = elem.neve;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = elem.kor;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = elem.szerelme1;
    tr.appendChild(td3);

    if(elem.szerelme2)
    {
        td3.rowSpan = "2";

        const td4 = document.createElement("td");
        td4.innerText = elem.szerelme2;
        tr.appendChild(td4);
    }
}

const form = new formController(data.colspanFormFieldList, manager);