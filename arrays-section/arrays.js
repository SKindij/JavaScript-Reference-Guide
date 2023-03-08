'use strict'

// adding bulleted list to web page, taking data from array
let carsArray = ['BMW', 'Mercedes', 'Volkswagen', 'Toyota'];
// html <ul class='car-list'> </ul>
const carList = document.querySelector('.car-list');
  let list = '';
  carsArray.forEach(item => { list += `<li>${ item }</li>` });  
  carList.innerHTML = list;
/*
    <ul class='car-list'>
	  <li>BMW</li>
	  <li>Mercedes</li>
	  <li>Volkswagen</li>
	  <li>Toyota</li>	
    </ul>
*/

let arr = ["John", "Mike", "Andry", "Shenon"];
arr.forEach((item, index) => {
    // item - array element at current iteration
    // index - ordinal number of element in array
    console.log(`${index}: ${item}`);
})
/*
    0: John
    1: Mike
    2: Andry
    3: Shenon
*/




