const container = document.getElementById("app")
const mensagem = document.getElementById("mensagem")
const formulario = document.getElementById("formulario")

const nomecadastro = "Taylor"
const senhacadastro = "123456"

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const senha = document.getElementById("senha").value

    if (nomecadastro === nome && senhacadastro === senha) {
        container.innerHTML = "Login realizado com sucesso!"
        mensagem.innerHTML = "Bem-vindo, " + nomecadastro + "!"
    } else {
        container.innerHTML = "Login falhou!"
        mensagem.innerHTML = "Usuário ou senha incorretos!"
    }
})
