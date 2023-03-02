# this

&emsp; ``this`` is a reference to a specific object whose properties can be accessed inside a function call.<br>
This ``this`` is the **execution context**.
> _It is important to distinguish between a function call and a method call._
> > + in a normal function call ``this = global object``; 
> >   - If we run the JS code in the browser, it will be ``window``.
> >   - If we run the code in the Node environment, then ``global``.
> > + when calling the function in strict mode ``this = undefined``.

When a method (_belonging to an object_) is called, ``this`` becomes this **object**.
> > ```javascript
> > class Planet { constructor(name) {
> >     this.name = name; }
> >   getName() {
> >     console.log(`Planet is ${this.name}`); 
> >     return this.name; }
> > };
> > 
> >  let earth = new Planet('Earth');
> >  earth.getName(); 		// Planet is Earth 			 'Earth'
> >  ```

&emsp; To get the expected **this** , modify the context of the inner function with an indirect call (using ``.call()`` or ``.apply()`` ) or create a bound function (using ``.bind()`` ).
* The ``.call(thisArg, arg1, arg2, ...)`` method takes as the first argument **thisArg** the context of the call, and the list of arguments **arg1, arg2, ...** is passed to the called function.
> ``myFunction.call(thisValue, 'value1', 'value2')``
* The ``.apply(thisArg, [args])`` method takes as the first argument **thisArg** the context of the call, and an array-like object **[args]** is passed to the called function as an argument.
> ``myFunction.apply(thisValue, ['value1', 'value2'])``
> > ```javascript
> >  let rabbit = { name: 'White Rabbit' };
> >    function concatName(string) {
> >      console.log(this === rabbit); 					 // => true
> >      return string + this.name;
> >    };							
> >  // Indirect invocations
> >  console.log(concatName.call(rabbit, 'Hello ')); 					 // => 'Hello White Rabbit'
> >  console.log(concatName.apply(rabbit, ['Bye '])); 				 // => 'Bye White Rabbit'
> > ```

&emsp; A related function is a function associated with an object. It is usually created from a regular function using the ``Bind()`` method. The two functions have the same bodies and scopes, but different contexts.<br>
&emsp; the .bind() method allows you to associate the execution context with the function in order to determine "in advance and exactly" which value will be in this;
> The method ``.bind(thisArg[, arg1[, arg2[, ...]]])`` takes as the first argument **thisArg** the call context of the bound function, and the optional argument list **arg1, arg2, ...** is passed to the called function . It returns a new function associated with thisArg.
> > ```javascript
> > function multiply(number) { 'use strict';
> >   return this * number;
> > } 												
> > // create a bound function with context
> > let double = multiply.bind(2); 				
> > let trible = multiply.bind(3);
> >   // invoke the bound function
> >   console.log(double(5));  // => 10  			
> > 	console.log(trible (5)); // => 15
> >  ```



