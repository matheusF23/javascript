// String
const nome = 'Luiz';
const nome1 = "Luis";
const nome2 = `Luis`;

// Number
const num1 = 10;
const num2 = 10.52;

// undefined -> não aponta pra local nenhum na memória
let nomeAluno;

// null = não -> não aponta pra local nenhum na memória
let sobrenomeAluno = null;

// null != undefined
// usar o null é uma forma explicita de dizer que a variável não aponta pra nenhum local na memória

// boolean. Só tem duas possibilidades de valor: true ou false.
const aprovado = true;
const boolean = false;

// Para visualisar o tipo de uma variável utiliza a funão typeof()

console.log(typeof nome); // pode ser usado sem o parenteses
console.log(typeof(nomeAluno));
console.log(typeof sobrenomeAluno); // null é considerado um objeto..mas é um 'bug'
console.log(typeof aprovado);

// Tem ainda o symbol que será abordado mais à frente
