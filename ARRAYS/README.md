# Arrays

## <a name="basics"></a>Basics:

> ``` javascript
>  let emptyArray = []; // declaration
>  let valuesArray = [11, 12, 13, 14, 15]; // initialization
>    console.log( valuesArray[2] ); // accessing => 13
>    console.log( valuesArray.length ); // => 5
>  // multi-dimensional arrays
>  let tableLikeArray = [
>      [1, 2, 3],
>      [4, 5, 6],
>      [7, 8, 9]
>  ];
>  console.log( tableLikeArray[1][2] ); // => 6
> ```

- - -

## <a name="methods-not-ch"></a>Methods that do not change initial array:

### array search methods
>  ```javascript 
>  const fruits = ['apple', 'banana', 'orange', 'pear', 'kiwi', 'orange', 'pineapple'];
>    // searche for specified value and return index of first matching element
>      console.log( fruits.indexOf('orange') ); // => 2
>    // returns index of last matching element
>      console.log( fruits.lastIndexOf('orange') ); // => 5
>     
>  let banknotes = [200, 100, 50, 50, 200, 50, 20, 500, 20, 1000, 100];
>    // return value of first element that satisfies provided testing function or undefined
>      console.log( banknotes.find(value => value % 250 === 0) ); // => 500
>    // return index of first element that satisfies provided testing function or -1
>      console.log( banknotes.findIndex(value => value === 500) ); // => 7
>    // determine whether array includes certain value among its elements
>      console.log( banknotes.includes(1000) ); // => true
>    // determine whether at least one element passes test
>      console.log( banknotes.some(value => value % 40 === 0) ); // => true
>    // determine whether all elements pass test 
>     console.log( banknotes.every(value => value % 40 === 0) ); // => false   
>  ```

### array conversion methods
>  ```javascript
> const fruits = ['apple', 'banana', 'orange', 'pear', 'kiwi', 'orange', 'pineapple'];
>  // convert array to string, with each element separated by comma
>    const fruitString1 = fruits.toString();
>    console.log(fruitString1); // => 'apple,banana,orange,pear,kiwi,orange,pineapple'
>  // allows you to specify custom separator
>    const fruitString2 = fruits.join(' | ');
>    console.log(fruitString2); // => 'apple | banana | orange | pear | kiwi | orange | pineapple'
> 
>  let stringBirds = 'stork, crane, heron, duck', stringMammals = 'capybara, beaver, raccoon, skunk';
>  let arrayBirds = stringBirds.split(", "), arrayMammals = stringMammals.split(", ");
>    // combines two or more arrays into new array
>      let arrayAnimals = arrayBirds.concat( arrayMammals );
>      console.log(arrayAnimals); // => ['stork', 'crane', 'heron', 'duck', 'capybara', 'beaver', 'raccoon', 'skunk']
>  
> // `.toLocaleString()` method takes two optional parameters
> // - locale or array of locales for which to format numbers
> // - formatting options: currency code and number of decimal places
>  // display prices of products in local currency of customer
>    const productPrice = [50.99, 40.69, 70.29];
>    const customerLocale = 'de-DE'; // Germany
>    const formattedPrice = productPrice.toLocaleString(customerLocale, {
>      style: 'currency',
>      currency: 'EUR'
>    });
>    console.log(formattedPrice); // => 50,99 €, 40,69 €, 70,29 €
>  ```

## array iteration methods
> ```javascript
>  let ourData = [1981, 1984, 2003, 2022];
>    // return new updated array 
>    const updatedData = ourData.map( value => value + 50 );
>      console.log( updatedData ); // => [2031, 2034, 2053, 2072]         
>    // Final result of running reducer across all elements of array is single value.
>    const sumYears = ourData.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 ); 
>      console.log( sumYears ); // => 7990
>    const multiYears = ourData.reduce( (accumulator, currentValue) => accumulator * currentValue, 1 );
>      console.log( multiYears ); // => 15917990600064
>    const totalYears = ourData.reduce( (accumulator, currentValue) => {
>      return accumulator + (2024 - currentValue);
>    }, 0 );
>      console.log( totalYears ); // => 106
>    // find maximum value in array
>    const maxYear = ourData.reduce( (acc, value) => (acc > value) ? acc : value ); 
>      console.log( maxYear ); // => 2022
>  // reduceRight() is useful when you want to apply function to array from right-to-left    
>    // callback returns true for elements that should be included in new array
>    const filteredData = ourData.filter( value => value > 2000 );
>      console.log( filteredData ); // =>  [2003, 2022]
>    console.log( ourData ); // => [1981, 1984, 2003, 2022];
> ```

