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
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
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
activeScrollSuave()

function activeAnimacaoAoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) section.classList.add("ativo");
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
activeAnimacaoAoScroll()
