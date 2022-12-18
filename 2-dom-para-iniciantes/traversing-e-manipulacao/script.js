// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true) 
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('dt')
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;
console.log(primeiroDd)

 // Substitua o conteúdo html de .faq pelo de .animais
const conteudoAnimais = document.querySelector('.animais')
const conteudoFaq = document.querySelector('.faq');
conteudoFaq.innerHTML = conteudoAnimais.innerHTML