### array transformation methods
> ```javascript  
> const seaFish = ["salmon", "tuna", "cod", "halibut", "swordfish"];
>   // (begin, end) returns new array containing copy of part of the original array
>    seaFish.slice(1, 4);  // => ['tuna', 'cod', 'halibut']
>
> const seaFish = ["salmon", ["tuna", "cod"], "halibut", ["swordfish"]];
>   // new array with all sub-array elements concatenated recursively up to specified depth
>   const flattenedFish = seaFish.flat();
>   console.log(flattenedFish); // => ['salmon', 'tuna', 'cod', 'halibut', 'swordfish']
>
>  // .flatMap()
>  ```

- - -

## <a name="methods-ch"></a>Methods that change initial array:

### array mutator methods 1
> ```javascript
>  let myArray = ["anything"];
>    // adding data to end of array & return new length
>      myArray.push("somePush1", "somePush2"); // => 3
>      console.log( myArray ); // => ['anything', 'somePush1', 'somePush2']
>    // adding data to begin of array & return new length
>      myArray.unshift("someUnshift1", "someUnshift2"); // => 5
>      console.log( myArray ); // => ['someUnshift1', 'someUnshift2', 'anything', 'somePush1', 'somePush2']
>     // remove element from end of array and return it   
>       myArray.pop(); // => 'somePush2'
>     // remove element from begin of array and return it
>       myArray.shift(); // => 'someUnshift1'
>       console.log( myArray ); // => ["someUnshift2", "anything", "somePush1"]
> ```

### array mutator methods 2
> ```javascript 
> let arrayAnimals = ['beaver', 'capybara', 'crane', 'duck', 'heron', 'platypus', 'quail', 'raccoon', 'skunk', 'stork'];
>   // add several elements to array: .splice(position, 0, new_element_1, new_element_2, ...)
>    arrayAnimals.splice( 3, 0, 'quail', 'platypus');
>      arrayAnimals; // => ['beaver', 'capybara', 'crane', 'quail', 'platypus', 'duck', 'heron', 'platypus', 'quail', 'raccoon', 'skunk', 'stork']
>   // remove 2 elements from array and replace them
>     arrayAnimals.splice(2, 2, 'cat', 'dog'); // => ['crane', 'quail']
>      arrayAnimals; // => ['beaver', 'capybara', 'cat', 'dog', 'platypus', 'duck', 'heron', 'platypus', 'quail', 'raccoon', 'skunk', 'stork']
>  
>  const seaFish = ["salmon", "tuna", "cod", "halibut", "swordfish"];
>   // copy sequence of elements (targetIndex, startIndex, endIndex)
>     seaFish.copyWithin(3, 0, 2); // => ['salmon', 'tuna', 'cod', 'salmon', 'tuna']
>     seaFish.copyWithin(0, 3, 5); // => ['halibut', 'swordfish', 'cod', 'halibut', 'swordfish']
>   // .fill() method is used to fill all elements of array with static value
>     seaFish.fill("mackerel"); // => ['mackerel', 'mackerel', 'mackerel', 'mackerel', 'mackerel']
>  ```

