// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link =>{
  link.addEventListener('click', adicionarAtivo) 
}) 

function adicionarAtivo(event) {  
  event.preventDefault()
  linksInternos.forEach((item) => {
    item.classList.remove('ativo')
  }) 
  return this.classList.add('ativo')
}



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosDoBody = document.body;

elementosDoBody.addEventListener('click', handleClick);

function handleClick(event) {
// event.target.remove()
console.log(event.target)
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keydown', handleKeyboard);
function handleKeyboard(event){
if (event.key === 't') {
  document.body.classList.toggle('aumenta-fonte')
}
}