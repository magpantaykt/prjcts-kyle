// console.log('Hello World!');

//CONDITIONAL STATEMENTS
//allow us to control the flow of the program
//it allows to run a statement if a condition is met or run another separate condition


let numA = -1;

if (numA < 0){
	console.log('Negative Number');
}

if (numA < 0){
	console.log('Negative Number');
}

console.log('-------------------------------------------------------------------------------------');


console.log(numA < 0);


let city = 'New York';

if (city == 'saan ka na naman'){

console.log('Executes a statement if previoues; conditions adre flez and ig not, and if oyu');
};


console.log('-------------------------------------------------------------------------------------');


let numH = 0;

if (numH < 0){
	console.log('Negative Number');
}
else if (numH > 0){
	console.log('Positive Number');
}



/*
Since both if and if else condition failed, the else statement was run instead

else statement sould be added if there's a proceeding gift condition. Else statement will not work if there's no if statement 

*/


let message = 'NO MESSAGE'
console.log(message)

function determineTyphoonIntensity(windSpeed){
	if (windSpeed < 30) {
		return "Not a typhoon";
	}

	else if (windSpeed <= 61) {
		return "Tropical depression detected";
	}

	else if (windSpeed >= 62 && windSpeed <= 88) {
		return "Tropical storm detected";
	}

	else if (windSpeed >= 89 && windSpeed <= 117) {
		return "Severe tropical storm detected";
	}

	else{
		return "You can survive";
	}
}

message = determineTyphoonIntensity(110);
console.log(message);


//Truthy Examples
if (true) {
	console.log('Truthy');
}

if (1) {
	console.log('Truthy');
}

if ([]) {
	console.log('Truthy');
}


//Falsy Examples
if (false) {
	console.log('Falsy');
}

if (0) {
	console.log('Falsy');
}

if (undefined) {
	console.log('Falsy');
}


//TERNARY RESULT FOR SHORTHAND IF ELSE

let ternaryResult = (1 < 18) ? true : false;
console.log("Result of Ternary Operator: ",ternaryResult);



//TRY MULTIPLE IF ELSE IF FOR SHORTHAND
/*
var a = 'que';
var bb = 'ddd';

// plug in the remaining variables to test further 

result = (a === 'abc') ? (bb === 'def') ? amd = 'hello' :
         (bb === 'ghi') ? amd = 'hai' : amd = 'Hurray' :
     (a === 'que') ? (a === 'ddd') ? amd = 'Hurray Hi' : amd = 'Hurray Bye' : 
     'default result was missing from your statment';

console.log(result);
*/

console.log('-------------------------------------------------------------')

let name;

function isOfLegalAge(){
	name = 'John';
	return "You are of the legal age limit";
}

function isOfUnderAge(){
	name = 'Jane';
	return "You are under the age limit";
}

let age = parseInt(prompt('What is your age? '));
console.log(age);
let legalAge = (age > 18) ? isOfLegalAge() : isOfUnderAge();
console.log('Result of Ternary Operator: ' + legalAge + ', ' + name);


//translation to IF ELSE STATEMENT
/*function checkIfLesser(){
	if (age < 18) {
		return true;
	}
	else{
		return false;
	}
}

let ternaryResult2 = checkIfLesser();
console.log(ternaryResult2);*/



//SWITCH CASE

let day = prompt('What day of the  week is it today? ').toLowerCase();
console.log(day);


switch (day){
	case 'monday':
		console.log('the color of the day is red');
		break;
	case 'tuesday':
		console.log('the color of the day is orange');
		break;
	case 'wednesday':
		console.log('the color of the day yellow');
		break;
	case 'thursday':
		console.log('the color of the day is green');
		break;
	case 'friday':
		console.log('the color of the day is blue');
		break;
	case 'saturday':
		console.log('the color of the day is indigo');
		break;
	case 'sunday':
		console.log('the color of the day is violet');
		break;
	default:
		console.log('please input a valid day');
		break;
}


function showIntensityAlert(windSpeed){
	try{
		alerat(determineTyphoonIntensity(windSpeed)); //Error is spelling of alerat, it should be alert
		//error or err are commonly used variable by developers to store errors
	}
	catch(error){
		console.log(typeof error);
		console.error(error.message);
		console.log('ERROR: Wrong Spelling / casing of alert() function');
	}
	finally{
		//continue execution of code regardless of success or failure of execution in the try block
		alert('Intensity updats will show new alert')
	}
}

showIntensityAlert(56);



/*

the "try/catch" statement are commonly used for error handling. 

there are instances when the application return a warning, error that is not necessary in the context of the code

they are used to specify a response whenever an exception error is received

it is also useful for debugging code because of the error object that can be caught using "try/catch" statement

in most programming languages, an error object is used to provide detailed information about an error in which also provide access to functions which can be used to resolve an error to create exceptions within our code

the "finally" block is used to specify a response or action that is used to handle or resolve errors

*/