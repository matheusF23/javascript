function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
  })  // O then é executado sempre que a função resolve() é chamada.
  .then(resposta => {
    console.log(resposta);
    return esperaAi(1234, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela.');
  })
  .catch(e => {
    console.log('ERRO:', e)
  });  // O catch é executado sempre que a função reject() é chamada.

console.log('Isso aqui será exibido antes de qualquer promise')
// Porque as promises são exibidas em paralelo