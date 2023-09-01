// console.log('Hello World!');


//WHILE LOOP
console.log('WHILE LOOP');

let count = 5; //initial value

while(count !== 0){ //the condition
	//statements
	console.log('Count: ',count)
	console.log('Thank you for the pizza!');
	count--;
}


let counter = 0;
while(counter<6){
	console.log(counter);
	counter++;
}

console.log('-----------------------------------------------------------------');

//DO WHILE LOOP
// the Number function works similarly to the parseInt function
// both differe significantly in terms of processes they undertake in converting information into a number data type  

console.log('DO WHILE LOOP'); 


//let number = Number(prompt("Give me a number: "));
let number = 5
do{
	//statements
	console.log("Do while: ",number);
	number += 1;
}
while(number < 10);


let start = 146;
let end = 162;

while (start <= end){
	console.log(start);
	start++;
}



console.log('-----------------------------------------------------------------');


//FOR LOOP
//a for loop is more flexible than while or do while loop
//it consist of three parts: initialization, condition, and iteration
// the for loop encapsulates the initialization, condition and iteration all within its structure
//this can lead a cleaner and more concise code as you dont need to declare its components outside the loop

//parts
//the initialization vale that will track the progression of the loop, the beginning of the loop that is set as the start of the loop

//condition that will be evaluated which will determine whther the loop would do the statements inside its scope

//iteration that indicates how the loop would advance to fulfill/reach the condition

console.log('FOR LOOP');

for(let counter = 0; counter < 6; counter++){
	console.log(counter);
}


for (let start=227; start<=756; start+=529){
	console.log(start);
}


let myName = 'Jacob';
for (let i = 0; i < myName.length; i++){
	console.log(myName[i].toLowerCase());

	if (myName[i].toLowerCase() == "a" || 
		myName[i].toLowerCase() == "e" || 
		myName[i].toLowerCase() == "i" || 
		myName[i].toLowerCase() == "o" || 
		myName[i].toLowerCase() == "u"){
			console.log(myName[i],"is a vowel")
	}
	else{
		console.log(myName[i],"is not a vowel")
	}
}

console.log('-----------------------------------------------------------------');

//CONTINUE AND BREAK
//continue - tells the code to continue to the next iteration so this ignores all statements after the continue statement
//break - tells the code to terminate or stop the loop even if the expression or condtion of the loop defines it should execute 



console.log('CONTINUE AND BREAK');


let name = 'alejandro';
for(let i = 0; i < name.length; i++){
	//current letter that is printed out based on its index
	if (name[i].toLowerCase() === 'a'){
		console.log('Continue to the next iteration');
		continue;
	}
	if (name[i].toLowerCase() === 'd'){
		console.log('Break it down');
		break;
	}
	console.log(name[i]);
}


for(let count=0; count<=20; count++){
	if (count%2===0){
		console.log(count);
		console.log('Continue');
		continue;
	} 
	if (count%4 === 0){
		console.log(count);
		console.log('Break');
		break;		
	}
}