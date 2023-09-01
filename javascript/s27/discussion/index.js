console.log('Hello World!');


console.log('NONMUTATOR METHODS')

//NONMUTATOR METHODS - are functions that does not change or modify an array after they're created
//these methods do not manipulate the original array performing various tasks

let countries = ['US','PH','CAN','SG','TH','PH','FR','JP'];



//indexOf
//returns the index number of the first matching element found in the array
let firstIndex = countries.indexOf('PH');
console.log("First index using indexOf:",firstIndex);

//if no match in the array was found, it will return -1
let noMatch = countries.indexOf('BR');
console.log("If element does not exist:",noMatch);


//lastIndexOf
//returns the last matching index if element is found in the array
//the search process was done starting from the last element of the array
let lastIndex = countries.lastIndexOf('PH');
console.log("Last index using lastIndexOf:",lastIndex);

//syntax 
//nameOfArray.lastIndexOf(elementName,from 0 until what index)
let lastIndexfrom = countries.lastIndexOf('PH',7);
console.log("Last index starting from certain index using lastIndexOf:",lastIndexfrom);


//slice()
//slices elements from a array and returns a new array without affecting the original array
let sliceArrA = countries.slice(2);
console.log("Using slice() stored to a new variable:",sliceArrA);
console.log("Original array after slice:",countries);


//slice elements from specifiec index to another index
//syntax
//nameOfArray.slice(starting index, end index (not includedin the result)
let sliceArrB = countries.slice(-4,-1);
console.log("Using slice() on specifc indeces:",sliceArrB);


console.log(countries.splice(-1)) //can access elements using negative index but it starts at -1 and starts from the last element

//HOWEVER, .splice() only processes slicing from left to right

//toString()
//returns an array as string separated by commas
let stringArray = countries.toString();
console.log("Using toString():",stringArray)
console.log("Access a char in the string:",stringArray[3]);



//concat()
//used to combine two arrays and returns the combined array and store it in a new variable without affecting the original array
let taskArrayA = ['drink HTML','eat JavaScript'];
let taskArrayB = ['inhale CSS', 'breathe Bootstrap'];
let taskArrayC = ['sleep with git', 'coffee with Java'];

let taskArray = taskArrayA.concat(taskArrayB);
console.log("Using concat():",taskArray);


//adding multiple arrays
let allTask = taskArrayA.concat(taskArrayB,taskArrayC);
console.log("Using concat() for multiple arrays st once:",allTask);


//join()
//returns an array as string separated by specified separator
let users = ['John', 'Jane', 'Joe', 'Robert'];
let joinSeparate = users.join('***');
console.log("Using join():",joinSeparate);



//iteration methods
//forEach()
//displays the element in the array one by one
//similar to for loop that iterates through each element in the array
//for each item in the array, the anonymous function in forEach will run
allTask.forEach(function(task){
	console.log(task)
});


//using forEach() with conditional statements

let filteredTask = [];

allTask.forEach(function(task){
	if (task.length > 10){
		filteredTask.push(task);
	}
});
console.log(filteredTask);

allTask.forEach(function(element,index){
	console.log('Index:',index);
	console.log('Element:',element);
})


//map()
//iterates on each element and returns a new array with different results depending on the function's operator
//useful for performing tash where mutating/changing the elements are required
//unlike forEach(), map() method requires the use of return statement in order to create another array with the performed operation


let numbers = [1,2,3,4,5]

let numberMap = numbers.map(function(number){
	return number * number;
})

console.log(numbers);


//MAP VS FOREACH
let numberForEach = numbers.forEach(function(number){
	return number * number; //does not have a return value
})

console.log("Using map():",numberMap);
console.log("Using forEach():",numberForEach);


//every()
//checks if all elements in an array meet the given condition
//returns boolean
let allValid = numbers.every(function(number){
	return (number < 3);
})

console.log("Using every():",allValid);


//some
//checks if at least one of the elements in an array met the given condition
//returns boolean
let someValid = numbers.some(function(number){
	return (number < 3);
})

if (someValid){
	console.log("Some of the elements in the array is less than 3");
}



//filter()
//returns a new array that contains elements which meet the given condition and returns empty array if no element were found

let filterValid = numbers.filter(function(number){
	return (number < 3);
})
console.log("Using filter():",filterValid);


let nothingFound= numbers.filter(function(number){
	return (number === 0);
})
console.log("Using filter():",nothingFound);



//includes()
//check if a certain value is an element in an array
//returns boolean
let exists = numbers.includes(2);
console.log("Using includes():",exists);

let inventory = ['Mouse', 'Keyboard', 'Laptop', 'Monitor']
let productFound = inventory.includes('Mouse');
console.log("Using includes():",productFound);

let notFound = inventory.includes('Headset');
console.log("Using included():",notFound);


//filter() and includes() to get all the elements if it includes a certain string/char
let filteredProduct = inventory.filter(function(product){
	return product.toLowerCase().includes('a');
})
console.log(filteredProduct);



//reduce()
//the first/result element in the array is the accumulator parameter
//the second/next element in the array is the current value in the array parameter
//an operation is performed on the two elements
let iteration = 0;

let reduceArr = numbers.reduce(function(acc,curr){
	console.log(`Current iteration ${++iteration}`);
	console.log("Accumulator:",acc);
	console.log("Current Value",curr);

	return acc+curr;
});

console.log(reduceArr)


let list = ['hello','again','world'];

let joinWithReduce = list.reduce(function(acc,curr){
	return acc+" "+curr;
})
console.log(joinWithReduce);



//fill
//changes all of the elements into a new value

// let changeElement = numbers.fill('yo');
// console.log(changeElement);