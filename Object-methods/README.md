&emsp; _All cars have the same properties, but the property values differ from car to car.<br>
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

&emsp; If we already have an ordinary object, and we would like to create a Map from it, then the built-in method **Object.entries(obj)** will help, which receives the object and returns an array of key-value pairs for it
> ```javascript
>  let obj = { name: "Piggy", age: 30 };
>    let map = new Map(Object.entries(obj));
>      console.log( map ); //=> Map(2) {'name' => 'Piggy', 'age' => 30}
> ```

&emsp; We can use the **Object.fromEntries** method, which will perform the reverse action: transform the received array of [key, value] pairs into an object.
> ```javascript
>  let prices = Object.fromEntries([ ['banana', 46], ['orange', 78], ['apple', 24] ]);
>    console.log( prices ); //=> {banana: 46, orange: 78, apple: 24}
> ```
___

&emsp; **Set** - collection for storing unique values (without keys) of any type.
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
&emsp; In OOP, an object is a block containing **information** (state/attributes) and **operations** (methods).
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

&emsp; In JavaScript, objects have special hidden property **[[Prototype]]** (_as specified in the language specification_), which can either be **null** or have a **reference to another object**.
> ```javascript
>  let arr = [1, 2, 3];
>    alert( arr.__proto__ === Array.prototype );           // => true
>    alert( arr.__proto__.__proto__ === Object.prototype );        // =>  true
>    alert( arr.__proto__.__proto__.__proto__ );           // =>  null
> ```

_The values null and undefined do not have any wrapper objects. And they don't have proper prototypes either._

&emsp; _Prototypes can only be used to read properties. And write/delete operations work only on the object itself. Regardless of where the method was defined: in the object or its prototype, the this keyword always points to the object before the dot._
___

&emsp; _Until ES5, the language did not allow your code to directly test or describe the difference between property characteristics: for example, whether a property is read-only or not._ <br>
&emsp; But in ES5, all properties are described using a property descriptor.
> ```javascript
> let myObject = { a: 17, b: 42 };
> Object.getOwnPropertyDescriptor( myObject, "a" ); // => {value: 17, writable: true, enumerable: true, configurable: true}
> ```
> > Object properties, in addition to *value, have three special attributes (so-called “flags”):
> >    * writable – if true, the value can be changed, otherwise it is read-only;
> >    * enumerable – if true, the property is taken into account in loops, otherwise the loops ignore it;
> >    * configurable – if true, the property can be removed and these attributes can be modified, otherwise it cannot be done.
___

&emsp; ES6 adds **computed property names** where you can specify an expression enclosed in [ ] as a key-value pair when declaring an object literal:
> ```javascript
>  var prefix = "foo";
>  var myObject = {
>      [prefix + "bar"]: "hello",
>      [prefix + "baz"]: "world"
>  };
>  myObject["foobar"];          // => hello
>  myObject["foobaz"];         // =>  world
> ```
___

&emsp;  **__proto__** is an old and ancient getter/setter for **[[Prototype]]**
> ```javascript
>   let Animal = {
>      typeOfCreature: 'Invertebrates',    // => default value
>      displayCreatureType: function() { console.log('this Creature: ', this.typeOfCreature); }, 
>      eats: true, 
>      walk() { console.log("Animal goes"); }
>   };
>   let rabbit = { jumps: true, __proto__: Animal };
>   let longEar = { earLength: 10, __proto__: rabbit };
>     longEar.displayCreatureType();        // => this Creature:  Invertebrates
>     longEar.walk();        // => Animal goes
>     console.log (longEar.jumps);        // => true 
>     console.log(Object.keys(longEar));  // => ['earLength']
>     // for..in loop can also run through inherited properties
>     for(let prop in longEar) console.log(prop); // => // returns both own and inherited keys
> ```
___

