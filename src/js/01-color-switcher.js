
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

buttonStart.addEventListener('click', getColorBtn);
buttonStop.addEventListener('click', stopColorBtn);
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};



function getColorBtn(event) {
   
    timerId = setInterval(() => {
        const newColor = getRandomHexColor();
        body.style.backgroundColor = newColor;
    }, 1000);
    buttonStart.disabled = true;
    
};

function stopColorBtn(event) {
   
    clearInterval(timerId);
    buttonStart.disabled = false;
}







