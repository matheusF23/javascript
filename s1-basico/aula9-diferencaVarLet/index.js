// Com o var é possível redeclarar uma variável
var nome = "Luiz";
console.log(nome);
var nome = "Matheus";
console.log(nome);

//nome = "Jose" // é possível. Mas não faça isso pois criará uma variável global que pode afetar outras variáveis

// Com o let não é possível redeclarar uma variável
// é bom sempre usar o let. O var pode trazer problemas