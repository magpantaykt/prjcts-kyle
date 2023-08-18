// Section: Syntax, Statements, Comments
console.log('Hello Eric!');

// Section: Variables


// Declaring variables
let myVariable;
console.log(myVariable);

//Declaring and Initializing Variables
	//productName is the variable 
	// 'Desktop Computer' is the value stored in the container (variable) productName
	// variable = value
let productName = 'Desktop Computer';
console.log(productName);

let productPrize = 18999;
console.log(productPrize);

//Adding string and number
let add = productName + ' ' + productPrize;
console.log(add);

const interest = 3.539;
console.log(interest);


//Reassign value to variables
productName = 'Laptop';
console.log(productName);

//Can not reassign new value to variables initialized using const
/* index.js:34 Uncaught TypeError: Assignment to constant variable.
    at index.js:34:10
*/
// interest = 345345;
// console.log(interest);

let friend = 'Kate';
console.log(friend);

//let variable can not be redeclared
/* Uncaught SyntaxError: Identifier 'friend' has already been declared (at index.js:44:5)
*/
// let friend = 'Jane';
// console.log(friend);

//Declaring Variables
let supplier; //first state is undefined

//Initialization: done after the variable has been declared
supplier = 'John Smith Tradings';
console.log(supplier);

supplier = 'Zuitt Store';
console.log(supplier);


//can not declare const without initial value
/* Uncaught SyntaxError: Missing initializer in const declaration (at index.js:60:7)
*/
// const pi; 


//Multiple Varible Declaration
let x = 5, y= 2, z = 2;
let productCode = 'Dc017';
let productBrand = 'Dell';
console.log(productCode + ' ' + productBrand);
console.log(x,y,z);

// DATA TYPES

//STRING
let country = 'Philippines';
let province = 'Metro Manila';

//Concatenating Strings
let fullAddress = province + ', ' + country;
console.log(fullAddress);

//new line
let greeting = 'I live in the \n' + country;
console.log(greeting);

//tab
let mailAddress = 'Metro Manila\tPhilippines';
console.log(mailAddress);

mailAddress = province + '\n' + country;
console.log(mailAddress);

//To prevent error in displaying apostrophe and quotation marks
//Use backslash apostrophe or quotation marks
let message = 'John\'s employee went home early';
console.log(message);


//NUMBERS
let headCount = 2546;
console.log(headCount);

//Decimals
let grade = 98.7;
console.log(grade);

//Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

console.log('John\'s grade last year is ' + grade);


//BOOLEAN
let isMarried = false;
let inGoodConduct = true;
console.log(isMarried);

console.log('Alma isMarried:', isMarried);


document.write("Hello World!");


//ARRAYS
let list = [100, 99, 98.4, 96.4, 99, 97];
let listLength = list.length;
console.log(list);
console.log(listLength);



//OBJECTS
let person = {
	fullName: 'Juan Dela Cruz',
	age: 35,
	isMarried: true,
	contact: ['09123456789', 'jdl@gmail.com'],
	address: {
		houseNumber: '123',
		city: 'Manila'
	}
};
// Syntax for Object
/*
let/const objectName = {
	property: value
}
*/


//typeof = used to determine the type of data of a variable
//it outputs a string that shows the data type
console.log(typeof list);
console.log(typeof person);


//NULL
let spouse = null;

let myNumber = 0;
let myString = '';


console.log(spouse);
console.log(myNumber);
console.log(myString);


//UNDEFINED
let something;
console.log(something);


//UNDEFINED VS NULL
//NULL: is an assignment value that represents a deliberate absence of any object value
let varA = null;
console.log(varA);


//UNDEFINED: is when a variable is declared but initialized
let varB;
console.log(varB);
