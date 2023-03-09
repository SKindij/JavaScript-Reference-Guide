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







