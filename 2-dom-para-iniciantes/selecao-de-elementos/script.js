// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName('img');
// Retorne no console apenas as imagens que começaram com a palavra imagem
const somenteImg = document.querySelectorAll('[src^="./img/imagem"]')
console.log(somenteImg)
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const animaisPrimeiroTitulo = document.querySelector('.animais-descricao h2');
console.log(animaisPrimeiroTitulo.innerHTML)
// Selecione o último p do site
const ultimoParagrafo = document.querySelector('footer p');
console.log(ultimoParagrafo.innerHTML);

// Outra forma
const todosParagrafos = document.querySelectorAll('p');
console.log(todosParagrafos[--todosParagrafos.length].innerHTML);


