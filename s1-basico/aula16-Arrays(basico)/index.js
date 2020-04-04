
const alunos = ['Luiz', 'Maria', 'João'];   // Dentro dos colchetes pode colocar qualquer objeto e será um lista

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[0][0]);

alunos[0] = 'Eduardo';  // Posso editar
console.log(alunos);

alunos[3] = 'Luiza';    // Adiciona um novo elemento pois nao existe o indice 3
console.log(alunos);

console.log(alunos.length);

alunos.push('Otávio');  // Adiciona um novo elemento ao final do array.
console.log(alunos);

alunos.unshift('Matheus');  // Adiciona um elemento ao inicio do array
console.log(alunos);

// alunos.pop();   // Remove o ultimo elemento
// console.log(alunos);

// const removido = alunos.pop();  // Salva quem foi removido da lista
// console.log(removido);
// console.log(alunos);

// const removido1 = alunos.shift();  // Remove o primeiro elemento e salva na variavel
// console.log(removido1);
// console.log(alunos);

// Tirar elemento sem alterar o indice:
// delete alunos[0];
// console.log(alunos);
// console.log(alunos[0]); // Mas deixa um elemento vazio

console.log(alunos.slice(0, 3));    // Fatia o array do primeiro ate o terceiro elemento
console.log(alunos.slice(0, -1));    // Fatia o array do primeiro ate o penultimo elemento, pois tira um
console.log(typeof alunos); // é um objeto
console.log(alunos instanceof Array); // verifica se o objeto alunos é um array

