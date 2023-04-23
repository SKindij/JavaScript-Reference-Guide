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
The ``return`` statement is used to pass a value from the function body to external code.\
&emsp;**Immediately Invoked Function Expression** &emsp; ``(function foo(){ ... })()``

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
&emsp;One of the key features of functions is the ability to return a value after they have executed.\
_When a function returns a value, it can be used in a variety of ways. For example, you might store the value in a variable, pass it as an argument to another function, or use it in a conditional statement._

&emsp;Functions can return any valid JavaScript data type, including numbers, strings, arrays, objects, and even other functions. This means you can use functions to encapsulate complex operations and then reuse them throughout your code.

&emsp;A function can have multiple return statements, but only one of them will be executed. When a return statement is executed, it immediately stops the function's execution and returns the specified value.
> ```javascript
>  function absoluteValue(num) {
>    if (num < 0) {
>      return -num;
>    } else {
>      return num;
>    }
>  }
> ```

&emsp;If a function does not explicitly return a value using the return statement or an implicit return, the function will return undefined. This is important to keep in mind when using functions in conditional statements or assigning their return value to a variable.

&emsp;In some cases, you may want to explicitly indicate that a function does not return a value. To do this, you can use the ``void`` operator before the function's return statement or implicit return.
> ```javascript
>  function logMessage(message) {
>    console.log(message);
>    return void 0;
>  }
>  logMessage("Hello!"); // Outputs "Hello!"
> ```
> _This can be useful in situations where you want to indicate that function is intended to have side effects rather than return value._

- - -

## <a name="recursion"></a>📖 Recursion
&emsp;Recursion is technique in programming where function calls itself repeatedly until it reaches base case, which is a condition that stops the recursion.
_Recursion is pattern that is useful in situations where task can be divided into several tasks of same kind, but simpler. Or when task can be simplified to simple action plus simpler version of same task._

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
> In mathematics, you can write xn = x * xn-1. _This is called recursive step: we turn the task into simpler action._
> > ```javascript
> >  function pow(x, n) { return (n == 1) ? x : (x * pow(x, n - 1)); }
> > ```

&emsp;The key to writing a successful recursive function is to identify the base case, which provides the condition that stops the recursion. Without a base case, the function would keep calling itself indefinitely, resulting in an infinite loop.

> _Here's another example of recursive function that calculates factorial of a number:_
> > ```javascript
> >  function factorial(n) {
> >    if (n === 0) {
> >      return 1; // base case
> >    } else {
> >      return n * factorial(n - 1); // recursive case
> >    }
> >  }
> >  console.log(factorial(5)); // => 120 (i.e., 5 * 4 * 3 * 2 * 1)
> > ```

&emsp;Another important consideration when using recursion is to make sure that the recursive function doesn't consume too much memory. This can be a problem with recursive functions that have a deep recursion depth, as each recursive call adds a new stack frame to the call stack. To avoid this, you can use tail recursion or convert the recursive function to an iterative one.\
&emsp;Recursion can be a powerful tool for solving certain problems, such as traversing trees or graphs, and can lead to elegant and concise code. 

> _Suppose you need to display hierarchical category structure for your products.\
> Each category can have subcategories, which can in turn have their own subcategories, and so on._\
> _You can represent this structure as tree, where each node represents category, and its children represent its subcategories._
> > ```javascript
> >  // func takes category object as input and generates HTML code for that category and its subcategories
> >  function generateCategoryHTML(category) {
> >    let html = '<ul>';
> >    html += '<li>' + category.name + '</li>';
> > //  If category has children, func recursively calls itself for each child, generating HTML code for each subcategory and its children.
> >    if (category.children && category.children.length > 0) {
> >      for (let i = 0; i < category.children.length; i++) {
> >        html += '<li>' + generateCategoryHTML(category.children[i]) + '</li>';
> >      }
> >    }
> >    html += '</ul>';
> >    return html;
> >  }
> > ```

&emspIn general, if you're working on business or industrial enterprise application, you should consider the tradeoffs between using recursion and other techniques, such as iteration or memoization, to solve the problem at hand. You should also consider the requirements of your application, such as performance, scalability, and maintainability, and choose the solution that best meets those requirements.


## <a name="closure"></a>📖 Closures
&emsp;To use closure, simply define function inside another function. Closure is when function knows how to remember and has access to its lexical scope even when that function is executed outside its lexical scope.
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
>		        doAnother: doAnother
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

&emsp;Closures are very powerful because they allow you to create functions with persistent state. The inner function retains a reference to its enclosing scope, even after the outer function has finished executing. This makes closures useful for implementing things like private variables and memoization.

> _Here's example of how closures could be used in web app that tracks inventory for manufacturing company:_
> > ```javascript
> >  function createInventoryTracker(initialQuantity) {
> >    // func creates closure around quantity variable
> >    let quantity = initialQuantity;
> >    //  func returns object with three methods
> >    return {
> >      getQuantity: function() {
> >        return quantity;
> >      },
> >      increaseQuantity: function(amount) {
> >        quantity += amount;
> >      },
> >      decreaseQuantity: function(amount) {
> >        if (quantity - amount < 0) {
> >          throw new Error("Not enough inventory!");
> >        }
> >        quantity -= amount;
> >      }
> >    };
> >  }
> >  
> >  const tracker = createInventoryTracker(100);
> >    console.log(tracker.getQuantity()); // 100
> >  
> >  tracker.increaseQuantity(50);
> >    console.log(tracker.getQuantity()); // 150
> >  
> >  tracker.decreaseQuantity(25);
> >    console.log(tracker.getQuantity()); // 125
> > ```
> _By creating closure around `quantity`, we've effectively created private variable that can only be accessed and modified through methods provided by 
> `createInventoryTracker` function. This is useful for encapsulating `state of inventory` and preventing it from being modified in unexpected ways._

## <a name="callbacks"></a>📖 Callbacks:
&emsp;It is a function that is an argument to another function and that is run after a certain action is completed.<br>
Read more about this subject in a separate [article](https://github.com/SKindij/Asynchronous-JS-Nodejs/tree/main/codeApplication).

