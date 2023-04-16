import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector("[name ='delay']");
const inputStepEl = document.querySelector("[name ='step']");
const inputAmountEl = document.querySelector("[name ='amount']");
const btnEl = formEl.querySelector("[type ='submit']");

function onSubmit(evt) {
  evt.preventDefault();
  createPromise(inputAmountEl.value, inputDelayEl.value);
}
formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
