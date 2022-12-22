// Crie uma função que verifique
// corretamente o tipo de dado
function verificaDado(dado) {
return console.log(Object.prototype.toString.call(dado))
} 
verificaDado([]) // Array


// Crie um objeto quadrado com a propriedade lados  
const quadrado = {
  lados:4,
};

// e torne ela imutável 
Object.defineProperties(quadrado, {
  lados: {
    // pode deletar e mudar de valor? = true or false (Por padrão é false)
    configurable:false,
    // pode mudar de valor? = true or false (Por padrão é false)
    writable:false, 
  }
})
quadrado.lados = 5; //Não vai mudar pois o objeto está configurado para não ser reatribuido valor.

console.log(quadrado.lados) // 4

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);

configuracao.width = 'oi'; // Não irá adicionar devido o metodo do construtor Object.freeze.
console.log(configuracao) // objeto não teve nenhuma alteração.

// Para verificar se o objeto é mutavel:
console.log(Object.freeze(configuracao)); // true = este objeto não permite alterações por isso não conseguimos reatribuir o valor.

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))
