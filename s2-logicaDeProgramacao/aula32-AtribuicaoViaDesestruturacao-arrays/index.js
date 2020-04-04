
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// // const [um, dois, tres, ...resto] = numeros;     // ... rest, ... spread
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[,[,,seis]] = numeros;
console.log(seis);
