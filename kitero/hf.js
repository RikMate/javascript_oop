//Class
class Tanyer1
{
    constructor (color, size)
    {
        this.color = color;
        this.size = size;
    }
}

class Pohar1
{
    constructor(color)
    {
        this.color = color;
    }
}

const tanyer1 = new Tanyer1("blue", "small");
const tanyer2 = new Tanyer1("red", "small");
const tanyer3 = new Tanyer1("green", "big");
const pohar1 = new Pohar1("black");

console.log(tanyer1);
console.log(tanyer2);
console.log(tanyer3);
console.log(pohar1);

//Function
function Tanyer2(color, size)
{
    this.color = color;
    this.size = size;
}

function Pohar2(color)
{
    this.color = color;
}

const tanyer4 = new Tanyer2("yellow", "big");
const tanyer5 = new Tanyer2("pink", "small");
const tanyer6 = new Tanyer2("magenta", "small");
const pohar2 = new Pohar2("orange");

console.log(tanyer4);
console.log(tanyer5);
console.log(tanyer6);
console.log(pohar2);