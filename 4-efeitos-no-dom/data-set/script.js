function activeTabMenu() {
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
      const direcao = tabContent[index].dataset.anime;
      tabContent.forEach((content) => {
        content.classList.remove("ativo",direcao);
      });
      tabContent[index].classList.add("ativo",direcao);
    }
  }
}
activeTabMenu();
//Accordion list
function activeAccordionList() {
  const activeClass = "ativo";
  const faqDts = document.querySelectorAll(".js-accordion dt");
  faqDts[0].nextElementSibling.classList.add(activeClass);
  faqDts.forEach((dt) => {
    dt.addEventListener("click", accordionList);
  });
  function accordionList() {
    this.nextElementSibling.classList.toggle(activeClass);
  }
}
activeAccordionList();

function activeScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top:topo,
    //   behavior:"smooth",
    // })
  }
}
