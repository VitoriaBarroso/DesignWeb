// Objeto é uma coleção de prioridades dados e metodos (ações)
const pessoa = {
    nome: "Taylor Swift",
    idade: 33,
    profissao: "Cantora",
    cidade: "Nashville",
    estado: "Tennessee",
    falar: function() {
        console.log(`Oi, meu nome é ${this.nome} e eu sou uma ${this.profissao}.`);
    },
}

let taylor = {
    nome: "Taylor Swift",
    idade: 33,
    profissao: "Cantora",
};

pessoa.falar();