
// function saudacao(nome) {
//     console.log(`Bom dia ${nome}!`);
// }

// saudacao('Luiz');
// saudacao('Maria');
// saudacao('Felipe');

// const variavel = saudacao('Luiz');
// console.log(variavel);  // Mostra undefined porque a funcao nao retorna nada

// function saudacao(nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Luiz');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     return x + y;
// }

// console.log(soma());
// console.log(soma(2));
// console.log(soma(2,2));

// Criando função anonima
// const raiz  = function (n){      // forma padrao
//     return n ** 0.5;
// };
// const raiz  = (n) => {   // Forma simplificada
//     return n ** 0.5;
// };
const raiz = n => n ** 0.5;      // quando temos so uma linha podemos eliminar as chaves, e quando temos só um parametro podemos eliminar os parenteses

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(2));
