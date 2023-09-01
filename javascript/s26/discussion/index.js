console.log('Hello World');

let fruits = ['apple', 'orange', 'kiwi', 'dragon fruit', 'mango', 'gum gum fruit'];
console.log(fruits);


//PUSH to add element at the end of the array
// adds an element at the end of an array and returns the array's new length (if stored in a new variable while using the push) along with the updated the array

let fruitsLength = fruits.push('grapes');
console.log(fruitsLength);
console.log(fruits);

function addFruit(fruit){
	fruits.push(fruit);
}

addFruit('pineapple');
console.log(fruits);

//POP
//removes the last element in an array and returns the removed 

let removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

function popFruit(){
	fruits.pop();
}

popFruit();
console.log(fruits);


//UNSHIFT
//add new element/s at the beginning of the array 

fruits.unshift('lime','banana');
console.log(fruits);

function addAtArrayStart(fruit){
	fruits.unshift(fruit);
}

addAtArrayStart('kalamansi');
console.log(fruits)


//SHIFT
//removes ONE element at the beginning of the array

let removedFruits = fruits.shift();
console.log(removedFruit);
console.log(fruits);


function shiftFruit(){
	fruits.shift()
}

shiftFruit();
console.log(fruits);



//SPLICE
//arrayName.splice(starting index, starting from the starting index how many elements are deleted, element/s to be added)
//it simulatenously remove element from specified index and adds element from that index
fruits.splice(1, 3, "lime", "cherry");
console.log(fruits);

console.log(fruits.slice(1,5));

//console.log(fruits.toString());

function useSplice(index,howMany,arrayAdd){
	fruits.splice(index,howMany,...arrayAdd);
}

useSplice(2,3,['avocado','juicy fruit']);
console.log(fruits);


//SORT
//arranges the elements in the array in alphanumeric order (number always first)
fruits.sort();
console.log(fruits);


//REVERSE 
//arranges the elements in the array in reverse
fruits.reverse();
console.log(fruits);

let alphanumeric = [2,5,1,'a',10,'c','b','2','1',9,'9','05'];
alphanumeric.sort(function(a,b){
	return a - b;
});
console.log(alphanumeric);