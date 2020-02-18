
// Objeto literal:
// const pessoa1 = {
//     nome: 'Luíz',
//     sobrenome: 'Miranda',
//     idade: 25,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
// console.log(pessoa1);

// function criaPessoa (nome, sobrenome, idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// Pode-se diminuir:

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);

const pessoa1 = {
    nome: 'Luíz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {        // Pode-se passar métodos
        console.log(`A minha idade é ${this.idade}.`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
