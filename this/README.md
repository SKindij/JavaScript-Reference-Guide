# this

``this`` is a reference to a specific object whose properties can be accessed inside a function call.<br>
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





