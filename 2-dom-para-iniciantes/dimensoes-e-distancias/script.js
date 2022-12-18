// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens



window.onload = function() {
  console.log("page is fully loaded");
  somaImagens();
};

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem)=> {
    soma += imagem.offsetWidth; 
    })
    console.log(soma);
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item,index) =>{
  if (item.offsetWidth >= 48 && item.offsetHeight >= 48) {
    console.log('Está no padrão.',index)
  }
  else {
    console.log('Não está no padrão',index)
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserWidth = window.matchMedia('(max-width: 720px)')
const menu = document.querySelector('.menu');
if (browserWidth.matches === true) {
menu.classList.add('ativo');
}