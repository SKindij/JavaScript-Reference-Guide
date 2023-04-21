# Objects

## <a name="basics"></a>📖 Basics:

&emsp;**Object literal** can contain one or more **key-value pairs**, where the key is a string or symbol (in ES6+) and the value can be any valid JavaScript expression, including other objects, arrays, functions, and primitives.
> _Here's an example of creating an object literal:_
> ```javascript
> const johnNY = {
>   name: 'John', age: 30,
>   hobbies: ['reading', 'music', 'traveling'],
>   address: {
>     street: '123 Main St',
>     city: 'New York', state: 'NY',
>   },
>   introduceYourself() {
>     console.log(`Hello, I am ${this.name} from ${this.address.city}.`);
>   }
> };
> johnNY.introduceYourself(); // => 'Hello, I am John from New York.'
> ```

&emsp;**Constructor functions** are a way of creating a template for creating new objects with similar properties and methods.
> _Here's an example of creating a constructor function:_
> ```javascript
> function Person(name, age, hobbies, address) {
>   this.name = name; this.age = age;
>   this.hobbies = hobbies;
>   this.address = address;
>   this.introduceYourself = function() {
>     console.log(`Hello, I am ${this.name} from ${this.address.city}.`);
>   }
> };
> ```
> _To create object use `new` keyword._
> ```javascript
> const johnNY = new Person('John', 30, ['reading', 'music', 'traveling'], {
>   street: '123 Main St',
>   city: 'New York',
>   state: 'NY',
>   zip: '10001'
> });
> johnNY.introduceYourself(); // => 'Hello, I am John from New York.'
> console.log(johnNY.hobbies); // => ['reading', 'music', 'traveling']
> ```

&emsp;**Classes** are actually just syntactic sugar over constructor functions and the prototype chain, 
but they provide a cleaner and more familiar syntax for many developers.
> _Here's an example of creating a class:_
> ```javascript
> class Person {
>   constructor(name, age, hobbies, address) {
>     this.name = name; this.age = age;
>     this.hobbies = hobbies;
>     this.address = address;
>   }
>   introduceYourself() {
>     console.log(`Hello, I am ${this.name} from ${this.address.city}.`);
>   }
> }
> ```
> _To create object use `new` keyword_

&emsp;**this** keyword in JS refers to object that current code is being executed in. 
+ In method of object, `this` refers to object itself.
+ In constructor func or class constructor, this refers to new object being created. 
+ In function that is not method or constructor, this refers to the global object (window in browser, global in Node.js) 
unless it is in strict mode, in which case this is undefined.
> _Read more about `this` [here](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/this)._

&emsp;Every object in JS has **prototype object**, which is used as fallback for properties and methods that are not defined on object itself.
> **prototype chain** is mechanism for sharing properties and methods between objects. 
> > ```javascript
> >  function Hero(name, universe) {
> >    this.name = name; this.universe = universe;
> >  };
> >  Hero.prototype.sayAbout = function() {
> >    console.log(`Name: ${this.name},  universe: ${this.universe}.`);
> >  };
> >  const carnage = new Hero('Carnage', 'Marvel');  
> >    carnage.sayAbout(); // => 'Name: Carnage,  universe: Marvel.'
> > ```

&emsp;**Destructuring** is way of extracting values from objects into variables. It's shorthand syntax that can make code more concise and readable.
> _Here's example of using destructuring from our johnNY object:_
> ```javascript
> const { name, age, address: { city } } = johnNY;
> console.log(name, age, city); // 'John' 30 'New York'
> ```

- - -

> > _All cars have the same properties, but the property values differ from car to car._<br>
> > _All cars have the same methods, but the methods are performed at different times._

## <a name="properties"></a>📖 Properties:
You can access object properties in two ways:
  + objectName.propertyName;
  + objectName["propertyName"];

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


## <a name="methods"></a>📖 Methods:
Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.

