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
>    ourData.map(value => value + 10); // => [53, 50, 31, 11]
> ```
> > ```javascript 
> >  let banknotes = [200, 100, 50, 50, 200, 50, 20, 500, 20, 1000, 100];
> >
> >
> >
> >
> > ```













