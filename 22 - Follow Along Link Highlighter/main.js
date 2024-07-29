const triggers = document.querySelectorAll("a");
const highlightPill = document.createElement("span");
highlightPill.classList.add("highlight");
document.body.append(highlightPill);

function highlightLink(e) {
  const linkCoords = this.getBoundingClientRect();
  const hlCoords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlightPill.style.width = `${hlCoords.width}px`;
  highlightPill.style.height = `${hlCoords.height}px`;
  highlightPill.style.transform = `translate(${hlCoords.left}px, ${hlCoords.top}px)`;
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", highlightLink)
);
