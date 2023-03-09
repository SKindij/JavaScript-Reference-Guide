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





