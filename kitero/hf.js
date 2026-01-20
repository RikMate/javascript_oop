class Tanyer
{
    constructor (color, size)
    {
        this.color = color;
        this.size = size;
    }
}

function Pohar(color)
{
    this.color = color;
}

const tanyer1 = new Tanyer("blue", "small");
const tanyer2 = new Tanyer("red", "small");
const tanyer3 = new Tanyer("green", "big");
const pohar = new Pohar("black");

console.log(tanyer1);
console.log(tanyer2);
console.log(tanyer3);
console.log(pohar);