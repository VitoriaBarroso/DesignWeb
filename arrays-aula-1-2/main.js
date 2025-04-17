const container = document.getElementById
const lista = ["Billie Eilish", 20, true]
console.log(lista)
console.log( typeof lista )

// + texto + variavel = concatenação
//´ xxx ${variavel} yyy = concatenação moderna 

// add itens //
lista.push("Chiriro") // final do array
lista.push("3")
lista.unshift("novo album") // inicio do array
lista.unshift("3")
console.log(lista)
lista.shift() // remove o primeiro item do array e o popemove o ultimo
lista.shift()
console.log(lista)
// exclui itens //
container.innerHTML = 
                `
                  ${ lista[0] }
                  ${ lista[1] }
                  ${ lista[2] }
                  ${ lista[3] }
                  ${ lista[4] }
                  ${ lista[5] }
                `

