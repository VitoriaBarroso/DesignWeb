const container = document.getElementById("app")
const formulario = document.getElementById("formx")
formulario.addEventListener("submit", (e)=>{
e.preventDefault()
const idade = document.getElementById("idade").value
const acompanhado = document.getElementById("acompanhado").value

// somente 3 if else por codigo //
if(acompanhado !== "sim" && acompanhado !== "nao" ){
    alert("Valor no campo acompanhamento invalido")
    return false //para o codigo
}

if(idade >= 18 && idade <= 30){   // condição se(if) maior ou igual entra se não(else) vai embora
    container.innerHTML = "pode Entrar na area livre"

}else if(idade >30 && acompanhado == "sim"){
    container.innerHTML = "Pode entrar na area master!"
}else{
    container.innerHTML = "Não pode Entrar!"
}
})

