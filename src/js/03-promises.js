
const formElement = document.querySelector('.form');
const inpuFirstDelay = document.querySelector('input[name="delay"]');
const inputDelayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const buttonSubmit = document.querySelector('button');

console.log(formElement);
console.log(inpuFirstDelay);
console.log(inputDelayStep);
console.log(inputAmount);
console.log(buttonSubmit);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

