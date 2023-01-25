import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton && menuList) {
    function openMenu() {
      [menuButton, menuList].forEach((element) =>
        element.classList.add("active")
      );
      outsideClick(menuList, ["click", "touchstart"], () => {
        [menuButton, menuList].forEach((element) =>
          element.classList.remove("active")
        );
      });
    }
    menuButton.addEventListener("click", openMenu);
  }
}
