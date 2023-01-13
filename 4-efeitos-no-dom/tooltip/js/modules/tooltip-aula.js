export default function initTooltip() {

};

const tooltips = document.querySelectorAll('[data-tooltip]');

function onMouseOver(event) {
   const tooltipBox = criarTooltipBox(this);
   tooltipBox.style.top = event.pageY + 'px';
   tooltipBox.style.left = event.pageX + 'px';
   //Adicionar a propiedade, que aponta para o elemento criado, assim podemos acessar ele fora do escopo.
   onMouseLeave.tooltipBox = tooltipBox;
   onMouseMove.tooltipBox = tooltipBox;
   // Adicionar a propiedade, element que está apontando para o que está sendo observado no contexto do callback.
   onMouseLeave.element = this;
  // Posso passar um objeto, como callback. Para ser valido preciso adicionar a função handleEvent.
   this.addEventListener('mouseleave', onMouseLeave);
   this.addEventListener('mousemove', onMouseMove);
};
 
const onMouseLeave = {
  handleEvent(){
    this.tooltipBox.remove();
    //Para otimização dos eventos, irei remover o mouseleave.
    this.element.removeEventListener('mouseleave',onMouseLeave);
  }
}

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 15 +'px';
    this.tooltipBox.style.left = event.pageX + 15 +'px';
  }
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const tooltipText = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = tooltipText; 
  document.body.appendChild(tooltipBox);
  return tooltipBox
};

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver)
});