import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let timerId;
startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());

    if (selectedDates[0].getTime() - options.defaultDate.getTime() > 0) {
      startBtn.removeAttribute('disabled', true);
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(inputDate, options);

console.dir(inputDate);

const onStartBtnClick = () => {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    if (1681471457000 - Date.now() < 0) {
      clearInterval(timerId);
    } else {
      convertMs(1681471457000 - Date.now());
    }
    console.log(1681471457000 - Date.now());
  }, 1000);
};
startBtn.addEventListener('click', onStartBtnClick);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  daysEl.textContent = addLeadingZero(days);

  const hours = Math.floor((ms % day) / hour);
  hoursEl.textContent = addLeadingZero(hours);

  const minutes = Math.floor(((ms % day) % hour) / minute);
  minutesEl.textContent = addLeadingZero(minutes);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  secondsEl.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
