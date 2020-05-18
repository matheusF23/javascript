// Pode ser declarado instanciando a classe Object:
const pessoa1 = new Object();
pessoa1.nome = 'Matheus';
pessoa1.sobrenome = 'Figueiredo';
pessoa1.idade = 24;
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.getDataNascimento())

// Ou usando chaves:
const pessoa2 = {
  nome: 'Matheus',
  sobrenome: 'Figueiredo',

  falarNome: function () {
    return (`${this.nome} ${this.sobrenome}`)
  }
}

console.log(pessoa2.falarNome())

// é bom ter um molde para os objetos. Para isso tem as Factory functions e as 
// Constructor Functions

// Ex. Factory Function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  };
}
const p1 = criaPessoa('Matheus', 'Figueiredo');
console.log(p1.nomeCompleto);   // Aqui não precisa usar o () pq ta usando o 'get'

// Ex. Constructor function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Matheus', 'Figueiredo');
console.log(p2.nome);
