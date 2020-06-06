
// copiar um objeto
const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = { ...produto, material: 'porcelana' } // spread operator
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// Object.freeze(produto); // produto não pode mais ser alterado

// caneca.nome = 'Caneca';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

/*
// propriedades
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // mostra as propriedades

Object.defineProperty(produto, 'nome', {
	writable: false
}) // permite alterar as propriedades

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // mostra as propriedades
*/

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

