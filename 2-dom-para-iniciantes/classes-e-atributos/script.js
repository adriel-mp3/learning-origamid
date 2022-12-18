// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a')
menu.forEach((item) =>{
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo')
  return menu[0].classList.add('ativo')
}) 
 
// Verifique se as imagens possuem o atributo alt
const imagens = document.getElementsByTagName('img');
console.log(imagens);
const imagensArray = Array.from(imagens);
imagensArray.forEach((item,index) =>{
  console.log(item.hasAttribute('alt'), index);
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href',"www.google.com")  

