
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome, sobrenome, endereco: { rua: r, numero } } = pessoa;  // Atribuição via desestruturação
console.log(nome, sobrenome, r, numero);
