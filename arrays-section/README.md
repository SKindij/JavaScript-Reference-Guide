## Array prototype methods

> ```javascript
>  let myArray = ["anything"];
>  myArray.push("somePush1", "somePush2"); // => 3 (returned new length) & adding data to the end of the array
>    myArray; // => ['anything', 'somePush1', 'somePush2']
>  myArray.unshift("someUnshift1", "someUnshift2"); // => 5 (returned new length) & adding data to the begin of the array
>    myArray; // => ['someUnshift1', 'someUnshift2', 'anything', 'somePush1', 'somePush2']
>    
>  myArray.pop();  // => 'somePush2' - removes element from end of array and returns it
>  myArray.shift(); // => 'someUnshift1' - removes element from begin of array and returns it
>    myArray; // => ["someUnshift2", "anything", "somePush1"]
>    
>  let copiedArray = [...myArray];
>    copiedArray; // => ["someUnshift2", "anything", "somePush1"]
> ```
> > ```javascript   
> >  let yourData = ["dataA", "dataB", "dataC"];
> >  let yourArray = ["anything", ...yourData, "anything"];
> >    yourArray; // => ['anything', 'dataA', 'dataB', 'dataC', 'anything']
> >  let yourCopy = Array.from(yourArray);
> >    yourCopy.length = 4;
> >      yourCopy; // => ['anything', 'dataA', 'dataB', 'dataC']
> > ```

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

## array search methods

>  ```javascript 
>   let banknotes = [200, 100, 50, 50, 200, 50, 20, 500, 20, 1000, 100];
>     // find something in the array
>     banknotes.indexOf(50); // => 2
>     banknotes.includes(1000); // => true
>       banknotes.find( value => value % 250 === 0 ); // => 500
>       banknotes.findIndex( value => value === 500 ); // => 7
>     // check a certain condition for the array
>     banknotes.every( value => value % 20 === 0); // => false
>     banknotes.some( value => value % 20 === 0); // => true
>  ```













