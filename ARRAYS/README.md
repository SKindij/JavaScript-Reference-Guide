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

## <a name="methods-not-ch"></a>Methods that do not change initial array:

### Array search methods
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

>    console.log(); // =>





► .concat

► .join

► .filter

► .flat

.flatMap

.forEach

.map

.reduce

.reduceRight

.toString

.toLocaleString


## 









## <a name="methods-ch"></a>Methods that change initial array:

### Array Mutator Methods
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






► .sort 

► .reverse 

► .fill 

► .copyWithin









## <a name="other-methods"></a>Other methods:

► .split 

► .splice 

► .slice 

► Array.isArray







> > ```javascript   
> >  let yourData = ["dataA", "dataB", "dataC"];
> >  let yourArray = ["anything", ...yourData, "anything"];
> >    yourArray; // => ['anything', 'dataA', 'dataB', 'dataC', 'anything']
> >  let yourCopy = Array.from(yourArray);
> >    yourCopy.length = 4;
> >      yourCopy; // => ['anything', 'dataA', 'dataB', 'dataC']
> > ```
> > > ```javascript 
> > >  // To check if a value is an array, there is an Array.isArray() method.
> > >  Array.isArray(yourData); // => true
> > >    // to return the string from the specified array
> > >    yourData.join(); // => 'dataA,dataB,dataC'
> > >    yourData.join(" "); // => 'dataA dataB dataC'
> > >    yourData.join("-"); // => 'dataA-dataB-dataC'
> > > ```

## Array iteration methods

> ```javascript
>  let ourData = [1981, 1984, 2003, 2023];
>    // calculate the sum of all array elements
>    let ourSum = 0;
>    ourData.forEach( value => {ourSum += value;} );
>       ourSum; // => 7991
>    // to modify an array by changing each of its elements
>    ourData.forEach( function(value, index, array) {array[index] = 2024 - value;} );
>      ourData; // => [43, 40, 21, 1]
>    // the following method returns a new array without modifying the original array
>    ourData.map( value => value + 10 ); // => [53, 50, 31, 11]
>    // Final result of running the reducer across all elements of the array is a single value.
>    ourData.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 ); // => 7991
>    ourData.reduce( (accumulator, currentValue) => accumulator * currentValue, 1 ); // => 15925862998976
>    ourData.reduce( (acc, value) => (acc > value) ? acc : value ); // => 2023
> ```



## Array processing methods

>  ```javascript 
>  let banknotes = [200, 100, undefined, 50, 50, 200, 50, 20, 500, 20, null, 1000, 100];
>    banknotes.filter( item => item !== undefined && item !== null ); // => [200, 100, 50, 50, 200, 50, 20, 500, 20, 1000, 100]
>    banknotes.filter( item => item >= 100 ); // => [200, 100, 200, 500, 1000, 100]
>      banknotes; // => [200, 100, undefined, 50, 50, 200, 50, 20, 500, 20, null, 1000, 100]
>
>  let stringBirds = 'stork, crane, heron, duck', stringMammals = 'capybara, beaver, raccoon, skunk';
>  let arrayBirds = stringBirds.split(", "), arrayMammals = stringMammals.split(", ");
>    let arrayAnimals = arrayBirds.concat( arrayMammals );
>      arrayAnimals; // => ['stork', 'crane', 'heron', 'duck', 'capybara', 'beaver', 'raccoon', 'skunk']
> ``` 
> > ```javascript  
> >    // .slice(begin, end) returns new array containing copy of part of the original array without changing it 
> >    arrayAnimals.slice(1, 7);  // => ['crane', 'heron', 'duck', 'capybara', 'beaver', 'raccoon']
> >    // to add several elements to the array: .splice(position, 0, new_element_1, new_element_2, ...)
> >    arrayAnimals.splice( 3, 0, 'quail', 'platypus');
> >      arrayAnimals; // => ['stork', 'crane', 'heron', 'quail', 'platypus', 'duck', 'capybara', 'beaver', 'raccoon', 'skunk']
> >      
> >  ```

## Array sorting methods.

>  ```javascript 
>  // The ourArray.reverse() method reverses the order of the elements in the array.
> // This method modifies the array on which it was called and returns a reference to it.
>  let arrayAnimals = ['stork', 'crane', 'heron', 'quail', 'platypus', 'duck', 'capybara', 'beaver', 'raccoon', 'skunk'];
>  arrayAnimals.reverse(); // => ['skunk', 'raccoon', 'beaver', 'capybara', 'duck', 'platypus', 'quail', 'heron', 'crane', 'stork']
>    ```
> > ```javascript
> >  arrayAnimals.sort(); // => ['beaver', 'capybara', 'crane', 'duck', 'heron', 'platypus', 'quail', 'raccoon', 'skunk', 'stork']
> >    // for example, let's sort the animals by the length of their name
> >    arrayAnimals.sort( function(first, second) {
> >      return first.length - second.length; } ); // => ['duck', 'crane', 'heron', 'quail', 'skunk', 'stork', 'beaver', 'raccoon', 'capybara', 'platypus']
> >    // for example, let's sort bills from larger to smaller  
> >    let banknotes = [200, 100, 50, 50, 200, 50, 20, 500, 20, 1000, 100];
> >    banknotes.sort( function(first, second) {
> >      return second - first; } ); // => [1000, 500, 200, 200, 100, 100, 50, 50, 50, 20, 20]
> > ```


>  ```javascript  
>  let copiedArray = [...myArray];
>    copiedArray; // => ["someUnshift2", "anything", "somePush1"]
> ```




