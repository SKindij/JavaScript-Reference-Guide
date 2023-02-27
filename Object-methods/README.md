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