> Methods are defined in the same way as other properties of an object, but their value is a function.\
> `This` allows method to access other properties and methods of object. 
> _Here's an example:_
> > ```javascript
> >  const myObject = {
> >    myProperty: 'I am property',
> >    myMethod: function() {
> >      console.log('Hello from myMethod!');
> >      console.log(this.myProperty);
> >    }
> >  };
> >  // To call method on object, you simply use dot notation:
> >  myObject.myMethod();
> > ```
>  `objectName.methodName();`

&emsp; It's common to **chain methods** together. This means that you call one method on an object, and then call another method on the result of the first method, and so on. 
> _Imagine you have an e-commerce website that sells products. You might have a Cart object that represents a user's shopping cart, and it could have several methods that allow the user to interact with the cart._
> > ```javascript
> >  const Cart = {
> >    items: [],
> >    addItem(item) {
> >      this.items.push(item);
> >      return this;
> >    },
> >    removeItem(item) {
> >      const index = this.items.indexOf(item);
> >      if (index !== -1) {
> >        this.items.splice(index, 1);
> >      }
> >      return this;
> >    },
> >    clear() {
> >      this.items = [];
> >      return this;
> >    },
> >    checkout() {
> >      // code to process payment and complete checkout
> >    }
> >  };
> > ```
> _Notice that each method returns this, which allows you to chain methods together._
> > ```javascript
> >  const myCart = Object.create(Cart);
> >  myCart.addItem('Product A')
> >        .addItem('Product B')
> >        .removeItem('Product A')
> >        .clear()
> >        .addItem('Product C')
> >        .checkout();
> > ```
> _In this example, the myCart object is created using Object.create(Cart), which creates a new object that inherits from the Cart object. This allows you to use the methods defined in the Cart object._

- - -

## <a name="collection"></a>📖 Collection objects
Map and Set are both data structures in JS that are used for storing collections of values. They are both part of the group of "built-in" or "native" JavaScript objects, along with other data structures such as Array, Object, and Date.

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

&emsp; Maps can be useful in many different business or industrial contexts where you need to store and manipulate collections of key-value pairs.
Maps can be used...
+ to store and manipulate large collections of data for analysis, such as in data processing pipelines or statistical analysis tools.
+ to store and manage the state of various components or elements on the page, such as form inputs or modal dialogs.
+ to manage the routing and navigation of web applications, storing information such as route parameters and query strings.
+ to implement caching and memoization strategies, where the results of expensive computations are stored in a Map for fast lookup on subsequent calls.
+ to store and manipulate graphs and their associated data structures, such as adjacency lists or edge weights.
+ to store and manipulate dictionaries and other language models used for text analysis and generation.

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

- - -

## <a name="oop"></a>📖 Object oriented programming in JS
&emsp; OOP is a programming paradigm that emphasizes the use of objects and classes to organize and structure code.\
Object is a block containing **information** (state/attributes) and **operations** (methods).
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

- - -

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
> _For example, you might have an object that represents a configuration for a piece of software,
> and you want to make sure that the configuration is not changed by any other part of the program._
> > ```javascript
> >  const config = { 
> >    username: 'user1', 
> >    password: 'password1' 
> >  };
> >  Object.preventExtensions(config);
> >  // Now, any attempt to add new property to config object will fail:
> >  config.newProperty = 'new value'; // => throws an error
> > ```

&emsp; The ``Object.seal(..)`` method creates "sealed" object - that is, it takes an existing object and essentially applies **Object.preventExtensions(..)** to it, but also marks all properties as **configurable:false**. Therefore, you cannot add properties, nor can you reconfigure or remove existing ones (although you can still change their values).
> _For example, you might have an object that represents a customer's order,
> and you want to make sure that the order is not modified after it has been processed._
> > ```javascript
> >  const order = { 
> >    orderId: 1234, 
> >    customerId: 5678, 
> >    products: ['product1', 'product2'] 
> >  };
> >  Object.seal(order);
> >  // Now, any attempt to add new property to order object or delete an existing property will fail:
> >  order.newProperty = 'new value'; // throws an error
> >  delete order.customerId; // throws an error
> > ```

