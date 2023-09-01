console.log('Hello World');

let studentNumberA = '2020-1923';
let studentNumberB = '2020-1924';
let studentNumberC = '2020-1925';
let studentNumberD = '2020-1926';
let studentNumberE = '2020-1927';


let studentNumber = ['2020-1923', '2020-1924', '2020-1925', '2020-1926', '2020-1927'] //values inside the array are called ELEMENTS

//arrays are used to store multiple values in a single variable
//they are declared using square bracket ([]) also known as array literals


let grade = [76, 88, 97, 100, 87, 90];
let computerBrand = ['Acer', 'Asus', 'Lenovo', 'HP', 'Apple','Dell','RedFox','MSL','Samsung'];

let mixedArray = [18, 'Asus', null, undefined, []];

console.log(grade);
console.log(computerBrand);
console.log(mixedArray);

let city1 = 'Tokyo';
let city2 = 'Manila';
let city3 = 'Hongkong';

let cities = [city1, city2, city3];
console.log(cities);


//Length 
//the length property allows us to get the total number of elements in an array
//length property can also be used with strings
console.log(cities.length);

let fullName = "Jamie Noble"
console.log(fullName.length);



//delete the last item in an array
//however, we can't do the same on strings
cities.length -= 1;
console.log(cities);

fullName.length --;
console.log(fullName.length);


//each element within an array is associated with its own idex number
//in js, the first element is associated with index 0, and increases with 1 for every element
//accessing an array with an index out of the total length of the array will return undefined
console.log(grade[0]);
console.log(computerBrand[3]);



let lakerLegends = ['Kobe', 'Shaq', 'LeBron', 'Magic','Kareem']
console.log(lakerLegends[1]);

console.log(lakerLegends);
lakerLegends[2] = 'Pau Gasol';
console.log(lakerLegends);



//access the last element of an array
let bullsLegend = ['Steve Kerr','Jordan','Rodman','Tippen','Rose','Kukoc'];
console.log(bullsLegend[bullsLegend.length-1]);
//since the first element of an array starts at 0, subtracting 1 to the length of the array, will result to the index of the last element


//adding items into an array
bullsLegend[bullsLegend.length] = 'Kai Sotto';
console.log(bullsLegend);


let newArr = [];
console.log(newArr[0]);


newArr[0] = 'Cloud Strife';
newArr[1] = 'Tiffa Lockhart';
console.log(newArr);

newArr[newArr.length] = "New Element";
console.log(newArr);

for (let i = 0; i < newArr.length; i++){
	console.log(newArr[i]);
}


let numberArray = [5,12,30,36,40];
console.log(numberArray);
for(let index = 0; index < numberArray.length; index++){
	if (numberArray[index]%5===0){
		console.log(`${numberArray[index]} is divisible by 5`)
	}
	else{
		console.log(`${numberArray[index]} is not divisible by 5`)
	}
};
console.log(numberArray);


//Multidimensional Arrays
//are useful for storing complex data structures 
//a practical application of this is to help visualize or create real world objects
//although useful, in number of cases, creating complex array structure is not always recommended

let arrayOne = [[1,2,3,4,5],
				[1,2,3,4,5],
				[1,2,3,4,5]];
console.log(arrayOne);

let chessBoard = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
];
console.log(chessBoard[0][3]);


//accessing elements of multidimensonal arrays
//nameOfArray[index of the array][index inside array]
