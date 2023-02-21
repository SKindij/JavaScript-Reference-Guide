# about Functions

&emsp;A function is a block of various commands that serves to organize and structure the program code.
* function declaration
  + named: ``function namedFunc(arguments) { do something }``
  + anonymous: ``function(arguments) { do something }``
* function expression
  + ``const namedFunc = function(argument) { code to be executed }``

&emsp;Technically, a function is a JavaScript object that has an internal ``Call()`` method that adds the ability to call the function.
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

## Recursion
&emsp;A recursion is a structure in which a function calls itself.<br>
Recursion is a pattern that is useful in situations where a task can be divided into several tasks of the same kind, but simpler. Or when a task can be simplified to a simple action plus a simpler version of the same task.

> let's write a **function pow(x, n)** that brings x to the natural power of n
> > ```javascript
> > // iterative thinking:
> >  function pow(x, n) {  
> >    let result = 1;
> >    for (let i = 0; i < n; i++) { result *= x; } 
> >    return result;	};
> >
> > // recursive thinking:
> >  function pow(x, n) {
> >    if (n == 1) { return x;
> >    } else { return x * pow(x, n - 1); } 
> >  }
> > ```





## Callbacks
&emsp;It is a function that is an argument to another function and that is run after a certain action is completed.<br>
Read more about this subject in a separate [article](https://github.com/SKindij/Asynchronous-JS-Nodejs/tree/main/codeApplication).

