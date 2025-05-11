const btnSomaArray = document.querySelector("#btnSomaArray");
const inputSomaArray = document.querySelector("#arraySoma");
const resultadoSoma = document.querySelector("#resultadoSoma")
// numeros pares
const btnPares = document.querySelector("#btnParesArray");
const inputPares = document.querySelector("#arrayPares");
const resultadoPares = document.querySelector("#resultadoPares")

// maior numero
const btnMaior = document.querySelector("#btnMaiorArray");
const inputMaior = document.querySelector("#arrayMaior");
const resultadoMaior = document.querySelector("#resultadoMaior")


btnSomaArray.addEventListener("click", () => {
    const numeros = inputSomaArray.value.split(",").map(Number); // array numerico para casos de virgula (pesquisei para fazer assim !! :))
    const soma = somaArray(numeros);
    resultadoSoma.innerHTML = `A soma dos números é: ${soma}`;
})

function somaArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total
}

// numeros pares 
 btnPares.addEventListener("click", () => {
    const numeros = inputPares.value.split(",").map(Number);
    const pares = filtrarPares(numeros)
    resultadoPares.innerHTML = `Os números pares são: ${pares.join(", ") || "nenhum"}`;   
 })
 function filtrarPares(array) {
    const pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i])
        }
    }
    return pares
 }

btnMaior.addEventListener("click", () => {
    const numeros = inputMaior.value.split(",").map(Number);
    const maior = encontrarMaior(numeros)
     resultadoMaior.innerHTML = maior !== undefined ? `Maior número: ${maior}` : "Array vazio"
})

function encontrarMaior(array) {
    if(array.length === 0) return undefined
        let maior = array[0]
        for(let i = 1; i < array.length; i++) {
            if(array[i] > maior) {
                maior = array[i]
            }
        }
        return maior
    }
