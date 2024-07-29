const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let prevHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const hole = holes[Math.floor(Math.random() * holes.length)];

  if (hole === prevHole) return randomHole(holes);

  prevHole = hole;
  return hole;
}

function peekMole() {
  const duration = randomTime(400, 1000);
  const hole = randomHole(holes);

  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peekMole();
  }, duration);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;

  peekMole();

  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;

  score++;
  scoreBoard.textContent = score;

  this.parentNode.classList.remove("up");
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
