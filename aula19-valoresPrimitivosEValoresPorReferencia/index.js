/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol). Valores copiados

Referência (mutáveis) - array, object, function. Passados por referência
*/

// let nome = 'Luiz';
// nome[0] = 'R';  // não altera
// console.log(nome);


// let a = 'A';
// let b = a;  // Cópia

// console.log(a, b);

// a = 'outra coisa';
// console.log(a, b);


// let a = [1, 2, 3];
// let b = a;  // b aponta para o mesmo local na memória que a
// console.log(a,b);

// a.push(4);
// console.log(a, b);  // b também é mudado.

// b.pop();
// console.log(b, a);  // a também é mudado

// let c = [...a];     // forma de copiar o valor de a e não passar por referência..assim c é independente de a
// console.log(c, a);
// a.push(4);
// console.log(c, a);
// c.pop();
// console.log(c, a);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = a;    // b aponta para o mesmo local que a

a.nome = 'João';
console.log(b);

const c = {...a};   // forma de copiar o valor de a. c é independente de a.
a.nome = 'Luíz';
console.log(c, a);
