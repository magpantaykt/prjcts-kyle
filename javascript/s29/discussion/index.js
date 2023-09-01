console.log('JavaScript ES6 Updates');


//EXPONENT OPERATOR
const firstNum = 8 ** 2;
console.log('Using exponent operator \'**\'',firstNum);

const secondNum = Math.pow(8,2);
console.log('Using math power built in \'**\'',secondNum);

//TEMPLATE LITERALS
/*
allows to write strings using the concatenation operation '+'
greatly helps with code readability
*/
//template literals allows us to write strings with embedded javascript expressions
//${} are used to include javascript expressions in strings using template literals

let name = 'John';
//pre-template literal string
let message = 'Hello ' +name+ '! Welcome to programming.';
console.log('Without template literal string: ',message);

message = `Hello ${name}! Welcome to programming.`;
console.log('With template literal string: ',message);

let anotherMessage = `
${name} attended a math competition. 
He won it by solving the problem 8**2 with the answer ${firstNum}
`;
console.log(anotherMessage);


//ARRAY DESTRUCTURING
//allows to unpack elements in arrays into distinct variables
// let/const [variableName,  variableName, variableName] = array

let fullName = ['Juan', 'Dela', 'Cruz'];
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}. It\'s nice to meet you`);

const [firstName, middleName, lastName] = fullName;
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName} ${middleName} ${lastName}. It\'s nice to meet you`);


//OBJECT DESTRUCTURING
//allows us to unpack array to propertries of objects into distinct variables

const person = {
	givenName: 'Jane',
	maidenName: 'Dela',
	familyNane: 'Cruz'
};

console.log(`Hello, ${person.givenName}  ${person.maidenName}  ${person.fullName})! It's good to sww you again.`);

const {givenName, maidenName, familyName} = person;

console.log(`Hello ${givenName} ${maidenName} ${familyName}! It's good to sww you again` );


//ARROW FUNCTIONS
/*
compact alternative syntax to traditional function
useful for code snippets where creating functions will be reused at any other portion of the code
*/

function printFullname(fName, mName, lName){
	console.log(`${fName} ${mName} ${lName}`);
};

printFullname('John', 'D', 'Smith');

const printName = (fName, mName, lName) => {
	console.log(`${fName} ${mName} ${lName}`);
};

printName('Ang', 'D', 'Avatar');


//implicit return statement
/*
these are instances where you can ommit the return statement,
this works because even without the return statement, javascript implicitly adds it for the rsult of the function
*/

const add = (x,y)=>{
	return x+y;
}

const addNum = (x,y) => x+y;

//Arrow function with loops
const students = ['John','Jane','Jun'];

students.forEach(function(student){
	console.log(`${student} is a student`);
})

students.forEach((student) => {
	console.log(`${student} is a student`);
})



//CREATING OBJECTS USING CLASS
/*
the constructor is a special method of a class for creating or initializing an object for that class
'this' keyword refers to the properties of an object created or initialized from the class
by using the 'this' keyword in accessing an object property, this allows us to reassign its values

syntax:

class className{
	constructor(objectProperty, objectProperty){
		this.objectProperty = objectProperty;
		this.objectProperty = objectProperty;
	}
}

*/
class Car{
	constructor(brand, name, year){
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}


//instantiating an object
//creating a constant with a const keyword and assigning it to a value of an object makes the variable itself immutable so you cannot reassign it to hold another object. however, 
//it does not mean that its properties can not be changed/immutable or updated 

const myCar = new Car();
console.log(myCar);

myCar.brand = 'Ford';
myCar.name = 'Ranger Rapropt';
myCar.year = 2021;

console.log(myCar);

myCar.brand = 'Toyota';
myCar.name = 'Innova';

console.log(myCar);

const myNewCar = new Car('Toyota', 'Innova', 2021);
console.log(myNewCar);