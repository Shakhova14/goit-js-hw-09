// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

 const startDate = document.querySelector('#datetime-picker');
 const startBtn = document.querySelector('button[data-start]');
 console.log(startBtn);
 const daysEl = document.querySelector('span[data-days]');
 const hoursEl = document.querySelector('span[data-hours]');
 const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let ourDate = null;

startBtn.disabled = true;
 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates)   
   {
     ourDate = selectedDates[0];
      if (ourDate <  new Date()) {
window.alert("это фиаско!!! Please choose a date in the future");

return;
      } else {
        startBtn.disabled = false;
      } 
  }   
}
 function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };

  function pad(value) {
    return String(value).padStart(2, '0');
  }
 
  function onFoundationTimer() {
    let timer = null;
   startBtn.disabled = true;
    
   timer = setInterval(() => {
     
      const endTimerTime = ourDate - Date.now();
const { days, hours, minutes, seconds } = convertMs(endTimerTime);
  daysEl.innerHTML = `${days}`;
  hoursEl.innerHTML = `${hours}`;
  minutesEl.innerHTML = `${minutes}`;
  secondsEl.innerHTML = `${seconds}`;
   console.log(`${seconds}`);

      if (endTimerTime < 1000) {
        clearInterval(timer);
        startBtn.disabled = false;
      }
    }, 1000);
  }
 startBtn.addEventListener("click", onFoundationTimer)
//   console.log(options);
  flatpickr(startDate, options);