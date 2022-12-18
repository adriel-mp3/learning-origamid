// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 22;
var irmaoIdade = 24;

if (minhaIdade > irmaoIdade) {
  console.log("É maior");
  }
else if (minhaIdade < irmaoIdade){
  console.log("É menor");
}
else {
  console.log("É igual")
}

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//R = O primeiro valor é 3, portanto verdadeiro
//R = O segundo valor retorna 5, pois a string é dada como sem valor, sendo assim 5 - 0 = 5
//R = O ultimo valor verdadeiro que é o 5 - 2 = 3, irá ser retornado.

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = 'Andre';
//R = True, string é um valor true, seria false se tivesse vazia

var idade = 28;
//R = True, um número é true, se fosse 0 seria falso.

var possuiDoutorado = false;
//R = False, false é false.

var empregoFuturo;
//R = False, uma váriavel que não é definida tem como retorno undefined, undefined é false.

var dinheiroNaConta = 0;
//R = False, 0 é um valor vazio sendo assim false.

console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log("O Brasil possui mais habitantes que a China.");
}
else if(brasil < china) {
  console.log("O Brasil possui menos habitantes que a China.");
}
else {
  console.log("Eles possuem a mesma quantidade de habitantes.")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//R = Com o operador && o primeiro que for falso é retornado e paramos a verificação. Sendo assim irá imprmir o valor Falso a condição é falsa.

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// R = "Gato" === "gato" é falso. A primeira verificação está falsa, mas ultilizando o operador || (ou), queremos saber qual é a verdadeira, então vamos para a próxima.
// R = (5 > 2) Verdadeiro, a condição é verdadeira então irá retornar o console.log("Gato" && "Cão");
// R = ("Gato" && "Câo") são strings e ambas são verdadeiras, sendo assim retornará o ultimo valor true que neste caso é Cão.