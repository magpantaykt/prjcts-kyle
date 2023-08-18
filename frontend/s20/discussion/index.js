console.log('Hello World');

//FUNCTIONS IN JAVASCRIPT


// function in JS are lblocks of code that tell our device/application to perform a certain task when called or invoked
// functions are mostly created to create complicated tasks that have several lines of code
// they are also used to prevent repeating the block of code with that perform the same features/functions

//function is the keyword in JS which is ude to define a function
//functonName is the name of the function
/* function [functionName(parameter1, parameter2)] { 
		statement;
		statement;
		statement;

		return value
	};


	let someVariable = functionName(parameter1, parameter2);
*/

function printName(){
	console.log('My name is John');
};


// printName();

declaredFunction(); //JavaSCript Hoisting //can use functions even before its declaration

function declaredFunction(){
	console.log('Hello World from declared function');
};

declaredFunction();


//Function Expression
// a function can also be store in a variable
// a function expression is an anonymous function assigned to a variable
// Anonymous function is a function without a name
// like the one below

//variableFunction(); //not hoistable if anonymous function is store in a variable //meaning the function couldnt be called before its declaration

let variableFunction = function (){
	console.log('Hello again!');
};

variableFunction();


let funcExp = function funcName(){
	console.log('Hello from the other side!');
};

//funcName(); //this will not work if the function, even with function name as the function is already stored in a variable
funcExp(); //invoke the function by the variable name because function expression are always invoked or called using its variable names



//Reassigning functions
// can reassign declared functions and function expression to new anonymous functionss
declaredFunction = function(){
	console.log('Updated declared function');
};

declaredFunction();

funcExp = function(){
	console.log('Hello, is it me?');
};

funcExp();

//however, we cannot reassign function expressions initialized with const

const constantFunction = function(){
	console.log('Initialized with const');
};

constantFunction();


// constantFunction = function(){
// 	console.log('Modifying const');
// };

// constantFunction();

let displaySavings = function(){
	let savings = 1000;
	return savings;
};

console.log(displaySavings());


//Function Scope
// scope is the accessibility of variables within a program
// three types: local or block scope, global scope, function scope

//console.log(savings); //cannot access variables initialized inside a function 

//LOCAL SCOPE
{
	let localVar = 'Armando Perez';
	console.log(localVar);
}
// console.log(localVar); //will result in error as localVar is inside a block scope

//GLOBAL SCOPE
let globalVar = 'Mr. Worldwide';
console.log(globalVar);

//FUNCTION SCOPE
let globalName = 'Pitbull';

function myNewFunction(){
	let nameInside = 'Renz';
	return nameInside;
	//variables decalred globally or outside the function have global scope
	//global variable can be accessed from anywhere in JS
	console.log(globalName);
};

myNewFunction();
let getName = myNewFunction()
console.log(getName);


function anotherFunction(){
	var funcVar = 'Jane';
	const funcConst = 'Luke';
	let funcLet = 'Joe';

	console.log(funcVar);
	console.log(funcConst);
	console.log(funcLet);
}

anotherFunction();

// console.log(funcVar);
// console.log(funcConst);
// console.log(funcLet);

// NESTED FUNCTIONS
// you can create another function inside a function called nested function
// this nested function inside the main function will have access to the variable of the main function as they are inside of the codeblock

function nestedFunction(){
	let name = 'Jane';

	// console.log(name);

	function insideFunction(){
		// the nested function 
		let newName = 'John';
		return newName +' '+ name
	}

	return insideFunction();
}

let nameTogether = nestedFunction();
console.log(nameTogether);



//ALERT
// allows us to show small window at the top of the browser page which contains information to show to users

function sampleAlert(){
	alert('Hello World');
};

// sampleAlert();


//PROMPT
// let samplePrompt = prompt('Enter your name: ');
// console.log('Hello',samplePrompt);


function printWelcome(){
	let fName = prompt('Enter your first name: ');
	let lName = prompt('Enter your last name: ');

	console.log('Hello',fName + ' ' + lName + "!");
	console.log('Welcome to my Page!');
};

// printWelcome();


//FUNCTION NAMING CONVENTION
// function names should be definitive of the task it will perform, usually a verb
// avoid using generic names to avoid confusion within your code
// avoid pointless and inappropriate function names
// name functions in camelcase