const slider = document.querySelector(".items");
let isClicked = false;
let startX;
let scrollLeft;

function calculateWalk(pageX) {
  const x = pageX - slider.offsetLeft;
  return x - startX;
}

slider.addEventListener("mousedown", (e) => {
  isClicked = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.classList.add("active");
});

slider.addEventListener("mouseleave", () => {
  isClicked = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isClicked = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  e.preventDefault();

  if (!isClicked) return;

  slider.scrollLeft = scrollLeft - calculateWalk(e.pageX);
});
