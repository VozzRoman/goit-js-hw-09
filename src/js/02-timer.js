import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const buttonStart = document.querySelector('button[data-start]');




buttonStart.disabled = true;



const optinon = {
	isActive: false,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
			if (selectedDates[0] <= new Date()) {
				buttonStart.disabled = true;
				Notiflix.Notify.failure("Please choose a date in the future");
			} else {
				buttonStart.addEventListener('click', onClick);
				function onClick() {
					if (optinon.isActive) {
						return;
					}
					optinon.isActive = true;
						let intervalId = setInterval(() => {
						const currentTime = new Date().getTime();
						const chooseDate = new Date(selectedDates)
						const difference = chooseDate - currentTime;
						const { days, hours, minutes, seconds } = convertMs(difference)
						console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
						const dayResf = document.querySelector('span[data-days]');
						dayResf.textContent = `${days}`;
						const hoursResf = document.querySelector('span[data-hours]');
						hoursResf.textContent = `${hours}`;
						const minutesResf = document.querySelector('span[data-minutes]');
						minutesResf.textContent = `${minutes}`;
						const secondsResf = document.querySelector('span[data-seconds]');
							secondsResf.textContent = `${seconds}`;
							if (difference < 1000) {
								clearInterval(intervalId);
						}
						
						
					}, 1000);

				}

				buttonStart.disabled = false;
				
			}	
	}
	
	}	



flatpickr("#datetime-picker", optinon);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero (Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero (Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero (Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}