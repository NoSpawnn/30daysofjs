const player = document.querySelector(".player");

/** @type {HTMLVideoElement} */
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

/** @type {HTMLButtonElement} */
const toggle = player.querySelector(".toggle");

/** @type {HTMLButtonElement} */
const skipButtons = player.querySelectorAll("[data-skip]");

/** @type {HTMLInputElement} */
const ranges = player.querySelectorAll(".player__slider");

/** @type {HTMLButtonElement} */
const fullscreenButton = player.querySelector(".fullscreen");

let mouseDown = false;

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateToggle() {
  toggle.innerHTML = this.paused ? "►" : "❚ ❚";
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

/**
 * @param {MouseEvent} e
 */
function scrub(e) {
  if (!mouseDown) return;
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function fullscreenVideo() {
  if (player.requestFullScreen) {
    player.requestFullScreen();
  } else if (player.webkitRequestFullScreen) {
    player.webkitRequestFullScreen();
  } else if (player.mozRequestFullScreen) {
    player.mozRequestFullScreen();
  }
}

toggle.addEventListener("click", togglePlay);

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggle);
video.addEventListener("pause", updateToggle);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((slider) => slider.addEventListener("change", rangeUpdate));

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));

fullscreenButton.addEventListener("click", fullscreenVideo);
