const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hoursDeg = (hours / 12) * 360 + 90;
  const minutesDeg = (minutes / 60) * 360 + 90;
  const secondsDeg = (seconds / 60) * 360 + 90;

  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(setDate, 1000);
