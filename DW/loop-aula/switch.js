const main = document.getElementById("app");
const formulariodia = document.getElementById("forms");

formulariodia.addEventListener("submit", (e) => {
    e.preventDefault();

    const dia = parseInt(document.getElementById("dia").value); // Converte para número
    const dia2 = 5
    let semana = "";

    switch (dia) {
        case 1:
            semana = "Domingo";
            break;
        case 2:
            semana = "Segunda-feira";
            break;
        case 3:
            semana = "Terça-feira";
            break;
        case 4:
            semana = "Quarta-feira";
            break;
        case 5:
            semana = "Quinta-feira";
            break;
        case 6:
            semana = "Sexta-feira";
            break;
        case 7:
            semana = "Sábado";
            break;
        default:
            semana = "Valor inválido. Digite um número de 1 a 7.";
    }

    main.innerHTML = semana; // Mostra o resultado na tela
});

// Outra forma //

let temperatura = "quente"; // ou feriado true, e tira os == //
let  condicao = "feriado"
let menssage;
 switch (true){
    case temperatura == "quente" && condicao == "feriado":
        menssage = "Dia de Praia";
    break

    case temperatura == "Moderado" && condicao == "feriado":
        menssage = "Bom dia para sair ao ar Livre";
    break

    case temperatura == "Frio" && condicao == "feriado":
        menssage = "Dia fresco mas ensolarado";
    break;
 }