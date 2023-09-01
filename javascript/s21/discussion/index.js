// console.log('Hello World');

function printInput(){
	let nickname = prompt('Enter your nickname: ');
	console.log('Hi, ' + nickname + "!");
};

// printInput();

//for some cases, putting all of the processes in one function is not ideal and therefore not recommended


//PARAMETER
function printName(name){ //name here is called parameter and will exist only inside of a function //gets the value passed by the argument when the function was invoked
	console.log('My name is, ' + name + "!");
};

//ARGUMENT
//let name = prompt('Enter your name: '); //name here is variable
//printName(name); //name here is called argument //passes the value to parametere


function checkDivisibility(num){
	//let remainder = num%8;
	console.log('The remainder of ' + num + ' and 8 is ' + num%8);
	console.log('Is ' + num + ' divisible by 8: ');
	console.log(num%8 === 0)
}

checkDivisibility(64);

console.log('---------------------------------------------------------------------');


function argumentFunction(){
	console.log('This function was passed as an argument before the message was printed');
};

function Invokefunction(parameterFunction){
	// console.log(argumentFunction);
	argumentFunction();
};


Invokefunction(argumentFunction);



//MULTIPLE PARAMETERS AND ARGUMENTS
function createFullName(lastname, firstname, middlename){
	console.log(firstname + ' ' + middlename + ' ' + lastname);
};

createFullName('Dela Cruz','Juana','M.');
//providing less arguments than the expected number of parameters would result to the paramater's value being undefined
//in other languages, this will return an error stating that the expected number of arguments does not match the number of parameters

//the order of the argument is the same as the order of the parameters

console.log('------------------------------------------------------------------------');
//using alert

function showSampleAlert(name){
	alert('Hello! ' + name);
};

//owSampleAlert('my name');

function printWelcomeMessage(student1, student2){
	console.log('Welcome Back, '+ student1 + ' and ' + student2);
	console.log('Congratulations: ' + student2);
};

let student1 = prompt('Enter student 1:');
let student2 = prompt('Enter student 2: ');
printWelcomeMessage(student1, student2);

