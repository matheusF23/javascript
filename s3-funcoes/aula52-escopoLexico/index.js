
const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}
falaNome();
// O escopo lexico refere-se a função conhecer todo o seu interno e sua vizinhança
// por isso a função falaNome() conhece a variável nome.
// Primeiro ela busca a variável no seu escopo. Caso não ache ela procura no 
// escopo global. Se a variável não existir no escopo global, dará erro.
