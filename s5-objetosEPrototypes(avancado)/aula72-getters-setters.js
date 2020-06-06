// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	let estoquePrivado = estoque;

	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		// value: estoque,
		// writable: true,
		configurable: true,
		get: function() {
			return estoquePrivado;
		},
		set: function(valor) {
			if (typeof valor !== 'number') {
				throw new TypeError('Mensagem');
			}

			estoquePrivado = valor;
		}
	});
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);

p1.estoque = 50;
console.log(p1.estoque);

