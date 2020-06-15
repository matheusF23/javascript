class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Os métodos ja vão automaticamente para o prototype
  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

// Como ficaria com função construtora:
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Matheus', 'Figueiredo');
const p2 = new Pessoa2('Cláudia', 'Miranda')
console.log(p1.falar());
console.log(p2.falar());
