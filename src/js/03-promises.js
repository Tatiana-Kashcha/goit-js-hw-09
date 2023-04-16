import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector("[name ='delay']");
const inputStepEl = document.querySelector("[name ='step']");
const inputAmountEl = document.querySelector("[name ='amount']");

function onSubmit(evt) {
  evt.preventDefault();
  for (let idx = 1; idx <= inputAmountEl.value; idx += 1) {
    let delay =
      Number(inputDelayEl.value) + (idx - 1) * Number(inputStepEl.value);
    console.log(idx, delay);

    createPromise(idx, delay);
  }
}
formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res(Notify.success(`Fulfilled promise ${position} in ${delay}ms`));
      } else {
        // Reject
        rej(Notify.failure(`Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
