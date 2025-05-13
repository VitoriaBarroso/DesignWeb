const btnSomaArray = document.querySelector("#btnSomaArray")
const inputSomaArray = document.querySelector("#arraySoma")
const resultadoSoma = document.querySelector("#resultadoSoma")
// numeros pares
const btnPares = document.querySelector("#btnParesArray")
const inputPares = document.querySelector("#arrayPares")
const resultadoPares = document.querySelector("#resultadoPares")

// maior numero
const btnMaior = document.querySelector("#btnMaiorArray")
const inputMaior = document.querySelector("#arrayMaior")
const resultadoMaior = document.querySelector("#resultadoMaior")

// fila de atendimento
const campoFila = document.querySelector("#campoFila")
const btnEntrar = document.querySelector("#btnEntrar")
const btnAtender = document.querySelector("#btnAtender")
const btnDesistir = document.querySelector("#btnDesistir")
const numeroFila = document.querySelector("#numeroFila")
const posicaoFila = document.querySelector("#posicaoFila")
const fila = [];

btnSomaArray.addEventListener("click", () => {
    const numeros = inputSomaArray.value.split(",").map(Number)
    const soma = somaArray(numeros);
    resultadoSoma.innerHTML = `A soma dos números é: ${soma}`
})

function somaArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

// numeros pares 
 btnPares.addEventListener("click", () => {
    const numeros = inputPares.value.split(",").map(Number); // array numerico para casos de virgula (pesquisei para fazer assim !! :))
    const pares = filtrarNumerosPares(numeros)
    resultadoPares.innerHTML = `Os números pares são: ${pares.join(", ") || "nenhum"}`
 })
 function filtrarNumerosPares(array) {
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

function encontrarMaior(encontrar) {
    if(encontrar.length === 0) return undefined
        let maior = encontrar[0]
        for(let i = 1; i < encontrar.length; i++) {
            if(encontrar[i] > maior) {
                maior = encontrar[i]
            }
        }
        return maior
}

// fila de atendimento // // pesquisei algumas funcoes dentro dos event listener
function mostrarFila(){
    if(fila.length === 0) {
        campoFila.innerHTML = "Fila vazia"
        return
    }
    campoFila.innerHTML = `Fila atual: ${fila.join(" - ") || "vazia"}`
}

btnEntrar.addEventListener("click", () => {
    const senha = Number(numeroFila.value)
    if(!isNaN(senha)) {
        if(senha > 65){
            fila.unshift(senha)
        }else{
            fila.push(senha)
        }
        campoFila.innerHTML = `Senha ${senha} adicionada a fila`
        mostrarFila()  
    }  
})

btnAtender.addEventListener("click", () => {
    if(fila.length > 0) {
        const atendido = fila.shift()
        posicaoFila.innerHTML = `Atendendo: ${atendido}`
    } else {
        posicaoFila.innerHTML = "Fila vazia"
    }
    mostrarFila()
})

btnDesistir.addEventListener("click", () => {
    const posicao = Number(posicaoFila.value);

    if (!isNaN(posicao) && posicao >= 0 && posicao < fila.length) {
        const desistente = fila.splice(posicao, 1)[0];
        campoFila.innerHTML = `Senha ${desistente} desistiu da fila.`;
    } else {
        campoFila.innerHTML = "Posição inválida para desistência.";
    }

    mostrarFila();
});
