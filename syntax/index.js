import { Muvelet, MuveletLetrehoz } from "./functions.js";

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const div = document.createElement("div");
const button = document.createElement("button");

input1.id = "input1";
input2.id = "input2";
button.innerText = "button";

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(div);
document.body.appendChild(button);

button.addEventListener("click", function()
{
    const s1 = Number(input1.value);
    const s2 = Number(input2.value);
    const {result} = Muvelet(s1, s2, MuveletLetrehoz("+"));
    div.innerText = result;
})

const fv = MuveletLetrehoz("+");

console.log(fv(1, 2));

