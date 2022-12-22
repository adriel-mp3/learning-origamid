// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");
const paragrafosReduce = Array.prototype.reduce.call(paragrafos,(acumulador, item)=> {
return acumulador + item.innerHTML.length;  
},0)
console.log(paragrafosReduce);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newElements(tag,classe,conteudo) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? element.innerHTML = conteudo : null;
  return element;
}
console.log(newElements('h1','titulo','conteudo'))
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newFunction = newElements.bind(null,'h1','titulo')
console.log(newFunction('dinamic'))
