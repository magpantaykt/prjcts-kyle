console.log('Hello world');

// === means the values are checked if they are equal and of the same data type
// == means the values are checked of they are equal 0 == '0'
// !== means the values can be equal but of different data type e.g 0 !== '0'

// let x = 32;
// let y = '32';

// console.log(x+y==='3232');



// 0, Nan, null, undefined are considered falsy values
// 1-9 are considered truthy values

// // Case: 1
// //case 'ourCondition' is read as true and true and false
// let ourCondition = 1 && 2 && 0 && false && 3;
// console.log(ourCondition); // 0 is returned

// // Case: 2
// let ourCondition1 = 1 && 2 && false && 3;
// console.log(ourCondition1); // false is returned

// // Case: 3
// let ourCondition2 = 1 && 2 && 3;
// console.log(ourCondition2); // 3 is returned

// // Case: 1
// let ourCondition3 = false || 0 || 1 || true || 3;
// console.log(ourCondition3); // 1 is returned

// // Case: 2
// let ourCondition4 = 0 || true || 1 || 2 || 3;
// console.log(ourCondition4); // true is returned

// // Case: 3
// let ourCondition5 = "hello" || false || NaN || 0;
// console.log(ourCondition5); // hello is returned

// let condition6 = (false || true) && true || (!true && true);
// console.log(condition6);

console.log("Arithmetic Operators");

//ARITHMETIC OPERATORS
//Addition Operator //Subtraction, Multiplication, Division Operators are the same (-=, *=, /=)
let assignmentValue = 8;
console.log('The assignment number is:',assignmentValue);


assignmentValue += 2;
console.log('The result of the addition operator is:',assignmentValue);

assignmentValue -= 2;
console.log('The result of the subtraction operator is:',assignmentValue);

assignmentValue *= 2;
console.log('The result of the multiplication operator is:',assignmentValue);

assignmentValue /= 2;
console.log('The result of the division operator is:',assignmentValue);


//Modulo
let number = 19;
let q = number/9;
let r = number%9;
console.log('The quotient is:',q);
console.log('The remainder is:',r);

console.log("Increment and Decrement");


//Increment and Decrement
// Operators that add or subtract value by 1 and reassigns the value of the variable where the increment or decrement was applied to
let z = 1;
console.log('Original value of z:',z);

let preIncrement = ++z; //pre-increment //always add 1 at the start and will reflect at the variable immediately
console.log('Result of the pre-increment:', preIncrement);
console.log('Value of z:',z);

let postIncrement = z++; //post-increment //always add 1 at the start but the result will reflect in the variable in the next 
console.log('Result of the post increment', postIncrement);
console.log('Value of z:',z);


let y = 5;
console.log('Original value of y:',y)

let preDecrement = --y; //pre-decrement //always subtract 1 at the start and will reflect at the variable immediately
console.log('Result of the pre-decrement:', preDecrement);
console.log('Value of y:',y)

let postDecrement = y--; //post-decrement //always subtract 1 at the start but the result will reflect in the variable in the next 
console.log('Result of the post increment', postDecrement);
console.log('Value of y:',y)


console.log("\nType Coercion");

//Type Coercion
// is the automatic or implicit coversion of values from one data type to another

let numA = '10';
let numB = 12;

let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

//Adding or concatenating a string and a number will result to a string


let numC = 16;
let numD = 14;
let notCoercion = numC + numD;
console.log(notCoercion);
console.log(typeof notCoercion);


// true is interpreted as a value of 1 and false is interpreted as a value of 0
//adding a boolean to a number, the boolean is coerced and was interpreted as a number
let numE = 1 + true;
console.log(numE);

let numF = 1 + false;
console.log(numF);

let numG = true + false;
console.log(numG);

console.log("\nEquality Operators");


//Equality Operators
// checks whether the operands are equal or have the same content 
// it also converts and compare operands of different data types and it returns a boolean value if its true or false
let juan = 'juan';

console.log(juan == 'juan');

console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1');
console.log(0 == false);


console.log("\nInequality Operators");

//Inequality operator

console.log(1 != 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);


console.log(juan != 'juan');


console.log(juan === 'juan');

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);


console.log("\nRelational Operators");


//Relational Operators (>, <, <=, >=)
let num1 = 50;
let num2 = 65;

let isGreaterThan = num1 > num2;
console.log(isGreaterThan);

let isLessThan = num1 < num2;
console.log(isLessThan);

let isGTorEqual = num1 >= num2;
console.log(isGTorEqual);

let isLTorEqual = num1 <= num2;
console.log(isLTorEqual);



console.log("\nLogical Operators");

//Logical Operators (&&:all true==true and ||:one true==true)
let isLegalAge = true;
let isRegistered = false;

let allRequirements = isLegalAge && isRegistered;
console.log(allRequirements);

let someRequirement = isLegalAge || isRegistered;
console.log(someRequirement);

let someRequirementNotMet = !isRegistered;
console.log(someRequirementNotMet);