/*
    Create functions which can manipulate our arrays.
*/

/*
    Important note: Don't pass the arrays as an argument to the function. The functions must be able to manipulate the current arrays.
*/

let registeredPokemon = [];
let registeredTrainers = [];

/*
    
   1. Create a function called addPokemon which will allow us to register/add new pokemon into the registeredPokemon list.
        - this function should be able to receive a string.
        - add the received pokemon into the registeredPokemon array.
*/

function addPokemon(newPokemon){
    newPokemon = newPokemon[0].toUpperCase()+newPokemon.slice(1);
    if (registeredPokemon.includes(newPokemon)){
        return `${newPokemon} is already registered`;
    }
    else{
        registeredPokemon.push(newPokemon);
        return `Thank you for registering ${newPokemon}`;
    }
    
}

// console.log(addPokemon('Pikachu'));
// console.log(addPokemon('Rattata'));
// console.log(addPokemon('Bulbasaur'));
// console.log(addPokemon('Squirtle'));
// console.log(addPokemon('Charizard'));

// console.log(registeredPokemon);
    
/*
    2. Create a function called deletePokemon which will delete the last pokemon you have added in the registeredPokemon array.
        - If the registered is not empty, delete the last pokemon in the registeredPokemon array
        - Else return a message:
            - "No registered pokemon."
        - Invoke the function.
        - Outside the function log the friendsList array.

*/

function deletePokemon(){
    if (registeredPokemon.length > 0){
        let deleted = registeredPokemon.pop();
        return `${deleted} is deleted`;
    }
    else{
        return "No registered pokemon.";
    }
}

// let deletePokemonFunc = deletePokemon();
// console.log(deletePokemonFunc);
// console.log(registeredPokemon);

/*
    3. Create a function called displayNumberOfPokemons which will display the amount of registeredPokemon in our array,
            - If the registeredPokemon array is empty return the message:
                - "No pokemon registered."
            - Else If the registeredPokemon array is not empty, return the number of registered Pokemons.

*/

function displayNumberOfPokemons(){
    if (registeredPokemon.length === 0){
        return "No pokemon registered.";
    }
    else{
        return "The amount of registered Pokemons are: "+registeredPokemon.length;
    }    
}

// console.log("The amount of registered Pokemons are:",displayNumberOfPokemons());

/*
    4. Create a function called sortPokemon which will  sort the registeredPokemon array in alphabetical order when invoked:
        - If the registeredPokemon array is empty return the message:
            - "No pokemon registered."
        - Else, sort the registeredPokemon array.

*/

function sortPokemon(){
    if (registeredPokemon.length === 0){
        return "No pokemon registered.";
    }
    else{
        registeredPokemon.sort();
        return "Sorted pokemon list: "+registeredPokemon.sort();
    }   
}

// console.log(sortPokemon());
// console.log(registeredPokemon);


/*
    5. Create a function called registerTrainer which takes 3 arguments, name, level and an array of pokemons.
        - Inside the function, create an object called trainer.
            - The trainer object should have 3 properties, trainerName, trainerLevel and pokemons
            - Pass the values of the appropriate parameter to each property.
        - Add the trainer variable to the registeredTrainers array.

*/

function registerTrainer(name, level, pokemonArray){
    let trainer = {
        trainerName: name,
        trainerLevel: level,
        pokemonArray: pokemonArray
    };

    registeredTrainers.push(trainer);
    return registeredTrainers;
}

// registerTrainer('Ash Ketchum',10,['Pikachu','Charizard','Squirtle','Bulbasaur']);

// console.log("Registered trainers are:");
// console.log(registeredTrainers);



//Do not modify
//For exporting to test.js
try{
    module.exports = {

        registeredPokemon: typeof registeredPokemon !== 'undefined' ? registeredPokemon : null,
        registeredTrainers: typeof registeredTrainers !== 'undefined' ? registeredTrainers : null,
        addPokemon: typeof addPokemon !== 'undefined' ? addPokemon : null,
        deletePokemon: typeof deletePokemon !== 'undefined' ? deletePokemon : null,
        displayNumberOfPokemons: typeof displayNumberOfPokemons !== 'undefined' ? displayNumberOfPokemons : null,
        sortPokemon: typeof sortPokemon !== 'undefined' ? sortPokemon : null,
        registerTrainer: typeof registerTrainer !== 'undefined' ? registerTrainer : null

    }
} catch(err){

}