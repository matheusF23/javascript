/*
Javascript é baseado em protótipos para passar propriedades e métodos 
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela 
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor 
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	// this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

/*
com o prototype melhora a performance do código, porque não estaremos
repetindo alocação de recursos para cada instância. Por exemplo, se 
deixássemos a funão nomeCompleto dentro da função construtora, cada 
instancia de Pessoa teria que alocar espaço pra esesa função. Já com 
o prototype, essa função fica como molde e cada instância de Pessoa 
usa ela. Assim ela só alocará espaço uma vez.

*/
Pessoa.prototype.nomeCompleto = function() {
	return this.nome + ' ' + this.sobrenome;
}
const pessoa1 = new Pessoa('Matheus', 'Figueiredo'); // <- Pessoa = Função construtora

console.log(pessoa1.nomeCompleto())

