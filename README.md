# JavaScript-reference-book
topic :orangutan: a basic set of JavaScript knowledge

## Syntax
* [Variables:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#variables)
  + declaration
  + assignment
  + var
  + let & const
  + naming
* [Data types:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#data-types)
  + strings
  + numbers
  + booleans
  + null
  + undefined
  + objects
  + symbols
  + BigInt   
* [Variable scope](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#variable-scope)
  + global 
  + local 
  + function
  + code block  
* [Additionally:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#additionally)
  + hoisting
  + Lexical scope
* [Operators:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#operators)
  + arithmetic
  + comparison
  + logical
  + bitwise
  + assignment
* [Literals:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#literals)
  + string
  + numeric
  + boolean
  + object








___
## Console API reference
+ ``console.log( object [, object, ...] );`` >> _Prints a message to the Console._
+ ``console.dir( {object} );`` >> _Prints a JSON representation of the specified object._
+ ``console.dirxml( document );`` >> _Prints an XML representation of the descendants of node._
+ ``console.group( 'label' );`` >> _Visually groups messages together._
    - ``console.info( 'log-1' );``
    - ``console.info( 'log-n' );``
    - ``console.groupEnd( 'label' );``
+ ``console.count( [label] );`` >> _Writes the number of times that count() has been invoked with the same label._
+ ``console.table( array [, columns] );`` >> _Logs an array of objects as a table._
+ ``console.warn( object [, object, ...] );`` >> Prints a warning to the Console.
+ ``console.assert( expression, {object} );`` >> _Writes an error to the console when expression evaluates to false._
+ ``console.error( object [, object, ...] );`` >> _Prints object to the Console, formats it as an error, and includes a stack trace._
+ ``console.clear();`` >> _Clears the console._
___

&emsp;Read more about **primitive data types**
|                     |
|---------------------|
| [Number & String](https://github.com/SKindij/JavaScript-reference-book/tree/main/Number-String) | 
| [Null & Undefine & Boolean](https://github.com/SKindij/JavaScript-reference-book/tree/main/Null-Undefine-Boolean) | 
| [symbol & bigint](https://github.com/SKindij/JavaScript-reference-book/tree/main/symbol-bigint) |

... (_values of which can only be overwritten, but cannot be changed_)
___

&ensp;It is recommended to declare variables with ``const`` by default and use ``let`` if you need to change or reassign it later. <br>
The ``typeof()`` operator is used to get the type of a variable's value.
___

## ECMAScript (or ES) is a specification. 
That is, a set of rules and guidelines that a language must follow in order to be considered compliant with this specification.

&ensp; **Strict mode** (``'use strict'``) was introduced with the **ECMAScript 5** standard in 2009 because backward compatibility was broken in ES. **strict mode** provides more detailed error checking in the code and facilitates debugging.
> * you cannot use variables without a declaration;
> * function parameters cannot have the same names;
> * this will not reference a global object by default;
> * does not allow using the with construction in the code;
> * cleans up variables created with eval;

&ensp; 2009-2011 **ES5** added: ``Object.keys()``, ``filter()``, ``map()``, ``reduce()``, ``JSON`` support, etc.

&ensp; The ``let`` and ``const`` variables appeared in the 2015 **ES6** version, replacing the outdated ``var``.
> * arrow functions that preserve the context;
> * syntactic sugar in the form of classes;
> * default function arguments;
> * promises;
> * destruction of objects;

&ensp; In **ES-modules** (ES2015), the keyword ``export`` is used for export, and ``import`` is used for import. They can be perceived as parts of the constructor from which the program is assembled. (modules are always ``"use strict"`` / this is not window, but undefined)

&ensp; **ES2016**:
>    * destruction of arrays;
>    * includes;
>    * exponentiation through **;

&ensp; **ES2017**:   
>    * Object.values, 
>    * Object.entries;    
>    * async/await;

&ensp; **ES2018**:
>    * finally for promises;
>    * update in regular expressions;
>    * spread operator for objects;

&ensp; **ES2019**:
>    * flat, flatMap for arrays;
>    * fromEntries for objects;

&ensp; **ES2020**: 
>    * BigInt; 
>    * Globalthis;  
>    * ??; 
___

### Statement is a separate command in code that performs a specific action.
&ensp;In JavaScript, all instructions can be divided into several categories:
1. declaration of values
> > let and const never go out of scope where they were defined and are always initialized where specified;
2. management of execution flow
> > ```javascript
> >    if (condition) { "perform certain actions";
> >    } else { "an alternative scenario takes place"; }
> >
> >    switch (expression) {
> >      case value1: 
> >        statement1
> >        break;
> >      case value2: 
> >        statement2
> >        break;
> >      default: 
> >        statements }
> > ```
3. iterations
> > ```javascript
> >     while (condition) { statement };
> > 
> >     do { statement } while (condition);
> >
> >    for (initialization; condition; afterthought) { statement };
> > ```
4. functions
5. others ( debugger, import, export );

### Expression is code that returns any value when executed.
&ensp;There are 4 ways to execute something in JS:
1. by calling the function;
2. by calling the method of the object (the function is stored in the object);
3. through the constructor function (create new objects of the same type);
4. indirect function call via .call() or .apply();
___

&emsp;Read more about... 
+ [ARRAYS](https://github.com/SKindij/JavaScript-reference-book/tree/main/arrays-section)...
+ [FUNCTIONS](https://github.com/SKindij/JavaScript-reference-book/tree/main/function-section)...
+ [DOM & BOM](https://github.com/SKindij/JavaScript-reference-book/tree/main/DOM-BOM-section)...
+ [OBJECTS](https://github.com/SKindij/JavaScript-reference-book/tree/main/Object-methods)...
+ [THIS](https://github.com/SKindij/JavaScript-reference-book/tree/main/this)...
+ [Web-API](https://github.com/SKindij/JavaScript-reference-book/tree/main/Web-API)...




