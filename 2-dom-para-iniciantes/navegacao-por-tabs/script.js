const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  tabMenu.forEach((imagem, index) => {
    imagem.addEventListener("click", () => {
      aoClique(index);
    });
  });
  function aoClique(index) {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
}
