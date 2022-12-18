// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
//Prestar atenção no enunciado!
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let total = 0;
transacoes.forEach((valor) => {
  // Podemos usar replace também.
  const newValue = +valor.valor.replace('R$','').trim();
  total += newValue
})
console.log(total);
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesToArray = transportes.split(';')
// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlSemSpan = html.split('span').join('a');
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const ultimoCaractere = frase.charAt([frase.length - 1]);
// Retorne o total de taxas
let total2 =  0;

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

transacoes2.forEach((string) => {
const stringLimpa = string.trim().toLowerCase();
stringLimpa.includes('taxa') ? total2++ : '' 
})
console.log(`O total de taxas é ${total2}`)

