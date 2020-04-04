/*
Operadores de Comparação
> maior
>= maior ou igual
< menor
<= menor ou igual
== igualdade (checa valor)
=== igualdade estrita (checa valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

console.log(10 > 5);

console.log(10 == 10);
console.log(10 == '10');    // Aqui ta o problema de usar o ==
console.log(10 === '10');   // Deve-se usar a comparação estrita
console.log(10 != '10');    // Aqui ta o problema de usar o !=
console.log(10 !== '10');   // Deve-se usar a comparação estrita


