// Closure é a habilidade que a função tem de acessar o seu espoco lexico

function retornaFuncao(nome) {
  return function (){
    return nome;
  };
}

const funcao = retornaFuncao('Joao');
const funcao2 = retornaFuncao('Luis');
console.log(funcao(), funcao2());

// funcao vai ter sempre o nome sendo 'Joao' e funcao2 será 'Luis'
