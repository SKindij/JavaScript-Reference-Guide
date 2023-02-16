# JavaScript-reference-book
topic :orangutan: a basic set of JavaScript knowledge

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

## ⦁ String   ⦁ Number   ⦁ Boolean   ⦁ Null   ⦁ Undefine   ⦁ Object   ⦁ symbol   ⦁ bigint
&ensp;Primitive data types - are the values of which can only be overwritten, but cannot be changed.

> * &ensp; ``Number.isFinite (constNum);`` <br>
> > ```javascript
> >    Number.isFinite (17); // => true       if a number was passed to it during the call
> >    Number.isFinite ('17'); // => false       if a special value or non-numeric type is passed
> > ```
> * &ensp; ``constNum.toString(2);`` - _converts a number to a string in the specified number system_ <br>
> > ```javascript
> >    let constNum = 29;
> >    constNum.toString(2); // => '11101'
> > ```
> * &ensp; ``constNum.toFixed(2)`` - _converts a number to a string with the specified number of decimal places_  <br>
> > ```javascript
> >    let constNum = 16.5492;
> >    constNum.toFixed(2) // => '16.55'
> > ```
> * &ensp; they convert the string character by character as long as possible
> > ```javascript
> >    Number.parseInt('123boxes', 10); // => 123
> >    Number.parseFloat('27.16% market share'); // =>  27.16
> > ```
> * &ensp; ``Math.round(num);`` - _normal rounding_
> * &ensp; ``Math.ceil(num);`` - _rounding to the top_
> * &ensp; ``Math.floor(num); `` - _rounding to the smaller side_
> * &ensp; ``Math.floor(Math.random() * (max - min)) + min;`` - _generate a random number in a range_
> * &ensp; ``Math.floor(Math.random() * array.length);`` -  _generate a random array element_
> * &ensp; ``Math.max(num1, num2, ...);`` - _returns the largest integer in the set_
> * &ensp; ``Math.min(num1, num2, ...);`` - _returns the smallest number in the set_

&ensp;A tag template is a loggerTag function that allows you to parse a template string.
> > ```javascript
> >    let phrase = 'It will be a victorious UA spring!';
> >      phrase.toUpperCase(); // => 'IT WILL BE A VICTORIOUS UA SPRING!'
> >      phrase.toLowerCase(); // => 'it will be a victorious ua spring!'
> >      phrase.length; // => 34
> >        phrase.includes("UA"); // => true
> >        phrase.startsWith('It will be'); // => true
> >        phrase.endsWith('UA spring!'); // => true
> >        phrase.indexOf('victorious'); // => 13
> >        phrase.substring(3, 10); // => 'will be'
> >
> >    const arrPhrase = phrase.split(' '); // => ['It', 'will', 'be', 'a', 'victorious', 'UA', 'spring!']
> >    arrPhrase.join(' '); // => 'It will be a victorious UA spring!'
> > ```

&ensp;Let's consider a few more manipulations with the text.
> > ```javascript
> >    let stringo = 'A great man does great things on great days.';
> >      stringo.replaceAll('great', 'small'); // => 'A small man does small things on small days.'
> >      stringo.charAt(8); // => 'm'
> >      stringo.slice(8, 23); // => 'man does great '
> > ```

&ensp;``null`` means that there is no value, and ``undefined`` means that the value is unknown or not specified; <br>
_Clarify undefined and null conventions on the project. Often they are not recorded on paper, but they are of great importance._

> * &ensp; ``const truthyValue = true;`` - 'text'
> * &ensp; ``const falsyValue = false;`` - "...", (), 0, null, undefined, NaN, 0n
> > &ensp;Operator ``&&`` converts all operands to **boolean** and returns: **left operand** - if it can be converted to **false**, and the **right operand** - in other cases. That is, the logical **AND** stops at false and returns it, or returns the last operand. <br>
> > &ensp;Operator ``||`` converts all operands to **boolean** and returns: **left operand** - if it can be converted to **true**, and the **right operand** - in other cases. That is, logical **OR** stops at truth and returns it or returns the last operand. <br>
> > &ensp;Operator ``!`` converts the operand to **boolean** if necessary, and then inverts - changes true -> false or false -> true.

&ensp;``Symbol`` is a unique identifier that is used as the name of properties in objects;
> * &ensp; ``Symbol.iterator`` - allows in constructions using ``for..of`` and spread syntax ``...``;
> * &ensp; ``Symbol.for(key)`` — returns the symbol stored by the key;

> When creating a symbol, you can give a description (the so-called name), which is mainly used to debug the code:
> > ```javascript 
> > let id = Symbol("idento"); 
> > alert(id.description); // => id
> > ```
> They create "hidden" properties of objects that cannot be accidentally accessed and overwritten from other parts of the program.
> > ```javascript 
> > let usero = { name: "potatoGrower", [id]: 123, town: "Lynovo" }; // Properties whose keys are symbols are not iterated over by the for..in loop.
> > let clone = Object.assign({}, usero); // clones all types of object properties;
> > ```

&ensp;It is recommended to declare variables with ``const`` by default and use ``let`` if you need to change or reassign it later. <br>
The ``typeof()`` operator is used to get the type of a variable's value.
___

&ensp; **ECMAScript** (or **ES**) is a specification. That is, a set of rules and guidelines that a language must follow in order to be considered compliant with this specification.
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

### A **statement** is a separate command in code that performs a specific action.
&ensp;In JavaScript, all instructions can be divided into several categories:
1. declaration of values
> > let and const never go out of scope where they were defined and are always initialized where specified;
2. management of execution flow
> > ```javascript
> >    if (condition) { "perform certain actions";
> >    } else { "an alternative scenario takes place"; }   
> > ```















