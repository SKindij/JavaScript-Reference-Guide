_All cars have the same properties, but the property values differ from car to car.<br>
All cars have the same methods, but the methods are performed at different times._

You can access object properties in two ways:
  + objectName.propertyName;
  + objectName["propertyName"];

Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.
  + objectName.methodName();

> To check if an object property exists, use the ``in`` operator:
> > ```javascript
> >  const user = { firstName: 'Maryna', username: 'wild princess' };
> >    console.log('firstName' in user);  //=> true
> >    console.log('age' in user);  //=> false
> >  // spread syntax is used to copy objects:
> >  const copy = { ...user };
> >    console.log(copy);  //=> {firstName: 'Maryna', username: 'wild princess'}
> > ```
> ``for...in`` allows to loop through enumerated properties (which developer adds to object, including the properties of the prototype).
> > ```javascript
> >  const developer = {  name: 'Serhio',  language: 'JavaScript',  company: 'Google'   };
> >    for (const key in developer) {
> >      console.log(`${key} – ${ developer[key]}`)
> >   }; //     name – Serhio         language – JavaScript           company – Google
> > ```
> > > String property names will be listed in the order they were assigned to the object.<br>
> > > Numerical properties will be listed in ascending order.
___

**Map** - a collection for storing data of any type in the form of **[key, value]** pairs.
> ``const map = new Map( [ ['js', 'JavaScript'], ['css', 'Cascading Style Sheets'] ] )``
> > ``map.set(key, value)`` - sets the value;<br>
> > ``map.get(key)`` - returns the value;<br>
> > ``map.delete(key)`` - deletes a specific value;<br>
> > ``map.clear()`` – completely clears the collection;<br>
> > > ``someData.has(key)``<br>
> > > ``map.forEach(  (key, value) => { console.log(`${key} - ${value}`) }  )``

There are 3 methods to iterate through the Map collection:
    - ``map.entries()``
    - ``map.keys()``
    - ``map.values()``
> > > They can be sorted by the **for..of** loop.

If we already have an ordinary object, and we would like to create a Map from it, then the built-in method **Object.entries(obj)** will help, which receives the object and returns an array of key-value pairs for it
> ```javascript
>  let obj = { name: "Piggy", age: 30 };
>    let map = new Map(Object.entries(obj));
>      console.log( map ); //=> Map(2) {'name' => 'Piggy', 'age' => 30}
> ```

We can use the **Object.fromEntries** method, which will perform the reverse action: transform the received array of [key, value] pairs into an object.
> ```javascript
>  let prices = Object.fromEntries([ ['banana', 46], ['orange', 78], ['apple', 24] ]);
>    console.log( prices ); //=> {banana: 46, orange: 78, apple: 24}
> ```
___

**Set** - collection for storing unique values (without keys) of any type.
(_this is a non-indexed collection, you can put an element there, but you can't get it_)
> ``let valuesSet = new Set([iterable]);`` - _values of [iterator object] are copied to Set_
> > + ``valuesSet.add(element);`` - _adds a new value to Set, returns Set_
> > + ``valuesSet.size;`` - _returns number of elements in set_
> > + ``valuesSet.has(value);`` - _returns true if value is present in Set, false otherwise_
> > + ``valuesSet.delete(value);`` - _removes value, returns true if value is present in the set, false otherwise_
> > + ``valuesSet.clear();`` – _removes all values of Set_

We can iterate over the contents of the set object both using the for..of method and using forEach:
> ```javascript
>  let fruitArr = ["apples", "oranges", "bananas", "apples", "bananas"];
>  let fruitSet = new Set(fruitArr);
>    for (let value of fruitSet) => console.log('unique: ', value);
>    fruitSet.forEach( (value, valueAgain, set) => { console.log('unique: ', value);} );
>
>  console.log( fruitSet.entries() ); // => {'apples' => 'apples', 'oranges' => 'oranges', 'bananas' => 'bananas'}
> ```

> ``const uniqueValuesArr = [ ...new Set(nonUniqueArr) ]``
___

## Object oriented programming in JavaScript
In OOP, an object is a block containing **information** (state/attributes) and **operations** (methods).
> There are two types of object properties:
>    + data properties
>    + properties of accessors
> > ```javascript
> >   let obj = {
> >     get propName() { } // "code executed while getting obj.propName"
> >     set propName(value) { } // "code executed when setting obj.propName = value"
> >     // used as wrappers over "real" property values to gain more control over operations with them
> >   };
> > ```

> For example, if we want to disallow names that are too short, we can have **name setter** and store value in separate **_name property**:
> >  ```javascript
> >    let user = { 
> >      get name() { return this._name; },
> >      set name(value) { 
> >        if (value.length < 4) { alert("name is too short, at least 4 characters are required"); return; }
> >        this._name = value; }
> >    };
> >    
> >    user.name = "Pedroso";
> >   console.log(user.name);      // => Pedroso
> >    user.name = "Fil";       // alert "..."
> > ```
> _There is convention that properties starting with underscore "_" are internal and should not be used from outside object._

