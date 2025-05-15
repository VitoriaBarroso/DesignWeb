// global code mandar para o js para uma manuntenção mais dinamica 
// colocando no js que refelte nas duas paginas ao mesmo tempo
const navbar = document.querySelector("#navbar")
navbar.innerHTML = `
        <nav>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="sobre.html">Sobre</a>
                </li>
                <li>
                    <a href="contato.html">Contato</a>
                </li>
            </ul>
        </nav>
`

// global code
if (location.pathname === "/index.html") {
    const mainpainel = document.querySelector("#exibir")
    const lista = document.createElement("ul") // funcao ou metodo que retorna algo especifico

    const lista_de_frutas = [
            { "nome": "banana", "preço": 3.50 },
            { "nome": "abacate", "preço": 7.50 },
            { "nome": "uva", "preço": 13 },
            { "nome": "maça", "preço": 20 }
        ]
        //array repetição CALLBACK UMA FUNCAO QUE É COLOCADA DENTRO DE OUTRA //

    // for (item of lista_de_frutas) {
    //     console.log(item)
    // }

    lista_de_frutas.forEach((item) => {
        // console.log(item) //
        const listagem = document.createElement("li")
        listagem.innerHTML = `
        Nome do produto: $ { item.nome }
        Preço do produto: $ { item.preço }
        `
        lista.appendChild(listagem)
    })

    // elemento exibir #####
    mainpainel.appendChild(lista)
}