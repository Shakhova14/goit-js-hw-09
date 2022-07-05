
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const firstDelayEl = document.querySelector('[name="delay"]');
const delayStepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');



form.addEventListener('submit', onStartPromises);

function onStartPromises(event) {

  event.preventDefault();

  let delay = firstDelayEl.valueAsNumber;
 
  for (let position = 1; position <= amountEl.valueAsNumber; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += delayStepEl.valueAsNumber;
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}