/**
 * && -> false && true -> false "Retorna o valor mesmo"
 * || ->
 * 
 * FALSY - Valores que avaliam em falso
 * false
 * 0
 * string vazia
 * null / undefined
 * NaN
*/

console.log('matheus' && 0 && 'maria'); // Retorna 0. O valor mesmo.
console.log('matheus' && true && 'maria'); // Como tudo é verdadeiro, retorna a ultima expressão

/**
 * O curto circuito ocorre no && quando é encontrado qualquer valor FALSY, então já retorna este valor. Não é feito outros testes
*/

console.log(0 || false || null || 'Luis' || true);

/**
 * O curto circuito ocorre no || quando é encontrado qualquer valor VERDADEIRO, então já retorna este valor. Não é feito outros testes
*/
