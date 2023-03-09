// ! run and check each example in the console separately

// sample 1 <creating and copying objects>
let Car = { wheels: 4 };

function displayCar() { 
  let result = "A Beautiful " + this.year + " " + this.model;
  console.log(result); 
}

let myFord = {
__proto__: Car,
  color: "frozen white",
  model: "Mondeo 4",
  year: 2011,
  engine: { cylinders: 4, size: 2.3 }
};

myFord.displayCar = displayCar;
myFord.displayCar();     // => A Beautiful 2011 Mondeo 4

Car.type = 'sedan';
console.log(Car); // => {wheels: 4, type: 'sedan'}
console.log(myFord.type);  // => sedan


// sample 2 <property getters and setters>
let user = { name: "Takeshi", surname: "Kovacs",
    get fullName() { return `${this.name} ${this.surname}`; },
    set fullName(value) { [this.name, this.surname] = value.split(" "); }
};

user.fullName = "Kristin Ortega";    
console.log(user.name);        // => Kristin
console.log(user.surname);       // => Ortega


// sample 3 <prototypal inheritance>
let ParrotGrandfather = function() {}; 
ParrotGrandfather.prototype = { species: 'Parrot',  paws: 2 };
    // grandfather parrot with two paws
let ParrotFather = function() {}; 
ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);
    // parrot's father inherited everything from grandfather
let ParrotSon = function() {}; 
ParrotSon.prototype = Object.create(ParrotFather.prototype);
    // parrot's son inherited everything from his father

let grandfather = new ParrotGrandfather();
let father = new ParrotFather()
let son = new ParrotSon();

console.log(grandfather.species, father.species, son.species); 
    // => Parrot Parrot Parrot
console.log(grandfather.paws, father.paws, son.paws); // => 2 2 2

ParrotGrandfather.prototype.paws++; // // grandfather changes the number of paws
console.log(grandfather.paws, father.paws, son.paws); // => 3 3 3 

ParrotFather.prototype.species = 'eagle'; // father changes his appearance
console.log(grandfather.species, father.species, son.species); // parrot eagle eagle 
    // grandfather remained a parrot, father and son became eagles

ParrotSon.prototype.paws--; // son reduced the number of paws
console.log(grandfather.paws, father.paws, son.paws);  // => 3 3 2 

ParrotGrandfather.prototype.species = 'seagull'; // grandfather decided to become a seagull
console.log(grandfather.species, father.species, son.species); // => seagull eagle eagle 
    // now grandfather is a seagull, father and son are eagles





