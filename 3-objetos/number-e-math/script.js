// Retorne um número aleatório
// entre 1050 e 2000
const aleatorios =Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorios)
// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
Math.max(numeros)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222','R$ 230  ', 'r$  200'];
let total = 0;
listaPrecos.forEach((preco) => {
  const stringLimpa = preco.toLowerCase().replace('r$','').trim();
  const stringToNumber = parseInt(stringLimpa,10);
  total += stringToNumber
})
console.log(total);
