//INSTRUCTION #1
function displayValues(numArr){
	numArr.forEach(function(numbers){
		console.log(numbers**3);
	})
}

displayValues([2,3,4]);



//INSTRUCTION #2
function celsiusToFahrenheit(tempArr){
	let convertedArray = tempArr.map(function(celsius){
		return Math.round((celsius*1.8 + 32)*100)/100;
	})

	return convertedArray;
}

console.log(celsiusToFahrenheit([32,37,42]));

function areAllEven(numArr){
	let filteredNum = numArr.every(function(number){
		return Math.round(((number%2===0)*100)/100);
	})

	return filteredNum;
}

console.log(areAllEven([2,4,6,8,11]));


//INSTRUCTION #3
function hasDivisibleBy8(numArr){
	let hasDivisible = numArr.some(function(number){
		return (number%8 === 0);
	})

	return hasDivisible;
}

console.log(hasDivisibleBy8([4,8,2,16,32,24,86,54,90]));



//INSTRUCTION #4
function filterEvenNumbers(numArr){
	let filteredNum = numArr.filter(function(number){
		return (number%2===0);
	})

	return filteredNum;
}

console.log(filterEvenNumbers([4,5,11,16,33,24,83,57,90]));



//INSTRUCTION #5
let productsArray = [
    {
        name: "Shampoo",
        price: 90
    },
    {
        name: "Toothbrush",
        price: 50
    },
    {
        name: "Soap",
        price: 25
    },
    {
        name: "Toothpaste",
        price: 45
    },
];


function getProductNames(productArr){
	let productNames = productArr.map(function(product){
		return product['name'];
	})
	return productNames;
}

console.log(getProductNames(productsArray));