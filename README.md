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

