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







