let umaString = "Um \"texto\""; // Utiliza barra invertida como scape
console.log(umaString);

// A string é indexada
let theString = "Matheus";
console.log(theString[4]);  // Deve mostrar o 'e'

console.log(theString.charAt(4));   // Faz a mesma coisa. Após o ponto temos várias opções
console.log(theString.charCodeAt(4));   // Mostra o código do caractere na tabela ASC
console.log(theString.concat(' é ', 'legal.')); // Mais uma forma de concatenar
console.log(theString.indexOf('mat'));   // Encontra o índice onde começa a palavra passada
// Se quiser passar um índice para começar a procurar a partir dele:
console.log(theString.indexOf('s', 3));
// Para começar a pesquisar do fim para o começo:
console.log(theString.lastIndexOf('s'));
console.log(theString.lastIndexOf('u', 4)); // Retornará -1 pois não encontrará
console.log(theString.match(/[a-z]/g)); // Aceita expressões regulares, assim como o search e replace
console.log(theString.replace('theus', 'meus'));    // Substitui 'theus' por 'meus'
console.log(theString.length);  // Retorna o tamanho da string
console.log(theString.slice(2, 7));
console.log(theString.slice(-5));
console.log(umaString.split(' '));
console.log(theString.toUpperCase());   // Tudo maiúsculo
console.log(theString.toLowerCase());   // Tudo minúsculo

// Há muitos métodos para String. Pesquisar na documentação para entender melhor. mpn Javascript ou w3schools javascript, têm boas documentações.
