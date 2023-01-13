export default function initTolltip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  const handleMouseMove = {
    handleEvent(element) {
      this.tooltipBox.style.top = element.pageY + 20 + "px";
      this.tooltipBox.style.left = element.pageX + 20 + "px";
    },
  };

  function handleMouseOver() {
    createTooltip(this);
    this.addEventListener("mouseout", handleMouseOut);
  }

  function handleMouseOut() {
    this.removeEventListener('mousemove',handleMouseMove)
    this.removeEventListener("mouseout", handleMouseOut);
    handleMouseMove.tooltipBox.remove();
  }

  function createTooltip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.innerText = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    document.body.appendChild(tooltipBox);
    handleMouseMove.tooltipBox = tooltipBox;
    element.addEventListener("mousemove", handleMouseMove);
  }

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", handleMouseOver);
  });
}
