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

> * &ensp; ``const truthyValue = true;`` - 'text'
> * &ensp; ``const falsyValue = false;`` - "...", (), 0, null, undefined, NaN, 0n





