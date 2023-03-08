'use strict'

// magical ols VAR
var a = "I am outer top A";
function myTest() {
   var b = "I am functional B"; 
    console.log(a);
    console.log(b);
    console.log(c);
}
var c = "and I am C, which is at the bottom of all the code";
myTest();  // => all variable values are printed here;


// CLOSURE example
function makeCounter() { 
  let count = 0;
  return function() { return count++; };
}

let counterA = makeCounter(); 	 // this creates one function with its own reference
let counterB = makeCounter(); 	 // here another function is created with its own reference

console.log( counterA() ); 		 // A => 0
console.log( counterA() ); 		 // A => 1 - here goes his count (according to his link to function)

console.log( counterB() ); 		 // B => 0 - and here is another count (according to its link to function)

console.log( counterA() ); 		 // A => 2
console.log( counterB() ); 		 // B => 1

let anotherA = counterA;
let anotherB = counterB;
console.log( anotherA() ); 		 // A => 3 - counting continues here (following link on counterA)
console.log( anotherB() ); 		 // B => 2 - accounting continues here (following link on counterB)