&emsp; The ``Object.freeze(..)`` method creates a frozen object, which means it takes an existing object and essentially applies Object.seal(..) to it, but also sets all properties = writable:false so their values cannot be changed.
> _For example, you might have an object that represents a configuration for a piece of hardware,
> and you want to make sure that the configuration cannot be changed in any way._
> > ```javascript
> >  const hardwareConfig = Object.freeze({ 
> >    voltage: 120, 
> >    frequency: 60, 
> >    maxPower: 1000 
> >  });
> >  // Now, any attempt to add new property to object, delete existing property, or modify an existing property will fail:
> >  hardwareConfig.newProperty = 'new value'; // throws an error
> >  delete hardwareConfig.voltage; // throws an error
> >  hardwareConfig.maxPower = 1500; // throws an error
> > ```

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

- - -

### <a name="inheritance"></a>📖 Inheritance
&emsp; JavaScript, being a prototype-based language, implements OOP through prototypal inheritance.
> _There are two common ways to implement inheritance in JS: using patterns and using object composition._

#### Inheritance patterns in JS:
1. **Constructor pattern**
> _Constructor function is defined, and then new objects are created by calling constructor with the `new` keyword.\
> It typically sets up the object's properties and methods using the this keyword._
2. **Prototype pattern**
> _Object is used as a prototype to create new objects.\
> Properties and methods of prototype object are shared by all objects created using it as prototype._
3. **Class pattern**
> _Introduced in ES6, it provides more familiar syntax for defining classes and creating objects with inheritance._
> > ```javascript
> >  class Person {
> >    constructor(name, city) {
> >      this.name = name;
> >      this.city = city;
> >    }
> >    sayHello() {
> >      console.log(`Hello, my name is ${this.name} and I am from ${this.city}.`);
> >    }
> >  }
> > ```
> _An object can inherit properties and methods from another object, which becomes its prototype._
> > ```javascript
> >  class Employee extends Person {
> >    constructor(name, city, jobTitle, yearsOfService) {
> >      super(name, city);
> >      this.jobTitle = jobTitle;
> >      this.yearsOfService = yearsOfService;
> >    }
> >    getEmployeeInfo() {
> >      console.log(`I work as a ${this.jobTitle} for ${this.yearsOfService} years.`);
> >    }
> >  }
> >  
> >  let jane = new Employee("Jane", "Nurnberg", "Software Engineer", 3);
> >    jane.sayHello(); // => Hello, my name is Jane and I am from Nurnberg.
> >    jane.getEmployeeInfo(); // => I work as a Software Engineer for 3 years.
> > ```

#### Object composition in JS:
&emsp;It is an alternative to inheritance that involves creating objects by composing them from smaller, simpler objects. 
> _This is often done using the Object.assign() method._
> ```javascript
> let speaker = {
>   speak: function() { console.log(`${this.name} is speaking`); }
> }
> let mover = {
>   move: function() { console.log(`${this.name} is moving`); }
> }
> let person = { name: "John" }
> 
> Object.assign(person, speaker, mover);
>   person.speak(); // logs "John is speaking"
>   person.move(); // logs "John is moving"
> ```
&emsp;In object composition, objects are not bound to a specific inheritance hierarchy, making it more flexible than inheritance. 
Additionally, object composition can reduce code duplication by allowing you to reuse smaller objects in different contexts.

