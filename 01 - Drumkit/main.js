function playSound(e) {
  /** @type {HTMLAudioElement} */
  const audio = this.document.querySelector(
    `audio[data-key=${e.key.toLowerCase()}]`
  );

  if (!audio) return;

  /** @type {HTMLDivElement} */
  const key = this.document.querySelector(
    `.key[data-key=${e.key.toLowerCase()}]`
  );

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

/**
 * @param {TransitionEvent} e
 */
function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
