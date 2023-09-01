// console.log("Hello World");

//Strictly Follow the property names and spelling given in the google slide instructions.
//Note: Do not change any variable and function names. 
//All variables and functions to be checked are listed in the exports.

// Create an object called trainer using object literals

// Initialize/add the given object properties and methods

// Properties

// Methods

// Check if all properties and methods were properly added


// Access object properties using dot notation

// Access object properties using square bracket notation

// Access the trainer "talk" method


// Create a constructor function called Pokemon for creating a pokemon


// Create/instantiate a new pokemon


// Create/instantiate a new pokemon


// Create/instantiate a new pokemon


// Invoke the tackle method and target a different object


// Invoke the tackle method and target a different object


let trainer = {
    name: "Ashton Ketchum",
    age: 10,
    pokemon: ['Pikachu','Charizard','Squirtle','Bulbasaur'],
    friends: {
        hoenn: ['May', 'Max'],
        kanto: ['Brock', 'Misty']
    }
};

trainer.talk = function(){
    let pokeMon = prompt('Choose your pokemon:'+trainer.pokemon);
    if (trainer.pokemon.includes(pokeMon)){
        return pokeMon+", I choose you!";
    }
    else{
        alert("Please, choose one of your pokemon only");
        return "Please, choose one of your pokemon only";
    }
    
}

console.log('Result of dot notation: ');
console.log(trainer.name);
console.log('Result of square bracket notation');
console.log(trainer['pokemon']);

console.log(trainer.talk())


function Pokemon(name,level){
    this.name = name;
    this.level = level;
    this.health = 10*level;
    this.attack = 2*level;

    this.tackle = function(target){
        if (target.health > 0){
            console.log(this.name + " tackled " + target.name);
            console.log(target.name + " health reduced to", target.health-=this.attack);
        }

        if (target.health <= 0){
            console.log(target.name + " health is at", target.health);

            target.faint(target);
        }

    }

    this.faint = function(target){
        console.log(target.name+" has fainted");
    }
}

let pikachu = new Pokemon('Pikachu', 50);
let rattata = new Pokemon('Rattata', 25);

console.log(pikachu);
console.log(rattata);

pikachu.tackle(rattata);
pikachu.tackle(rattata);
pikachu.tackle(rattata);



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null

    }
} catch(err){ 

}