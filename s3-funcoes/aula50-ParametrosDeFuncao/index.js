
// // arguments sustenta todos os argumentos enviados
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// valor padrão
// function funcao(a, b = 2) {
//     console.log(a + b);
// }
// funcao(2);

// Atribuição por desestruturação
// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({ nome: 'Matheus', sobrenome: 'Figueiredo', idade: 24});

// rest operator
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);

// O arguments não está disponível para as arrow function
