// function criaPessoa(nome, sobrenome) {
//   const pessoaPrototype = {
//     falar() {
//       console.log(`${this.nome} está falando`);
//     },

//     comer() {
//       console.log(`${this.nome} está comendo`);
//     },

//     beber() {
//       console.log(`${this.nome} está bebendo`);
//     }
//   };

//   return Object.create(pessoaPrototype, {
//     nome: { value: nome },
//     sobrenome: { value: sobrenome }
//   });
// }

// ---------------------------------------------------- //

// Desacoplamento
// Composição
const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Matheus', 'Figueiredo');
console.log(p1.beber());
