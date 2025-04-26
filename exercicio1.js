const res1 = document.getElementById("res1")
const alunos = ["Ana", "Carlos", "Bianca", "João", "Marcos", "Fernanda"];
let resultado1 ="";
for (let i = 0; i < alunos.length; i++) {
    if(alunos[i] === "João")
        break;
    resultado1 += alunos[i] + " ";
}
res1.innerHTML = resultado1;
console.log(resultado1);