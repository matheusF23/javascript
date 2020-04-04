
// const data = new Date();
// console.log(data.toString());
// const data2 = new Date(2019, 3, 20, 15, 14, 27);
// console.log(data2.toString());

// const data = new Date('2019-04-20 20:15:59.100');
// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);     // O mês é contado a partir do 0. o - 11
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());    // 0 - domingo. 6 - sábado

// console.log(Date.now());
// date2 = new Date(1585960142192);
// console.log(date2);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const dia = zeroAEsquerda(data.getDate());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)
