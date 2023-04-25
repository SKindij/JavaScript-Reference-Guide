'use strict';

localStorage.setItem('day', 12);
localStorage.setItem('month', 3);
localStorage.setItem('some', 'something');

function getDay() { return Number(localStorage.getItem('day')); };
function getMonth() { return Number(localStorage.getItem('month')); };
/*
  const day = getDay();
  const month = getMonth();
*/
console.log(`date: ${getDay()}, month: ${getMonth()}`);
console.log('there is', localStorage.getItem('some'));

console.log('start the cycle for 7 days');
for (let index = 1; index <= 7; index++) {
  const presentDay = getDay();
  const presentMonth = getMonth();
    console.log(`   day-${index}! date: ${presentDay}, month: ${presentMonth}`);
  const nextDay = presentDay + 1;
    localStorage.setItem('day', nextDay);     
};
console.log('finish the cycle');

localStorage.removeItem('some');

console.log('clearing web-storage');
localStorage.clear();
