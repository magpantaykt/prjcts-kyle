//check if script file is properly asociated with the html file
console.log('Hello World!');


/*
	1. Create a function named getUserInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- key - data type

		- name - String
		- age -  Number
		- address - String
		- isMarried - Boolean
		- petName - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.

*/

	function getUserInfo(){
		let userInfo = {name:'Kyle Magpantay', age:23, address:'Trece Martires City', isMarried: false, petName: 'Kate'};
		return userInfo;
	};

	let userInfo = getUserInfo();
	//Print Return Results
	console.log(userInfo);
/*
	2. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
		- Note: the array returned should have at least 5 elements as strings.
			    function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
	
*/

	let getArtistsArray = function(){
		let artistList = ['SNSD', 'The Script', 'EXO', 'Lee Hi', 'We The Kings'];
		return artistList;
	};

	let faveArtist = getArtistsArray();
	console.log(faveArtist);


/*
	3. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/

	function getSongsArray(){
		let songsList = ['Way To Go', 'Please Do Not Lean On Me', 'Check Yes Juliet', 'Intentions', 'One'];
		return songsList;
	};

	let faveSongs = getSongsArray();
	console.log(faveSongs);


/*
	4. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/

	let getMoviesArray = function (){
		let movieList = ['Se7en','Lie To Me','Harry Potter','Tangled', 'London Has Fallen'];
		return movieList;
	};


	let faveMovies = getMoviesArray();
	console.log(faveMovies);


/*
	5. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			Note: This is optional.
			
*/


	function getPrimeNumberArray(){
		let primeList = [1,3,5,7,11];
		return primeList
	};


	let primeNum = getPrimeNumberArray();
	console.log(primeNum); 


	//Do not modify
	//For exporting to test.js
	//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
	try{
		module.exports = {

			getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
			getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
			getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
			getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
			getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,

		}
	} catch(err){


	}