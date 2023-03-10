export default function initFuncionamento() {
  const hoje = new Date();
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  const diaAtual = hoje.getDay();
  const horaAtual = hoje.getHours();
  const horarioAberto = diasSemana.indexOf(diaAtual) !== -1;
  const diaAberto =
    horaAtual >= horarioSemana[0] && horaAtual < horarioSemana[1];
  if (horarioAberto && diaAberto) {
    funcionamento.classList.add("aberto");
  }
}
