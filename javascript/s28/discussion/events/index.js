const clickButton = document.querySelector('#clicker');
const getInput = document.querySelector('#inputExample');


/*clickButton.addEventListener('click', function(){
	// console.log('Button clicked');
	alert('Button clicked');
})*/
//the same as shorthand below
clickButton.addEventListener('click', () => {
	// console.log('Button clicked');
	alert('Button clicked');
})


getInput.addEventListener('input', (event) => {
	console.log(`Input value changed ${event.target.value}`)
})
