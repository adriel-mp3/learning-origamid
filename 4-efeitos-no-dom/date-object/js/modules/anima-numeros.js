export default function initAnimaNumeros() {
  function animaNumeros() {
    const numbers = document.querySelectorAll("[data-numero]");

    numbers.forEach((number) => {
      const total = +number.innerText;
      let start = 0;
      const increment = Math.floor(total / 100);
      const counter = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          clearInterval(counter);
          number.innerText = total;
        }
      }, 25 * Math.random());
    });
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }
  observer.observe(observerTarget, { attributes: true });
}
