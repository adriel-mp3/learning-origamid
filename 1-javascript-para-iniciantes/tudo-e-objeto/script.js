// nomeie 3 propriedades ou métodos de strings
var nome = "Adriel";
console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.replace("iel", "y"));
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
console.log(btn.className);
console.log(btn.innerText);
btn.classList.add("ativo");
btn.addEventListener("click",
function(){
console.log("Clicou");
})


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// addEventListener('copy', (event) => { });

// oncopy = (event) => { };