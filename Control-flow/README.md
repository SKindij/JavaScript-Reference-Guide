# Control flow
&ensp; It is a fundamental aspect of programming that allows you to control the order in which statements are executed in your code.

## <a name="conditionals"></a>📖 Conditionals:
&ensp; They are used to execute different code blocks depending on whether a condition is true or false. 

> **if/else statement:**
> > ```javascript
> >  if (condition) {
> >    // code to be executed if condition is true
> >  } else {
> >    // code to be executed if condition is false
> >  }
> > ```

> **switch statement:**
> > ```javascript
> >  switch (expression) {
> >    case value1:
> >      // code to be executed if expression matches value1
> >      break;
> >    case value2:
> >      // code to be executed if expression matches value2
> >      break;
> >    default:
> >      // code to be executed if expression doesn't match any case
> >  }
> > ```

> **ternary operator:**
> **switch statement:**
> > ```javascript
> >  // If condition is true, expression1 is evaluated, otherwise expression2 is evaluated.
> >  condition ? expression1 : expression2;
> > ```


## <a name="loops"></a>📖 Loops:
&ensp; They are used to repeat a block of code multiple times.

> **for loop:**
> > ```javascript
> >  for (initialization; condition; increment/decrement) {
> >    // code to be executed
> >  }
> > ```

> **while loop:**
> > ```javascript
> >  while (condition) {
> >    // code to be executed
> >  }
> > ```

> **do..while loop:**
> > ```javascript
> >  do {
> >    // code to be executed
> >  } while (condition);
> > ```


## <a name="controls"></a>📖 Controls:
&ensp; Statements that allow you to modify the flow of your code.

> **break:**\
> _When `break` is encountered inside loop or switch statement, they immediately terminated
> and the program continues executing from the next statement._
> > ```javascript
> >  for (let i = 11; i <= 30; i++) {
> >    if (i === 17) {
> >      break;
> >    }
> >    console.log(i);
> >  }
> > ```

> **continue:**\
> _When `continue` is encountered inside loop, current iteration of loop is skipped
> and loop continues with next iteration._
> > ```javascript
> >  for (let i = 11; i <= 30; i++) {
> >    if (i % 2 === 0) {
> >      continue;
> >    }
> >    console.log(i);
> >  }
> > ```

> **return:**\
> _When `return` is encountered inside function, it is immediately terminated 
> and program continues executing from next statement._\
> _If value is provided after return keyword, that value is returned as result of function._
> > ```javascript
> >  function addNumbers(num1, num2) {
> >    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
> >      return 'Error: both arguments must be numbers';
> >    }
> >    return num1 + num2;
> >  }
> >  console.log(addNumbers(2, 3)); // => 5
> >  console.log(addNumbers('2', 3)); // => Error: both arguments must be numbers
> > ```


## <a name="exceptions"></a>📖 Exception handling:
&ensp; JS provides a way to handle errors and unexpected situations using `try..catch` blocks.

> _It allows you to handle errors that may occur inside block of code._
> > ```javascript
> >  try {
> >    // some code that may throw an error
> >    console.log('Executing try block');
> >  } catch (error) {
> >    console.log('An error occurred:', error.message);
> >  } finally {
> >    console.log('Executing finally block');
> >  }
> > ```

> _It allows you to explicitly `throw` an error. _
> > ```javascript
> >  function divide(a, b) {
> >    if (b === 0) {
> >      throw new Error('Cannot divide by zero');
> >    }
> >    return a / b;
> >  }
> >  
> >  try {
> >    console.log(divide(10, 0));
> >  } catch (error) {
> >    console.log('An error occurred:', error.message);
> >  }
> > ```


