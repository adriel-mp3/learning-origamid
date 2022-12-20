// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
function selecionaTexto(section, seletor) {
  return section.querySelector(seletor).innerText;
}
const sections = document.querySelectorAll(".curso");
const arraySections = Array.from(sections);

const objetoCurso = arraySections.map((section) => {
  const titulo = selecionaTexto(section, "h1");
  const descricao = selecionaTexto(section, "p");
  const aulas = selecionaTexto(section, ".aulas");
  const horas = selecionaTexto(section, ".horas");
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(objetoCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiores100 = numeros.filter((num) => num > 100);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
console.log(instrumentos.some((instrumento) => instrumento === "Baixo"));

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
const valorCompras = compras.reduce((acumulador,item)=>{
  const precoItem = +item.preco.replace('R$ ','').replace(',','.');
  return acumulador + precoItem;
},0)