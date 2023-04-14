# Arrays

## <a name="basics"></a>Basics:




## <a name="methods-not-ch"></a>Methods that do not change initial array:





## <a name="methods-ch"></a>Methods that change initial array:








## <a name="other-methods"></a>Other methods:






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

## Array search methods

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







