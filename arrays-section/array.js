'use strict'
// filtration
const employees = ['Ira', 'Olia', 'Ihor', 'Nastia', 'Leon', 'Ksenia'];
const shortNames = employees.filter( name => name.length < 5 );

console.log(employees); // =>  ['Ira', 'Olia', 'Ihor', 'Nastia', 'Leon', 'Ksenia']
console.log(shortNames); // =>  ['Ira', 'Olia', 'Ihor', 'Leon']

// mapping
const answers = ['VoltRon', 'OptiMus', 'MegAtron', 'GeneSius'];
const results = answers.map( item => item.toLowerCase() );

console.log(answers); // =>  ['VoltRon', 'OptiMus', 'MegAtron', 'GeneSius']
console.log(results); // =>  ['voltron', 'optimus', 'megatron', 'genesius']

// other
answers.forEach( function(value, index, array) {array[index] = value + '-bot'} );
console.log(answers); // => ['VoltRon-bot', 'OptiMus-bot', 'MegAtron-bot', 'GeneSius-bot']

console.log(results.some(item => item.length === 7)); // => true
