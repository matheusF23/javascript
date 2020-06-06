// defineProperty - defineProperties
function Produto(nome, preco, estoque) {

	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		value: estoque, // valor
		writable: false, // habilita/desabilita alteração do valor
		configurable: true // habilita/desabilita apagar ou reconfigurar
	});

	Object.defineProperties(this, {
		nome: {
			enumerable: true, // mostra a chave
			value: nome, // valor
			writable: true, // habilita/desabilita alteração do valor
			configurable: true // habilita/desabilita apagar ou reconfigurar
		},
		preco : {	
			enumerable: true, // mostra a chave
			value: preco, // valor
			writable: true, // habilita/desabilita alteração do valor
			configurable: true // habilita/desabilita apagar ou reconfigurar
		},
	});
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
// console.log(Object.keys(p1));

