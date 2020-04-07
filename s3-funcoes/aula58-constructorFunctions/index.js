// Função Construtora -> objetos
// Função fábrica -> objetos
// Construtora -> o nome da função incia em maiusculo

function Pessoa(nome, sobrenome) {
  // atributos ou métodos privados
  const id = 12345;
  const metodoInterno = function(){};

  // atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log('sou um método');
  };
}

const p1 = new Pessoa('Luíz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
