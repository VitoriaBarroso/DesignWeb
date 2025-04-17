const container = document.getElementById("app")
const formulario = document.getElementById("form-nota")
formulario.addEventListener("submit", (e)=>{
e.preventDefault()


const nota = document.getElementById("nota").value
const falta = document.getElementById("falta").value

if (nota >= 7 && falta <= 20){
    container.innerHTML = "Aprovado!"
}else{
    container.innerHTML = "Reprovado"
}

})