function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// executa uma função em um determinado intervalo de tempo
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// Executa apenas uma vez, após um intervalo de tempo
setTimeout(function () {
    clearInterval(timer);   // Pára o timer
}, 3000);

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000);