### <a name="encapsulation"></a>📖 Encapsulation:
&emsp;It is a fundamental concept in OOP that refers to the practice of bundling data and methods together in a single unit, or object, and restricting access to that object's internal state from outside code. This is done in order to create more modular, maintainable code that is less prone to errors or unexpected behavior.\
&emsp;Getters and setters are methods that are used to access and modify the values of an object's properties, respectively.\
It can help you enforce certain constraints or business logic.
> _Let's say you have an object representing a bank account:_
> > ```javascript 
> >  const account = {
> >    balance: 1000,
> >    deposit(amount) {
> >      this.balance += amount;
> >    },
> >    withdraw(amount) {
> >      if (amount > this.balance) {
> >        console.log("Insufficient funds!");
> >      } else {
> >        this.balance -= amount;
> >      }
> >    }
> >  };
> > ```
> _In this case, the balance property is accessible and modifiable from outside code, which could potentially lead to errors or unexpected behavior.\
> _To encapsulate this property and restrict access to it, you could use getters and setters:_
> > ```javascript 
> >  const account = {
> >    _balance: 1000,
> >    get balance() {
> >      return this._balance;
> >    },
> >    deposit(amount) {
> >      this._balance += amount;
> >    },
> >    withdraw(amount) {
> >      if (amount > this._balance) {
> >        console.log("Insufficient funds!");
> >      } else {
> >        this._balance -= amount;
> >      }
> >    }
> >  };
> > ```

&emsp;Another way to achieve encapsulation in JS is through the use of **closure functions**. It is a function that has access to the variables in its outer (enclosing) function, even after that function has returned. This allows you to create "private" variables that are accessible only to certain functions or methods within an object, and not from outside code.
> _Creating a private cache:_
> > ```javascript 
> >  function createCache() {
> >    const cache = {};
> >    return {
> >      put(key, value) {
> >        cache[key] = value;
> >      },
> >      get(key) {
> >        return cache[key];
> >      }
> >    };
> >  }
> >  
> >  const cache = createCache();
> >    cache.put('key1', 'value1');
> >    cache.put('key2', 'value2');
> >  
> >  console.log(cache.get('key1')); // => "value1"
> >  console.log(cache.get('key2')); // => "value2"
> > ```
> _In this example, createCache function returns an object with two public methods: put and get.\
> The cache variable is defined inside the createCache function and is not accessible from outside the function._

### <a name="polymorphism"></a>📖 Polymorphism: 
&emsp;It refers to the ability of objects to take on multiple forms or behaviors. In JS polymorphism can be achieved through various mechanisms, including overriding, overloading, and dynamic dispatch.

#### Overriding 
&emsp;It is a mechanism where a subclass provides a different implementation of a method that is already defined in its superclass. When a method is called on an object of the subclass, the overridden method in the subclass is executed instead of the method in the superclass.
> ```javascript
>  class Animal {
>    makeSound() {
>      console.log("The animal makes a sound");
>    }
>  }
>  class Cat extends Animal {
>    makeSound() {
>      console.log("Meow");
>    }
>  }
>
>  let animal = new Animal();
>  let cat = new Cat();
>    animal.makeSound(); // "The animal makes a sound"
>    cat.makeSound(); // "Meow"
> ```

#### ► Overloading 
&emsp;It is a mechanism where a function or method is defined with the same name but different parameters. 
The appropriate function or method is chosen based on the number of arguments passed.\
_Unfortunately, JavaScript does not support method overloading natively, but we can simulate it with some workarounds._
> _Here's example with method that takes either two or three arguments
> > ```javascript 
> >  class ShoppingCart {
> >    calculateAmount(price, quantity, discount = 0) {
> >      const total = price * quantity;
> >      // discount is optional with default value of 0
> >      const discountAmount = total * discount;
> >      const amount = total - discountAmount;
> >      return amount;
> >    }
> >  };
> >  
> >  const cart = new ShoppingCart();
> >    // calculate amount without discount
> >    console.log(cart.calculateAmount(18, 3)); // => 54
> >    
> >    // calculate amount with discount
> >    console.log(cart.calculateAmount(18, 3, 0.2)); // => 43.2
> > ```

