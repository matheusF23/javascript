// Método que uni o pop, shift, push e unshift
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos);

// shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// push
// nomes.splice(nomes.length, 0, 'Luís');
// console.log(nomes);

// unshift
nomes.splice(0, 0, 'Luís');
console.log(nomes);

// const removidos = nomes.splice(3, 2);
// console.log(nomes, removidos);
// ou
// const removidos = nomes.splice(-2, 2);
// console.log(nomes, removidos);

// const removidos = nomes.splice(3, 0, 'Luíz');
// console.log(nomes, removidos);
