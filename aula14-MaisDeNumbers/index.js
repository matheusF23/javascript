let num1 = 1;
let num2 = 2.5;

//console.log(num1.toString() + num2);
//console.log(typeof num1);

let num3 = 10;
//console.log(num3.toString(2));  // Representação binária
let num4 = 19.3423545345345;
//console.log(num4.toFixed(2));   // Limita a duas casas decimais

//console.log(Number.isInteger(num1));    // Verifica se o número é inteiro
//console.log(Number.isInteger(num4));

let temp = num1 * "Olá";
// console.log(Number.isNaN(temp));    // Retorna True se a conta for inválida

// Há uma certa imprecisão nas contas...
let num5 = 0.7;
let num6 = 0.1;
// console.log(num5 + num6);   // imprecisão .. 0.799999

// num5 += num6;   // 0.8
// num5 += num6;   // 0.9
// num5 += num6;   // 1.0

// num5 = parseFloat(num5.toFixed(2));
// console.log(num5);  // Melhora a imprecisão
// console.log(Number.isInteger(num5));

// outra forma de solucionar
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.8
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.9
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 1.0
console.log(num5);
console.log(Number.isInteger(num5));
