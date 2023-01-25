export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  
  if (botaoAbrir && botaoFechar && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function handleClickOutside(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", handleClickOutside);
  }
}

// Para lembrar: o this, no contexto da função de callback, faz referência ao elemento que está sendo observado.
