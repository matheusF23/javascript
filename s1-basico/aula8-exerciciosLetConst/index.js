const nome = "Matheus";
const sobrenome = "Figueiredo Silva";
const idade = 24;
const peso = 70;
const altura = 1.70;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2020 - idade;

/*
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,
    'kg, tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);*/

/*console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso +
    ' kg, tem ' + altura + ' de altura e seu IMC é de ' + imc);*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);
