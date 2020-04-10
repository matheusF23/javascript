// A map retorna os valores do array alterados
// sempre retorna um array com o tamanho do array original

// Dobre os valores
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const dobro = numeros.map(valor => valor * 2);

// console.log(dobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luis', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes)

// const idades = pessoas.map(obj => ({ idade: obj.idade }));
// console.log(idades);

const comIds = pessoas.map((obj, indice) => {
  // obj.id = indice + 1; // Nesse caso estaria alterando o dicionário no array pessoas.
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
})
console.log(comIds);
