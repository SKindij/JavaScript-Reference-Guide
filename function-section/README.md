# about Functions

A function is a block of various commands that serves to organize and structure the program code.
* function declaration
  + named: ``function namedFunc(arguments) { do something }``
  + anonymous: ``function(arguments) { do something }``
* function expression
  + ``const namedFunc = function(argument) { code to be executed }``

Technically, a function is a JavaScript object that has an internal ``Call()`` method that adds the ability to call the function.
The ``return`` statement is used to pass a value from the function body to external code.

## Conversion to arrow function
> ```javascript
>  // for example, we want to get a new array based on a certain array
>  let familyMembers = ['father', 'mother', 'son'];
>    let coolFamily = familyMembers.map( function (member) { return `${member} is cool`; } );
>    coolFamily; // => ['father is cool', 'mother is cool', 'son is cool']
> ```
> > 1. remove the word function and add a bold arrow;
> > 2. if you have only one parameter, you can remove the brackets;
> > 3. if the only purpose of the arrow function is to return something, then there is no need for the return word and curly braces;
> > > ```javascript
> > >  let wonderfulFamily = familyMembers.map( member => `${member} is wonderful`);
> > >    wonderfulFamily; // => ['father is wonderful', 'mother is wonderful', 'son is wonderful']
> > > ```





