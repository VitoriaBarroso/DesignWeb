const formulario = document.querySelector("#form-calc")
const camporesultado = document.querySelector("#resultado")
const botaolimpar = document.querySelector("#limpar")
const btnMultiplicar = document.querySelector("#multiplicar")
const btnDividir = document.querySelector("#dividir")
const btnSubtrair = document.querySelector("#subtrair")
const btnSomar = document.querySelector("#somar")

const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2") // campo input  //

const nomedigitado = document.getElementById("nome")

nomedigitado.addEventListener("blur", (e)=>{
    saldacao(e.target.value)
})
btnSomar.addEventListener("click", ()=>{
    somar(Number(numero1.value), Number(numero2.value), resultado)
})
function somar(x, y, z){
    const a = x + y
    z(a)
}
function resultado(result){ // com parametros e com retorno.
    camporesultado.innerHTML = result
}





                    // arrow function não precisa de chave. // com return = função 
const subtrair = (n1 , n2)=> camporesultado.innerHTML =  n1 - n2 // declarando com variavel simples recebendo função

                // chama uma função dentro do objeto.
btnMultiplicar.addEventListener("click", ()=> {
    multiplicar(Number (numero1.value), Number(numero2.value))
    
})
btnDividir.addEventListener("click", ()=> {
    dividir(Number (numero1.value), Number(numero2.value))
    
})

// callback.
// addEventListener("" , ()) //

btnSubtrair.addEventListener("click", ()=>{
    subtrair(Number (numero1.value), Number(numero2.value))
})


// função anonima
botaolimpar.addEventListener("click", ()=>{
    limpar()
})


formulario.addEventListener("submit", (event)=>{ 
    event.preventDefault()
   
    multiplicar(numero1, numero2)
})
function multiplicar(n1, n2){ // funcção com parametros e sem retorno.
    camporesultado.innerHTML = n1 * n2
}
function dividir(n1, n2){ // funcção com parametros e sem retorno.
    camporesultado.innerHTML = n1 / n2
}
function limpar(){  // função sem parametros e sem retorno.
    camporesultado.innerHTML = ''
}


//closure // uma função dentro de outra funcão //

function saldacao(nome){
const tipo = "Sra(a)"

    function formatar(nome, tipo){
        camporesultado.innerHTML = `Olá ${tipo} ${nome}`
    }
    formatar(nome, tipo)


}

