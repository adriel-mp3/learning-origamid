// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome,sobrenome,idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const adriel = new Pessoas('Adriel','Santos',22);
console.log(adriel.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);
// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText;//String
li.value;//Number
li.hidden;//Boolean
li.offsetLeft;//Number
li.click();//undefined --> não tem como acessar mais nada apos ele pois undefined não possui metodos e propiedades
// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String