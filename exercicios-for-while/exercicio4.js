const res4 = document.getElementById('res4');
const valores = [10, 20, 30, 25, 15, 10, 5];
let i4 = "0";
let soma = 0;
while(i4 < valores.length) {
    soma += valores[i4];
    if(soma > 100)
        break;
    i4++;
}
res4.innerHTML = soma;
console.log(soma);