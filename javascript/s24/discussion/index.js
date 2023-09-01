// console.log('Hello World');

//CREATING OBJECT USING LITERAL NOTATION
let cellPhone = {
	name: "Nokia 3210",
	manufacturingDate: 1999
};

console.log('Result from creating objects using literal notation');
console.log(cellPhone);


//CREATING OBJECT USING CONSTRUCTOR FUNCTION

//the this keyword allows to assign a new object properties by associating them with values received from constructor function's parameter
//the "new" operator creates an instance of an object

//it creates a reusable function that creates several object that have the same data structur

/*
function constructorName(keyA,keyB){
	this.keyA = keyA;
	this keyB = keyB;
}

//the examples invoke or call the Laptop function/constructor to create a new object instance

*/
function Laptop(name, manufactureDate){
	this.name = name;
	this.manufactureDate = manufactureDate;
}

let laptop = new Laptop('Lenovo', 2008);
console.log('Result from creating objects using constructor');
console.log(laptop);


let myLaptop = new Laptop('Macbook Air', 2020);
console.log('Result from creating objects using constructor');
console.log(myLaptop);


//Accessing object properties
console.log('Result from dot notation: ' + myLaptop.name);

console.log('Result from square bracket notation: ' + myLaptop['name']);


//Accessing array objects
let array =[laptop, myLaptop];
console.log(array[0].name);
console.log(array[1]['name']);


//Empty object
let car = {};
car.name = ["Honda Civic"]; //add and edit/update and delete properties-value to an object
car['manufacture date'] = 2019;
console.log(car);

car.name.push("Honda Civic Type R");
console.log(car);

car['name'].push("Honda Civic Type R S Pro");
console.log(car);

console.log(car.name[1]); //get the element inside the array which is a value of the property name in object car
// delete car['manufacture date'];
// console.log(car);



//Object methods
//a method is a function which is a property of an object
let person = {
	name: 'John',
	talk: function (){
		console.log('Hello, my name is',person.name);
	}
}

person.talk();

//adding methods to objects

person.walk = function(){
	console.log(this.name + ' walked 438954 steps forward');
}
console.log(person);
person.walk();

let friend = {
	firstName: 'Joe',
	lastName: 'Smith',
	address: {
		city: 'Austin',
		capital: 'Texas'
	},
	email: ['joe@mail.com', 'joesmith@mail.com'],
	introduce: function(){
		console.log('Hello, my name is '+this.firstName+' '+this.lastName);
	}
}

friend.introduce();
