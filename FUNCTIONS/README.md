# about Functions

## <a name="basics"></a>📖 Basics:
&emsp;A function is a block of various commands that serves to organize and structure the program code.
* function declaration
  + named: ``function namedFunc(arguments) { do something }``
> _This is useful when you need to define func that will be used multiple times throughout codebase._
  + anonymous: ``function(arguments) { do something }``
* function expression
  + ``const namedFunc = function(argument) { code to be executed }``

#### Conversion to arrow function
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

&emsp;Technically, a function is a JavaScript object that has an internal ``Call()`` method that adds the ability to call the function.
The ``return`` statement is used to pass a value from the function body to external code.





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
> In mathematics, you can write xn = x * xn-1. This is called a recursive step: we turn the task into a simpler action.
> > ```javascript
> >  function pow(x, n) { return (n == 1) ? x : (x * pow(x, n - 1)); }
> > ```

## Callbacks
&emsp;It is a function that is an argument to another function and that is run after a certain action is completed.<br>
Read more about this subject in a separate [article](https://github.com/SKindij/Asynchronous-JS-Nodejs/tree/main/codeApplication).

## IIFE
&emsp;Immediately Invoked Function Expression &emsp; ``(function foo(){ ... })()``


## Closures
&emsp;To use a closure, simply define a function inside another function. Closure is when a function knows how to remember and has access to its lexical scope even when that function is executed outside its lexical scope.
>  ```javascript
>  function foo() {
>    let a = 17, b = 18;
>    function bar() { console.log( a + b ); }
>    return bar;
>  }
>  // The bar() function has lexical scope access to the inner scope of foo().
>  let baz = foo();
>  baz(); // => 35
> ```
&emsp; Most often, the object of the lexical environment exists as long as there is a function that will use it. And only when there are no such ones left, the environment is destroyed.

> ```javascript
>  function ClosureModule() {
>  	  let something = "cool closure";
>	    let another = [1, 2, 3];
>	      function doSomething() { console.log( something );	}
>	      function doAnother() { console.log( another.join( " !! " ) );	}
>	        return {
>		        doSomething: doSomething,
>		       doAnother: doAnother
>	        };
>  };
> let firstMod = ClosureModule();
>   firstMod; 
>       /* {
>       *    doAnother: ƒ doAnother(),
>       *    doSomething: ƒ doSomething()
>       */ }
>   firstMod.doSomething(); // cool closure
>   firstMod.doAnother(); // 1 !! 2 !! 3
> ```




## this
&emsp;``this`` is a reference to a specific object whose properties can be accessed inside a function call.
This **this** is the execution context.

.call(thisArg, arg1, arg2, ...) 

.apply(thisArg, [args]) 

.bind(thisArg[, arg1[, arg2[, ...]]]) 
___

## Destructuring
&emsp; It is feature in JavaScript introduced in **ES6** that allows you to unpack (or destruct) arrays and objects into individual variables. It makes your code more readable and convenient, especially when you have many elements in an array or object and need to work with specific values.
> There are two types: 
> * array destructuring
> >```javascript
> >  const arr = [101, 102, 103]; 
> >  const [ax, bx, cx] = arr; // assign value of each array element to variables ax, bx, and cx
> >  console.log(ax, bx, cx); // => 101 102 103
> >```
> * object destructuring.
> >```javascript
> >  const obj = { ax: 'brand', ay: 'type', az: 'value' };
> >  const { ax, ay, az } = obj; // assign value of each object property to variables ax, ay, az
> >  console.log(ax, ay, az); // => brand type value
> >```

&emsp; You can also use destructuring to pass arguments to a function, allowing you to pass objects and arrays as arguments without specifying each value individually. 
> >```javascript
> >  const data = { brand: 'Star Wars', type: 'Mandalorian', value: 16 };
> >  function myFunc( {brand, type, value} ) {
> >    console.log('get data using object as argument');
> >    console.log(brand, type, value);
> >  }
> >  myFunc(data); // Star Wars Mandalorian 16
> >```




