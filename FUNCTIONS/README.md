# about Functions

## <a name="basics"></a>📖 Basics:
&emsp;A function is a block of various commands that serves to organize and structure the program code.
* function declaration
  + ``function namedFunc(arguments) { do something }``
> _This is useful when you need to define func that will be used multiple times throughout codebase._
* function expression
  + ``const namedFunc = function(argument) { code to be executed }``
> _It is created by assigning a function to a variable.\
> They are useful when you want to create a function that will be used only once or as a callback function._
* arrow function
> ```javascript
>  // for example, we want to get new array based on certain array
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
* anonymous function
  + ``function(arguments) { do something }``
> _It can be created using function expressions or arrow functions.\
> They are useful when you need to pass function as argument to another function._

&emsp;Technically, a function is a JavaScript object that has an internal ``Call()`` method that adds the ability to call the function.
The ``return`` statement is used to pass a value from the function body to external code.

- - -

&emsp;**Parameters** define the function's interface and the expected inputs, while **arguments** supply the actual data that the function operates on.
Arguments correspond to the parameters in the function declaration and supply the necessary data for the function to operate.

## <a name="paramarg"></a>📖 Parameters and Arguments
> ```javascript
>  // in this example, num1 and num2 are parameters
>  function multiply(num1, num2) {
>    return num1 * num2;
>  }
>  // while 2 and 3 are arguments
>  let result = multiply(2, 3); // num1 is 2, num2 is 3
>  console.log(result); // Output: 6
> ```

* Positional parameters: 
  + _These are the most common type of parameter._
  + _They are named in function signature and assigned values when function is called._
* Default parameters: 
  + _These allow you to specify default value for parameter in case caller does not provide one._
* Rest parameters: 
  + These allow you to capture an indefinite number of arguments as an array.
> _Let's say you have function that calculates total cost based on product price and quantity of items ordered.\
> However, you also want to be able to apply discount to order, which can vary depending on customer._
> > ```javascript
> >  function calculateOrderCost(price, quantity, ...discounts) {
> >    let totalCost = price * quantity;
> >    for (let discount of discounts) {
> >      totalCost *= (1 - discount);
> >    }
> >    return totalCost;
> >  }
> > ```
> _you can call the function with different numbers of arguments_
> > ```javascript
> >  let orderCost1 = calculateOrderCost(120, 5);
> >    console.log(orderCost1); // => 600
> >  let orderCost2 = calculateOrderCost(120, 5, 0.15);
> >    console.log(orderCost2); // => 510
> >  let orderCost3 = calculateOrderCost(120, 5, 0.15, 0.05);
> >    console.log(orderCost3); // => 484.5
> > ```
* arguments object: 
  + This is an array-like object that contains all the arguments passed to a function.
> ```javascript
>  function greetAll() {
>    for (let i = 0; i < arguments.length; i++) {
>      console.log(`Hello, ${arguments[i]}!`);
>    }
>  }
>  greetAll('Alice', 'Bob', 'Charlie');
> ```
* Destructuring: 
  + This allows you to unpack (or destruct) arrays and objects into individual variables. 
> _There are two types:_
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
> _You can use destructuring to pass arguments to function, allowing you to pass objects and arrays as arguments without specifying each value individually._
> >```javascript
> >  const data = { brand: 'Star Wars', type: 'Mandalorian', value: 16 };
> >  function myFunc( {brand, type, value} ) {
> >    console.log('get data using object as argument');
> >    console.log(brand, type, value);
> >  }
> >  myFunc(data); // Star Wars Mandalorian 16
> >```
* Spreading argument: 
  + This allows you to spread elements of array as separate arguments when calling function.
> _Let's say you have array of product prices that you want to find minimum and maximum value for:_
> >```javascript
> >  const prices = [10.99, 23.99, 8.99, 14.99, 7.99];
> >    const minPrice = Math.min(...prices);
> >    const maxPrice = Math.max(...prices);
> >  
> >  console.log(`Minimum price is ${minPrice} and maximum price is ${maxPrice}.`);
> >  // Output: Minimum price is 7.99 and maximum price is 23.99.
> >```

- - -

## <a name="return"></a>📖 Return:




## <a name="recursion"></a>📖 Recursion
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


## <a name="closure"></a>📖 Closures
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

- - -

## <a name="callbacks"></a>📖 Callbacks:



