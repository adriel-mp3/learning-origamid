// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
console.log(cor, marca, portas);
}
// O código estava declarado como var em vez de cor, as váriaveis declaradas com const e let so podem serem acessadas dentro do bloco que foram criadas. 

// Como corrigir o erro abaixo?
//o valor dois foi declarado dentro da função sendo assim inacessável pela outra função.
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
const dois = 2;
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
