

const formRefs = document.querySelector('.js-form');
const rextArea = document.querySelector('textarea');



//Получение данные на прямую:
formRefs.addEventListener('submit',onSubmitCLick);

function onSubmitCLick(e) {
	e.preventDefault();
	console.log(e.currentTarget.delay.valueAsNumber);// получить згачение свойства в цифрах
	console.log(e.currentTarget.position.value);// получить значение свойства в символах
	console.log(e.currentTarget.text.value);
	console.log(rextArea.getAttribute('rows'));
	console.log(rextArea.getAttribute('cols'));


	let numersCells = e.currentTarget.delay.valueAsNumber
	for (let amount = 0; amount < numersCells; amount+=1) {
		console.log('количество');
		
	}


}


//Получение данные через обьект:

// formRefs.addEventListener('submit', onSubmitCLick);
// formRefs.addEventListener('input', onInputCheck);

// const dateStorage = {};

// function onInputCheck(e) {
// 	console.log(e.target.name);
// 	console.log(e.target.value);
// 	dateStorage[e.target.name] = e.target.value;
// 	console.log(dateStorage);
// }

// function onSubmitCLick() {
// 	console.log('submit');
// }




//----------Конпка запуск------------//

const formSetTime = document.querySelector('.from-set-time');
const object = document.querySelector('.oject');
formSetTime.addEventListener('submit', onSubmitSetInterval);

function onSubmitSetInterval(e) {
	e.preventDefault();
	let numberOfappear = e.currentTarget.delay.valueAsNumber * 2;
	console.log(numberOfappear);
	
	let counter = 0;
	const intervalId = setInterval(() => {
		if (numberOfappear === counter) {
			console.log('STOP');
			clearInterval(intervalId);
		} else {
		object.classList.toggle('active');
		console.log('circule');
		}
		counter += 1;
		
	}, 2000);

}



//------------PROMISES--------------//

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  value => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);