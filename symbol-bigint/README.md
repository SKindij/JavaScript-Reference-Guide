&ensp;``Symbol`` is a unique identifier that is used as the name of properties in objects;
> * &ensp; ``Symbol.iterator`` - allows in constructions using ``for..of`` and spread syntax ``...``;
> * &ensp; ``Symbol.for(key)`` — returns the symbol stored by the key;

> When creating a symbol, you can give a description (the so-called name), which is mainly used to debug the code:
> > ```javascript 
> > let id = Symbol("idento"); 
> > alert(id.description); // => id
> > ```
> They create "hidden" properties of objects that cannot be accidentally accessed and overwritten from other parts of the program.
> > ```javascript 
> > let usero = { name: "potatoGrower", [id]: 123, town: "Lynovo" }; 
> > // Properties whose keys are symbols are not iterated over by the for..in loop.
> > let clone = Object.assign({}, usero); // clones all types of object properties;
> > ```
