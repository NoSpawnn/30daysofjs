const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");

/**
 *
 * @param {HTMLElement} elem
 * @param {number} degrees
 */
function rotate(elem, degrees) {
  elem.style.transform = `rotate(${degrees}deg)`;
}

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondsDeg = (second / 60) * 360 + 90;
  rotate(secondsHand, secondsDeg);

  const minute = now.getMinutes();
  const minutesDeg = (minute / 60) * 360 + (second / 60) * 6 + 90;
  rotate(minutesHand, minutesDeg);

  const hour = now.getHours();
  const hoursDeg = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  rotate(hoursHand, hoursDeg);
}

setInterval(setDate, 1000);

// Call immediately on page load
setDate();
