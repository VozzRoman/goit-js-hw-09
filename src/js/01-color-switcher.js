


const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

startButton.addEventListener('click', onSrartButton);
stopButton.addEventListener('click', onStopButton);

function onSrartButton() {
	colorChenger.starColor();
	startButton.disabled = true;
	stopButton.disabled = false;
}

function onStopButton() {
	colorChenger.stopColor();
	startButton.disabled = false;
	stopButton.disabled = true;
}

const colorChenger = {
	isActive: false,
	starColor() {
		if (this.isActive) {
			return;
		}
		this.isActive = true;
		this.intervalId = setInterval(() => {
			bodyColor.style.backgroundColor = getRandomHexColor();
			console.log(bodyColor.style.backgroundColor)
	}, 1000);		
	},
	stopColor() {
		this.isActive = false;
		clearInterval(this.intervalId);
	}
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}