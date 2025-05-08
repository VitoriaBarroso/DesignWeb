//const app = document.querySelector("#app") pelo simbulo
const app = document.getElementById("app") // tag inteira pelo id

const nomes = ["Sabrina", "Vanessa", "Taylor", "Ariana"]
const ul = document.createElement("ul")
const tamanho = nomes.length - 1
const idades = [23, 33, 67, 12]

// temporaria, condicional incremento // decremento  let i = 100; i >= 10; i--
// for (let i = 0; i <= tamanho; i++) {
//     const lista = document.createElement("li")
//     lista.innerText = nomes[i]
//     ul.appendChild(lista) //add depois como filho da lista
// }

// for in pega as posiçoes
// for (const pos in nomes) {
//     const lista = document.createElement("li")
//     lista.innerText = nomes[pos]
//     ul.appendChild(lista)
// }

// for of para objetos captura item sem precisar de posição
for (const idade of idades) {
    if (idade > 99) {
        break
    }
    if (idade % 2 == 1) {
        continue
    }
    const lista = document.createElement("li")
    lista.innerText = idade
    ul.appendChild(lista)

}
app.appendChild(ul)