// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const body = document.body;

// function bodyBlue() {
//   body.style.background = 'blue';
// }

// function bodyRed() {
//   body.style.background = 'red';
// }

// setInterval(bodyBlue,2000)
// setInterval(bodyRed,4000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector("h1");
let i = 0;
let counter;

function start() {
  counter = setInterval(() => {
    display.innerText = i;
    i++;
  }, 1000);
}

function pause() {
  clearInterval(counter);
}

function reset() {
  display.innerText = 0;
  i = 0;
  clearInterval(counter);
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
pauseBtn.addEventListener("dblclick", reset);
resetBtn.addEventListener("click", reset);
