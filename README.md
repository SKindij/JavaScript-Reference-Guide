# JavaScript-reference-book
topic :orangutan: a basic set of JavaScript knowledge

## 📚 Syntax
* 📖 [Variables:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#variables)\
  &ensp; ► declaration ► assignment ► var ► let & const ► naming
* 📖 [Data types:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#data-types)\
  &ensp; ► strings ► numbers ► booleans ► null ► undefined ► objects ► symbols ► BigInt   
* 📖 [Variable scope](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#variable-scope)\
  &ensp; ► global ► local ► function ► code block  
* 📖 [Additionally:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#additionally)\
  &ensp; ► hoisting ► Lexical scope
* 📖 [Operators:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#operators)\
  &ensp; ► arithmetic ► comparison ► logical ► bitwise ► assignment
* 📖 [Literals:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/Syntax#literals)\
  &ensp; ► string ► numeric ► boolean ► object


## 📚 Control flow
* 📖 [Conditionals:]()
  + if/else
  + switch
  + ternary operator
* 📖 [Loops:]()  
  + for
  + while
  + do..while
* 📖 [Controls:]()
  + break
  + continue
  + return
* 📖 [Exception handling:]()
  + try..catch
  + throw
  + finally

- - -
### Console API reference
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
- - -

## 📚 Arrays
* 📖 [Basics:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/ARRAYS#basics)
  + declaration
  + initialization
  + accessing
* 📖 [Methods that do not change initial array](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/ARRAYS#methods-not-ch)
  + .find
  + .findIndex
  + .indexOf
  + .lastIndexOf
  + .includes
  + .every
  + .some
  + .concat
  + .join
  + .filter
  + .flat
  + .flatMap
  + .forEach
  + .map
  + .reduce
  + .reduceRight
  + .toString
  + .toLocaleString
* 📖 [Methods that change initial array:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/ARRAYS#methods-ch)
  + .push
  + .unshift
  + .pop
  + .shift
  + .sort
  + .reverse
  + .fill
  + .copyWithin
* 📖 [Other methods:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/ARRAYS#other-methods)
  + .split
  + .splice
  + .slice
  + Array.isArray
* 📖 [Destructuring:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/ARRAYS#destructuring)
  + syntax
  + swapping var


## 📚 Objects
* 📖 [Basics:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/OBJECTS#)
  + obj literals
  + constructor func
  + classes
  + this
  + prototype chain
  + destructuring
* 📖 [Properties:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/OBJECTS#)
  + access
  + assignment
  + descriptors
  + computed prop
* 📖 [Methods:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/OBJECTS#)
  + definitions
  + this keyword
  + chaining
* 📖 [Inheritance:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/OBJECTS#)
  + patterns
  + obj composition
* 📖 [Encapsulation:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/OBJECTS#)
  + getters & setters
  + private variables
  + closure func
* 📖 [Polymorphism:](https://github.com/SKindij/JavaScript-Reference-Guide/tree/main/OBJECTS#) 
  + overriding
  + overloading
  + dynamic dispatch

- - -
### ECMAScript (or ES) is a specification. 
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

## 📚 Functions


## 📚 Asynchronous


## 📚 Regular Expressions







