const res3 = document.getElementById('res3');
const numeros3 = [7, 11, 23, 41, 18, 25, 30];
let resultado3 = "";
for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 === 0) {
        resultado3 = numeros3[i];
        break;
    }
}
res3.innerHTML = resultado3;
console.log(resultado3);