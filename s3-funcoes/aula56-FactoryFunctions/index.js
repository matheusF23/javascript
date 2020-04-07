function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala(assunto = 'falando sobre NADA') {
      return `${nome} está ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    // getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc);
console.log(p1.nome);
console.log(p1.sobrenome);
p1.nomeCompleto = 'Maria Oliveira SIlva';
console.log(p1.nome);
console.log(p1.sobrenome);
