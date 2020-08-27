const nome = 'Matheus';
const sobrenome = 'Figueiredo';
export const idade = 24;  // pode ser exportado individualmente
function soma(x, y) {
  return x + y;
}

export { nome, sobrenome as sobrenome2, soma };
