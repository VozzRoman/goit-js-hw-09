import Notiflix from 'notiflix';

const formRefs = document.querySelector('.form');

let dataStorage = {};

formRefs.addEventListener('input', onInput);
formRefs.addEventListener('submit', onSubmit);

function onInput(e) {
	dataStorage[e.target.name] = e.target.value;
	console.log(dataStorage)
	
}



function onSubmit(e) {
	e.preventDefault()
	let delay = Number(dataStorage.delay);
	let stepDelay = Number(dataStorage.step);
	console.log(stepDelay, delay);
	const numberOfPromises = Number(dataStorage.amount);
	for (let position = 0; position < numberOfPromises; position += 1) {
		createPromise(position, delay)
		  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  			.catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
					 });
		delay += stepDelay;
	}
	
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
		setInterval(() => {
			if (shouldResolve) {
				resolve ({ position, delay });
				resolve
			} else {
				reject({ position, delay });
				
			}
		}, delay);


	})

};
