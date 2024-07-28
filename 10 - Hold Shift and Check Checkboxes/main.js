const boxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;

function check(e) {
  let betweenShift = false;

  if (e.shiftKey && this.checked) {
    boxes.forEach((box) => {
      if (box === this || box === lastChecked) betweenShift = !betweenShift;
      if (betweenShift) box.checked = true;
    });
  }

  lastChecked = this;
}

boxes.forEach((elem) => {
  elem.addEventListener("click", check);
});
