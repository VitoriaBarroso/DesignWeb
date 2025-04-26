const res2 = document.getElementById("res2");
const numeros = [10, 20, 35, 48, 51, 60, 70];
const maior = "";
const ul = document.createElement("ul");
let i = 0;

while (i < numeros.length) {
    if (numeros[i] > 50) break;

    const li = document.createElement("li");
    li.textContent = numeros[i];
    ul.appendChild(li);

    i++;
}

res2.appendChild(ul);
console.log(maior);

