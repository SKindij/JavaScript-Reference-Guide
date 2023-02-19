# Array prototype methods

> ```javascript
>  let myArray = ["anything"];
>  myArray.push("somePush1", "somePush2"); // => 3 (returned new length) & adding data to the end of the array
>    myArray; // => (3) ['anything', 'somePush1', 'somePush2']
>  myArray.unshift("someUnshift1", "someUnshift2"); // => 5 (returned new length) & adding data to the begin of the array
>    myArray; // => (5) ['someUnshift1', 'someUnshift2', 'anything', 'somePush1', 'somePush2']
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
> >    yourArray; // => (5) ['anything', 'dataA', 'dataB', 'dataC', 'anything']
> >  let yourCopy = Array.from(yourArray);
> >    yourCopy.length = 4;
> >      yourCopy; // => (4) ['anything', 'dataA', 'dataB', 'dataC']
> > ```







