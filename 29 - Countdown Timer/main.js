const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const timeButtons = document.querySelectorAll("[data-time]");
let countdown;

function timer(seconds) {
  const now = Date.now();
  const end = now + seconds * 1000;
  clearInterval(countdown);
  displayRemainingTime(seconds);
  displayEndTime(end);

  countdown = setInterval(() => {
    const secondsRemaining = Math.round((end - Date.now()) / 1000);

    if (secondsRemaining < 0) {
      clearInterval(countdown);
      return;
    }

    displayRemainingTime(secondsRemaining);
  }, 1000);
}

function displayRemainingTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  const timeText = `${minutes}:${
    secondsRemaining < 10 ? "0" : ""
  }${secondsRemaining}`;
  timerDisplay.textContent = timeText;
  document.title = timeText;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Come back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

timeButtons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const mins = parseInt(this.minutes.value);
  this.reset();
  timer(mins * 60);
});
