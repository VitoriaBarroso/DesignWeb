const res5 = document.getElementById("res5");
const frutas = ["maçã", "laranja", "uva", "pera",];
let encontrou = false;
let resultado5 = "";
for(let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "banana") {
        console.log("Fruta encontrada!: Banana");
        encontrou = true;
        break;
    }
}

res5.innerHTML = resultado5;
console.log(resultado5);