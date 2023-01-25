export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

function handleClick(event) {
  event.preventDefault();
  this.classList.add("active");
  outsideClick(this, () => {
    this.classList.remove('active');
  });
}


function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  if(element.hasAttribute(outside)){
    element.setAttribute(outside)
    html.addEventListener("click", handleOutsideClick);
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside)
      html.removeEventListener("click", handleOutsideClick);
      callback()
    }
  }
}

dropdownMenus.forEach((menu) => {
  const userEvents = ["click", "touchstart"];
  userEvents.forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});
