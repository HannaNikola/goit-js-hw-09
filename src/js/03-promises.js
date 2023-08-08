import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay});
      } else {
        reject({ position, delay});
      }
    }, delay);
   
  });
  
  
};
const formElement = document.querySelector('.form');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputDelayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const buttonSubmit = document.querySelector('button');



formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = parseInt(inputAmount.value);
  const delay = parseInt(inputFirstDelay.value);
  const step = parseInt(inputDelayStep.value);

  let currentDelay = delay;

  for (let i = 1; i <= amount; i++){


    createPromise(i, currentDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    currentDelay += step;

  }


});
