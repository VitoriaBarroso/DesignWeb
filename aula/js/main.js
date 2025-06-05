// console.log("Inicio do Codigo")

// // settimeout executa dps de um timer 1p timer 2p função
// setTimeout(() => {
//     console.log("fim") // funcao que recebe outra e o parametro dela
// }, 1000)

// console.log("O que vai acontecer ?.")

// main  do html para dentro de um container
const container = document.getElementById("app")


// promise caso 1 requisição externa ex: CEP //
async function buscaDados(cep) {
    // define que a funcao é assincrona
    const endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // usa cep corretamente
    const dados = await endereco.json(); // espera a resposta
    console.log(dados); // exibe os dados
}

// mostrar um json externo na raiz

async function dadosLocais() {
    const nome = await fetch(`http://127.0.0.1:5500/dados.json`)
    const dados = await nome.json()
        // console.log(dados)
    const ul = document.createElement("ul")
    dados.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = `Nome; ${item.nome} - Idade: ${item.idade}`
        ul.appendChild(li)
    });
    container.appendChild(ul)
}

dadosLocais()
buscaDados(`01001000`); // Chama a função corretamente