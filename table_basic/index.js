/** 
* @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
* @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
* @typedef {{name: string, colSpan?: number}} HeaderType
* @callback call
* @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)


class Table{

    #tbody;

    get tbody() {
        return this.#tbody;
    }

    Idk(param)
    {
        param(this.#tbody);
    }

    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray) {
        this.#tbody = makeTableBodyWithHeader(tableHeaderArray);
    }

}


class ColspanTable extends Table {
    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray) {
        super(tableHeaderArray);
    }

    /**
     * @param {ColspanRowType[]} colSpanArray
     */
    render(colSpanArray) {
        renderColspanBody(this.tbody, colSpanArray);
    }
}


class RowSpanTable extends Table {
    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray) {
        super(tableHeaderArray);
    }

    /**
     * @param {RowspanRowType[]} rowSpanArray
     */
    render(rowSpanArray) {
        renderRowspanBody(this.tbody, rowSpanArray);
    }
}

colSpanTable = new ColspanTable(colspanHeaderArr);
rowSpanTable = new RowSpanTable(rowspanHeaderArr);
colSpanTable.render(colspanBodyArr);
rowSpanTable.render(rowspanBodyArr);

const button = document.createElement("button");

button.innerText = "rowspan";
button.addEventListener("click", onButtonClick.bind(rowSpanTable))
document.body.appendChild(button);
/**
 * @this {rowSpanTable} példány
 */
function onButtonClick()
{
    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd"
    }
    rowSpanTable.Idk(function(body)
    {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");

        td1.innerText = obj.author;
        td2.innerText = obj.title1;
        td3.innerText = obj.concepts1;
        td4.innerText = obj.title2;
        td5.innerText = obj.concepts2;

        body.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    })
}