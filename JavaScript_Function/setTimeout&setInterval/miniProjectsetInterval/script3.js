const body = document.body;
const button = document.querySelector("button");

const setIntervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(setIntervalId);
  button.textContent = body.style.backgroundColor;
});
