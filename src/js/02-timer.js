import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let deltaTimeMs = 0;
let timerId;
startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
    deltaTimeMs = selectedDates[0].getTime() - options.defaultDate.getTime();
    console.log(deltaTimeMs);

    if (deltaTimeMs > 0) {
      startBtn.removeAttribute('disabled', true);
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(inputDate, options);

const onStartBtnClick = () => {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    convertMs(1681503539000 - options.defaultDate.getTime());
    console.log(convertMs(1681503539000 - options.defaultDate.getTime()));
  }, 1000);
};
startBtn.addEventListener('click', onStartBtnClick);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  daysEl.textContent = days;
  const hours = Math.floor((ms % day) / hour);
  hoursEl.textContent = hours;
  const minutes = Math.floor(((ms % day) % hour) / minute);
  minutesEl.textContent = minutes;
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  secondsEl.textContent = seconds;

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  console.log(value.toString().padStart(2, '0'));
}
addLeadingZero(7);
