function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId;

stopBtn.setAttribute('disabled', true);

const onStartBtnClick = () => {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled', true);
  timerId = setInterval(() => {
    const colorBody = getRandomHexColor();
    bodyEl.style.backgroundColor = colorBody;
  }, 1000);
};
startBtn.addEventListener('click', onStartBtnClick);

const onStopBtnClick = () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', true);
  stopBtn.setAttribute('disabled', true);
};
stopBtn.addEventListener('click', onStopBtnClick);
