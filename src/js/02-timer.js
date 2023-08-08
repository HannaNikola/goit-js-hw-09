import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDataTime = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const dataDayEl = document.querySelector('span[data-days]');
const dataHourEl = document.querySelector('span[data-hours]');
const dataMinuteEl = document.querySelector('span[data-minutes]');
const dateSecondsEl = document.querySelector('span[data-seconds]');
let timerId;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0] <= new Date()) {
            Notiflix.Notify.warning('Please choose a date in the future');
            buttonStart.disabled = true;
        } else {
            buttonStart.disabled = false;
            buttonStart.addEventListener('click', countInterval(selectedDates[0]))
        }

        console.log("selected dates ", selectedDates[0]);
        console.log(this.onClose);
    },
};

flatpickr(inputDataTime, options)


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


function countInterval(selectedDate) {
    const timerId = setInterval(() => {
        const currentDate = Date.now();

        const diff = convertMs(selectedDate - currentDate);
        
        const currentDay = addLeadingZero(diff.days);
        const currentHour = addLeadingZero(diff.hours);
        const currentMinet = addLeadingZero(diff.minutes);
        const currentSecond = addLeadingZero(diff.seconds);

        dataDayEl.textContent = currentDay;
        dataHourEl.textContent = currentHour;
        dataMinuteEl.textContent = currentMinet;
        dateSecondsEl.textContent = currentSecond;

        if (diff.days <= 0 && diff.hours <= 0 && diff.minutes <= 0 && diff.seconds <= 0) {
            stopInterval();
            clearInterval(timerId);

           
        }
        
    }, 1000);

   
};
function stopInterval() {
    clearInterval(timerId);
    Notiflix.Notify.success('Countdown has finished!');
};

