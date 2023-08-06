import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDataTime = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const dataDayEl = document.querySelector('span[data-days]');
const dataHourEl = document.querySelector('span[data-hours]');
const dataMinuteEl = document.querySelector('span[data-minutes]');
const dateSecondsEl = document.querySelector('span[data-seconds]');


let countDownInterval = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
       
        if (selectedDates[0] <= new Date()) {
            window.alert("Please choose a date in the future");
            buttonStart.disabled = true;
        } else {
            buttonStart.disabled = false;
            addEventListener('click', countInterval)
        }
        
        console.log(selectedDates[0]);
        console.log(this.onClose);
    },
};

flatpickr(inputDataTime, options);



function convertMs(ms) {

    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function countInterval() {

    const timerId = setInterval(() => {

        const now = Date.now();
        const counter = selectedDates[0] - now;

    }, 1000)


}

