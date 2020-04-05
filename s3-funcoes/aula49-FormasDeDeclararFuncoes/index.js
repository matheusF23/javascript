// Declaração de função (Function hoisting). Eleva as declarações da função
function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Ou seja, as funções podem ser tratadas como dado
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