### array sorting methods
>  ```javascript 
>  let arrayAnimals = ['stork', 'crane', 'heron', 'quail', 'platypus', 'duck', 'capybara', 'beaver', 'raccoon', 'skunk'];
>  
>    // reverse order of elements in array.
>    arrayAnimals.reverse(); 
>    console.log(arrayAnimals); // => ['skunk', 'raccoon', 'beaver', 'capybara', 'duck', 'platypus', 'quail', 'heron', 'crane', 'stork']
>
>    // by default, sorts elements alphabetically
>    arrayAnimals.sort(); 
>    console.log(arrayAnimals); // => ['beaver', 'capybara', 'crane', 'duck', 'heron', 'platypus', 'quail', 'raccoon', 'skunk', 'stork']
>    
>    // sort animals by length of their name
>    arrayAnimals.sort( function(first, second) {
>      return first.length - second.length; } ); 
>    console.log(arrayAnimals); // => ['duck', 'crane', 'heron', 'quail', 'skunk', 'stork', 'beaver', 'raccoon', 'capybara', 'platypus']
>    
>    // let's sort bills from larger to smaller  
>    let banknotes = [200, 100, 50, 50, 200, 50, 20, 500, 20, 1000, 100];
>    banknotes.sort( function(first, second) {
>      return second - first; } ); 
>    console.log(banknotes)  // => [1000, 500, 200, 200, 100, 100, 50, 50, 50, 20, 20]
> > ```

- - -

## <a name="other-methods"></a>Other methods:

### Array.isArray()
> ```javascript 
> let yourData = ["dataA", "dataB", "dataC"];
>  // check if value is an array
>  Array.isArray(yourData); // => true
> 
> // suppose you have API that can return either single object or array of objects, 
> // and you want to process data consistently regardless of response format
>  function processData(data) {
>    if (Array.isArray(data)) {
>      // data is an array of objects
>      console.log("Processing array of objects...");
>      // Process each object in the array
>      data.forEach(obj => {
>        // do something with each object
>        console.log(obj);
>      });
>    } else {
>      // data is a single object
>      console.log("Processing single object...");
>      // do something with the object
>      console.log(data);
>    }
>  }
>  
>  // example usage with an array of objects
>  const dataArray = [
>    { name: "Object A", value: 1 },
>    { name: "Object B", value: 2 },
>  ];
>  processData(dataArray);
>  
>  // example usage with a single object
>  const dataObject = { name: "Object C", value: 3 };
>  processData(dataObject);
> ```

### .forEach()
> ```javascript
>  let ourData = [1981, 1984, 2003, 2022];
>    // calculate sum of all array elements
>      let ourSum = 0;
>      ourData.forEach( value => {ourSum += value;} );
>        console.log( ourData ); // => [1981, 1984, 2003, 2022];
>        console.log( ourSum ); // => 7991
>    // modify array by changing each of its elements
>      ourData.forEach( function(value, index, array) {array[index] = 2024 - value;} );
>      console.log( ourData ); // => [43, 40, 21, 1]
> ```

- - -

## Array destructuring 

&ensp;It is feature in JS that allows you to extract values from arrays and assign them to variables in single statement. 
> ```javascript
> let numbers = [101, 102, 103];
> // values from `numbers` are extracted and assigned to variables `a`, `b`, and `c`
>  let [a, b, c] = numbers;
>    console.log(a); // => 101
>    console.log(b); // => 102
>    console.log(c); // => 103
> // swap values of two variables without need for temporary variable
>  let a = 41;
>  let b = 42;
>    [a, b] = [b, a]; 
>  console.log(a); // => 42
>  console.log(b); // => 41
> ```

## How to copy an array?

> > ```javascript   
> >  let someData = ["data-A", "data-B", "data-C"];  
> >    let sliceCopy = someData.slice();
> >      console.log(sliceCopy); // => ["data-A", "data-B", "data-C"]
> >    // recommend method
> >    let spreadCopy = [...someData];  
> >      console.log(spreadCopy); // => ["data-A", "data-B", "data-C"]
> >    let concatCopy = [].concat(someData); 
> >      console.log(concatCopy); // => ["data-A", "data-B", "data-C"]
> >    let fromCopy = Array.from(someData);  
> >      console.log(fromCopy); // => ["data-A", "data-B", "data-C"]      
> > // it allows you to create array from string or Set
> > let str = 'ARRAY';
> >   let charArray = Array.from(str);
> >   console.log(charArray); // => ['A', 'R', 'R', 'A', 'Y']
> > ```

