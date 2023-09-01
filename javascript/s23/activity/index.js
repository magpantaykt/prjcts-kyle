// console.log('Hello World!');



// console.log("Hello World");


//Objective 1
//Add code here
//Note: function name is numberLooper

function numberLooper(number){
	let message;

	for (let start = number; start >= 0; start--){

		if (start <= 50){
			message = 'The current value is at '+start+'. Terminating the loop.';
			console.log(message);
			break;
		}
		if (start%10===0){
			message = 'The number is divisible by 10. Skipping the number.';
			console.log(message);
			continue;
		}
		if (start%5===0){
			console.log(start);
		}
	}
	return message;
}


//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

//Add code here
for(let i=0; i < string.length; i++){
	//console.log(string[i]);
	if (string[i] == 'a' ||
		string[i] == 'e' ||
		string[i] == 'i' ||
		string[i] == 'o' ||
		string[i] == 'u'){
			continue;
	}
	else{
		filteredString += string[i];
	}
}

console.log(filteredString);




//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null,
        numberLooper: typeof numberLooper !== 'undefined' ? numberLooper : null
    }
} catch(err){

}