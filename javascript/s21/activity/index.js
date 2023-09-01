//console.log('Hello World!');

/*
	
	1. Create a function called addNum which will be able to add two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the addition.
	   
	   Create a function called subNum which will be able to subtract two numbers.
	    - Numbers must be provided as arguments.
	    - Return the result of subtraction.

	    Create a new variable called sum.
	     - This sum variable should be able to receive and store the result of addNum function.

	    Create a new variable called difference.
	     - This difference variable should be able to receive and store the result of subNum function.

	    Log the value of sum variable in the console.
	    Log the value of difference variable in the console.

	2. Create a function called multiplyNum which will be able to multiply two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the multiplication.

		Create a function divideNum which will be able to divide two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the division.

		Create a new variable called product.
		 - This product variable should be able to receive and store the result of multiplyNum function.

		Create a new variable called quotient.
		 - This quotient variable should be able to receive and store the result of divideNum function.

		Log the value of product variable in the console.
		Log the value of quotient variable in the console.


	3. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
		- a number should be provided as an argument.
		- look up the formula for calculating the area of a circle with a provided/given radius.
		- look up the use of the exponent operator.
		- return the result of the area calculation.

		Create a new variable called circleArea.
		- This variable should be able to receive and store the result of the circle area calculation.
		- Log the value of the circleArea variable in the console.

	4. Create a function called getAverage which will be able to get total average of four numbers.
		- 4 numbers should be provided as an argument.
		- look up the formula for calculating the average of numbers.
		- return the result of the average calculation.
		
		Create a new variable called averageVar.
		- This variable should be able to receive and store the result of the average calculation
		- Log the value of the averageVar variable in the console.
	

	5. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
		- this function should take 2 numbers as an argument, your score and the total score.
		- First, get the percentage of your score against the total. You can look up the formula to get percentage.
		- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
		- return the value of the variable isPassed.
		- This function should return a boolean.

		Create a global variable called outside of the function called isPassingScore.
			-This variable should be able to receive and store the boolean result of the checker function.
			-Log the value of the isPassingScore variable in the console.
*/

//PART 1
function addNum(num1,num2){
	return num1 + num2;
}

function subNum(num3,num4){
	return num3 - num4;
}

let num1 = 5;
let num2 = 15;
let num3 = 20;
let num4 = 5;

let sum = addNum(num1,num2);
let difference = subNum(num3,num4);

console.log('Displayed sum of ' + num1 + ' and ' + num2);
console.log(sum);
console.log('Displayed difference of ' + num3 + ' and ' +  num4);
console.log(difference);


//PART 2
function multiplyNum(num5,num6){
	return num5*num6;
}

function divideNum(num5,num6){
	return num5/num6;
}

let num5 = 50;
let num6 = 10;

let product = multiplyNum(num5,num6);
let quotient = divideNum(num5,num6);

console.log('Displayed product of ' + num5 + ' and ' + num6);
console.log(product);
console.log('Displayed quotient of ' + num5 + ' and ' + num6);
console.log(quotient);


//PART 3
function getCircleArea(radius){
	const pi = 3.1416;
	return pi * (radius**2);
}

let radius = 15;

let circleArea = getCircleArea(radius);

console.log('The result of getting the area of a circle with ' + radius + ' radius');
console.log(circleArea);


//PART 4
function getAverage(numA,numB,numC,numD){
	return (numA+numB+numC+numD)/4;
}

let numA = 20;
let numB = 40;
let numC = 60;
let numD = 80;

let averageVar = getAverage(numA,numB,numC,numD);

console.log('The average of 20, 40, 60, 80');
console.log(averageVar);


//PART 5
function checkIfPassed(score, totalScore){
	let percentage = (score/totalScore)*100;
	let isPassed = percentage >= 75;
	return isPassed;
}

let score = 38;
let totalScore = 50;

let isPassingScore = checkIfPassed(score, totalScore);

console.log('Is 38/50 a passing score?');
console.log(isPassingScore);



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		addNum: typeof addNum !== 'undefined' ? addNum : null,
		subNum: typeof subNum !== 'undefined' ? subNum : null,
		multiplyNum: typeof multiplyNum !== 'undefined' ? multiplyNum : null,
		divideNum: typeof divideNum !== 'undefined' ? divideNum : null,
		getCircleArea: typeof getCircleArea !== 'undefined' ? getCircleArea : null,
		getAverage: typeof getAverage !== 'undefined' ? getAverage : null,
		checkIfPassed: typeof checkIfPassed !== 'undefined' ? checkIfPassed : null,

	}
} catch(err){

}