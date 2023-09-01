// JSON Objects 


/*
-JSON stands for JavaScript Object Notation
-used in other programming languages
-core JS has built-in JSON object contains methods for passing JSON objects and converting into JS objects

SYNTAX:
{
	"properyA": "valueA",
	"propertyB": "valueB"
}

*/

//JSON Objects
/*

{
	"city": "Quezon City",
	"province": "Metro Manila",
	"country": "Philippines"
}

*/

//JSON Arrays
/*

"cities":[
	{ "city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
	{ "city": "Manila City", "province": "Metro Manila", "country": "Philippines"},
	{ "city": "Makati City", "province": "Metro Manila", "country": "Philippines"}
]


*/


//JSON Methods (GET - fetch data from source, POST - create or add new data, PUT - update or edit data, DELETE - remove data) (REQUEST DATA AND GET RESPOSE)
//JSON is an object that containes methods
/*

- stringified JSON is a JavaScript object converted into a string to be used in other functions of a JS application
-they're commonly used in HTTPS requests where info is required to be sent and received in a stringified JSON format.

*/
//Request are an important part in programming where an application communicates with backend application to perform different tasks such as getting/creating data to a database

//A frontend application is an application that is used to interact with users that perform tasks and display information
//Bakend are commonly used for all business logic and data processing


let batchesArr = [{ batchName: 'batch-X'}, {batchName: 'batch-Y'}];

//the result from stringify
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
	name:'John',
	age: 31,
	address: {
	city: "Manila",
	country: "Philippines"
	}
})

console.log(data)

//In JS, the JSON.stringify method is used to convert a JS object into JSON formatted string
//JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse

/*
SYNTAX

JSON.stringify({
	propertyA: "valueA",
	propertyB: "valueB",
})


*/


let firstName = prompt("What is your first name: ");
let lastName = prompt("What is your lastName: ");
let age = prompt("What is your age: ");
let address = {
	city: prompt('What city do you live in: '),
	country: prompt('What country do you live in: ')
};


let otherData = JSON.stringify({
	firstName: firstName,
	lastName: lastName,
	age: age,
	address: address
})

console.log(otherData);


//CONVERTING STRINGIFY JSON INTO JS OBJECTS (using parse)
//OBJECTS ARE COMMON DATA TYPE USED IN APPLICATION  BECAUSE OF THE COMPLEX DATA STRUCTURE THAT CAN BE CREATED OUT OF THEM
//INFORMATION IS COMMONLY SENT TO APPLICATION IN STRINGIFY JSON AND THEN CONVERTED INTO OBJECTS
//THIS HAPPENS BOTH FOR SENDING INFORMATION TO BACKEND AND FOR SENDING BACK INFORMATION TO FRONTEND

let batchesJSON	= 
`[
	{"batchName": "batch X"},
	{"batchName": "batch Y"}
]`;
console.log(JSON.parse(batchesJSON));


let stringifiedObject = `{
	"name": "John",
	"age": 31,
	"address": {
		"city": "Quezon City",
		"country": "Philippines"
	}
}`;
console.log(JSON.stringify(stringifiedObject));