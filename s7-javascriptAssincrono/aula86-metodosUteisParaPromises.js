function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof (msg) !== 'string') {
      reject('BAD VALUE');
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  // esperaAi(1000, 1000),
  // 'Outro valor'
]

// Promise.all(promises)  // Resolve todas as promises e retorna
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro)
//   });

// Promise.race(promises)  // Retorna a primeira promise que resolver
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro)
//   });

function baixaPagina(){
  const emCache = true;

  if(emCache){
    return Promise.resolve('Pagina em cache');
  }
  return esperaAi('Baixei a página', 3000);
  // return Promise.reject('ERRO')
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));
