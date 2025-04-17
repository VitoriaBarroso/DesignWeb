const container = document.getElementById("app")

const carrinho = [ //array + objeto
    {livro: "Harry Potter", preco: 30.00, autores: ["J.K. Rowling"]},
    {livro: "O Senhor dos Anéis", preco: 50.00, autores: ["J.R.R. Tolkien"]},
    {livro: "O Hobbit", preco: 25.00, autores: ["J.R.R. Tolkien"]},
]

container.innerHTML = `livro :${carrinho[0].livro} preco :${carrinho[0].preco} <br>
                        livro :${carrinho[1].livro} preco :${carrinho[1].preco} <br>
                        livro :${carrinho[2].livro} preco :${carrinho[2].preco} <br>
                    `
console.log(carrinho[1]["livro"]) // javaScript
console.log(carrinho[0].livro)