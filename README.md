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

&ensp; &ensp; ``Number.isFinite (constNum);`` <br>
&ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; => true &ensp; &ensp; &ensp; // _if a number was passed to it during the call_ <br>
&ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; => false &ensp; &ensp; &ensp; // _if a special value or non-numeric type is passed_ <br>