&emsp;  JS now suggests using **modern prototype methods** instead of get/set.
* ``Object.create(proto, [descriptors])``
>    _creates empty object with [[Prototype]] property referencing passed proto object and optional property descriptors_
> > ```javascript
> >    let rabitos = Object.create( rabbit, { // new object with prototype rabbit is created
> >      isFunny: {  // we can give additional properties to new object
> >      writable: true, configurable: true, enumerable: true, value: true }
> >    } );  
> >    rabitos.say = function() { console.log("I'm a funny bunny and this" is , this.isFunny); };
> >      rabitos.displayCreatureType();   // => this Creature:  Invertebrates
> >      console.log(rabitos.eats);      // => true
> >      rabitos.say();     // => I'm a funny bunny and this is true
> > ```
* ``Object.defineProperty(obj, propertyName, descriptor)``
>    _we can use this to change the flags_
> > ```javascript
> >    Object.defineProperty(rabitos, "isFunny", { writable: false });
> >      Object.getOwnPropertyDescriptors(rabitos);     // => {isFunny: {…}, say: {…}}
> >          // => isFunny: {value: true, writable: false, enumerable: true, configurable: true}
> >          // => say: {writable: true, enumerable: true, configurable: true, value: ƒ}
> > ```
* ``Object.getPrototypeOf(obj)``
>    _returns the [[Prototype]] value of obj_
> > ```javascript
> >    console.log(Object.getPrototypeOf(rabitos) === rabbit);  // => true
> >    console.log( Object.getPrototypeOf(rabitos) );  // => {jumps: true} => [[Prototype]]:Object
> > ```
* ``obj.hasOwnProperty(key)``
>    _built-in method that returns true if key is its own (non-inherited) property_
> > ```javascript
> >    for(let prop in rabitos) { let isOwn = rabitos.hasOwnProperty(prop);
> >      if (isOwn) { console.log(`Our: ${prop}`);        
> >      } else { console.log(`Inherited: ${prop}`); }
> >    }
> > ```
* ``Object.setPrototypeOf(obj, proto)``
>    _sets [[Prototype]] value of obj to proto_
> > ```javascript
> >    let rabikus = { isFunny: false };
> >      Object.setPrototypeOf(rabikus, rabbit);  // changes prototype of rabikus object to rabbit
> > ```
* ``Object.create()``
> _below we create true copy of object, including all properties, setters/getters - with correct [[Prototype]] value_
> > ```javascript
> >    let cloneRabitos = Object.create(Object.getPrototypeOf(rabitos), Object.getOwnPropertyDescriptors(rabitos));
> >    	 Object.getOwnPropertyDescriptors(cloneRabitos);       // => {isFunny: {…}, say: {…}}
> >    			// isFunny: {value: true, writable: false, enumerable: true, configurable: true}
> >    			// say: {writable: true, enumerable: true, configurable: true, value: ƒ}
> >     cloneRabitos.displayCreatureType();     // => this:  Invertebrates   
> > ```

&emsp; By combining ``writable:false`` and ``configurable:false`` you can essentially create a constant (cannot be changed, overridden or deleted) as a property of the object, like so:
> ```javascript
>    let myObject = {};
>      Object.defineProperty( myObject, "FAVORITE_NUMBER", {
>        value: 42, writable: false, configurable: false } );
>      // {FAVORITE_NUMBER: 42}
> ```
___

&emsp; If you want to prevent new properties from being added to an object, but at the same time leave existing properties intact, use ``Object.preventExtensions(..)``

&emsp; The ``Object.seal(..)`` method creates "sealed" object - that is, it takes an existing object and essentially applies **Object.preventExtensions(..)** to it, but also marks all properties as **configurable:false**. Therefore, you cannot add properties, nor can you reconfigure or remove existing ones (although you can still change their values).

&emsp; The ``Object.freeze(..)`` method creates a frozen object, which means it takes an existing object and essentially applies Object.seal(..) to it, but also sets all properties = writable:false so their values cannot be changed.
___

&emsp; ``Object.keys(..)`` returns an array of all enumerated properties, while Object.getOwnPropertyNames(..) returns an array of all properties - enumerated or not.
> ```javascript
>   Object.defineProperty(rabitos, "age", { value: 41, enumerable: false} );
>   Object.keys(rabitos);       // ['isFunny', 'say']
>   Object.getOwnPropertyNames(rabitos);        // ['isFunny', 'say', 'age']
>   Object.getOwnPropertyDescriptors(rabitos);   // {isFunny: {…}, say: {…}, age: {…}}
>   			// age: {value: 41, writable: false, enumerable: false, configurable: false}
>   	  	// isFunny: {value: true, writable: false, enumerable: true, configurable: true}
> ```

### Setting and shading properties
> ```javascript
>   'use strict'
>   let grannyObject = { 
>   grannyLevel: 1,
>   get name() { return this._name; },
>   		set name(value) { this._name = value; }
>   };
>   	Object.defineProperty(grannyObject, "prop1", { value: 'test1', writable: true, enumerable: true, configurable: true } );
>   Object.defineProperty(grannyObject, "prop2", { value: 'test2', writable: false, enumerable: true, configurable: true } );
>   	let parentObject = Object.create(grannyObject, { 
>     prop3: { value: 'test3', writable: false, enumerable: true, configurable: true } } );
>   let childObject = { childLevel: 3 };
>   			Object.setPrototypeOf(childObject, parentObject);
>   grannyObject.name = 'grandPa';
>
>   console.log(grannyObject); // => {grannyLevel: 1, prop1: 'test1', prop2: 'test2', _name: 'grandPa'}
>   console.log(parentObject);  // => {prop3: 'test3'} => [[Prototype]]: Object
>   console.log(childObject);   // => {childLevel: 3} => [[Prototype]]: Object
> ```












