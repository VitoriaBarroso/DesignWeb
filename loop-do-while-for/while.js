const app = document.getElementById("app"); // tag inteira pelo id
const campo = document.getElementById("numero");

campo.addEventListener("keyup", (event) => {
    const numero = parseInt(event.target.value); // Certifique-se de obter um número válido

    do {
        console.log("Número inválido");
    } while (numero <= 0); // Evita loop infinito

    while (false) {
        if (numero % 2 === 0) {
            break;
        }
        console.log(numero); 

        if (numero > 678) {
            break;
        }
    }
});

// // Exemplo de loop correto:
// let numero = 100;
// while (true) {
//     numero++;
//     console.log(numero);

//     if (numero > 200) break; // Adicionando condição para evitar loop infinito
// }

///arruma aqui const app = document.getElementById("app") // tag inteira pelo id const campo = document.getElementById("numero") campo.addEventListener("keyup", (event)=>{ const numero = event.target.value do{ console.log("numero invalido") }while(numero >0) while(true){ if(numero % 2 == 0){ break } consolo.log(numero) if(numero >678){ break } } ) // let numero = 100 // while (true) { // numero++ // console.log(numero) // }