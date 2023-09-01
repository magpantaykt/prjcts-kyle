//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator

// Template Literals

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

// Object Destructuring
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}


// Arrow Functions
let numbers = [1, 2, 3, 4, 5];

// Javascript Classes


let getCube = `The cube of 2 is ${Math.pow(2,3)}`;
console.log(getCube);

const [houseNumber, street, state, zipCode] = address;
console.log(`I lived at ${houseNumber} ${street}, ${state} ${zipCode}`);


const {name, species, weight, measurement} = animal;
console.log(`${name} was a ${species}. He weighed at ${weight} with a measurement of ${measurement}`);

//PART 4 TO 5
numbers.forEach((number) => {
    console.log(number);
})

const reduceNumber = numbers.reduce((acc,curr) => {
    return acc+curr;
});

console.log(reduceNumber)


class Dog{
    constructor(name, age, breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}

const myDog = new Dog('Frankie', 5, 'Miniature Dachshund');
console.log(myDog);


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        getCube: typeof getCube !== 'undefined' ? getCube : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        Dog: typeof Dog !== 'undefined' ? Dog : null

    }
} catch(err){

}