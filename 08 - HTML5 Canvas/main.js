/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("#draw");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

/**
 * @param {MouseEvent} e
 */
function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
  ctx.lineWidth += direction ? 1 : -1;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
