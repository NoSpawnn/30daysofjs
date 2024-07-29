const nodes = Array.from(document.querySelectorAll("[data-time]"));

// const totalSeconds = nodes
//   .map((node) => node.dataset.time)
//   .map((time) => {
//     const [mins, secs] = time.split(":").map(parseFloat);
//     return mins * 60 + secs;
//   })
//   .reduce((total, seconds) => total + seconds, 0);

const totalSeconds = nodes.reduce((total, node) => {
  const time = node.dataset.time;
  const [mins, secs] = time.split(":").map(parseFloat);
  return total + (mins * 60 + secs);
}, 0);

let remainingSeconds = totalSeconds;
const hours = Math.floor(remainingSeconds / 3600);
remainingSeconds %= 3600;
const minutes = Math.floor(remainingSeconds / 60);
remainingSeconds %= 60;

console.log(`${hours} hours ${minutes} minutes ${remainingSeconds} seconds`);
