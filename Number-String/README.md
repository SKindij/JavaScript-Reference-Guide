# Number()

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

# String()

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

# RegExp

&ensp; Regular expressions are a powerful tool for searching and replacing a string. In JS, they are implemented by the RegExp object and integrated into string methods.
> * "long" syntax: ``regexp = new RegExp("pattern", "flags");``
> * "short" syntax: ``regexp = /pattern/;``     _// no flags_
> * "short" syntax: ``regexp = /pattern/gmi;``    _// with gmi flags_

&ensp;  _Slashes are used when we know exactly what the regular expression will be when we write the code - which is most situations._<br>
_And new RegExp - when we want to create a regular expression "on the fly" from a dynamically generated string._

&ensp; Regular expressions can have flags that affect the search.
+ **m** (multiline mode);
+ **u** (includes full Unicode support.);
+ **g** (the search looks for all matches, without it - only the first);
+ **i** (search is case-insensitive: there is no difference between A and a);
+ **s** (enables "dotall" mode, in which the dot . can match the newline character \n);
+ **y** (search mode at a specific position in the text);

> The **str.match(regexp)** method for the string returns matches with the regular expression regexp
> > ```javascript
> >  let str = "Father, our father!";
> >  console.log( str.match(/father/gi) );  // => (2) ['Father', 'father']
> >  console.log( str.match(/parent/gi) );  // => null
> > ```

> In the absence of matches, not an empty array, but **null** is returned.
> > ``let matches = "JavaScript".match(/HTML/);``   // => null

> **str.replace(regexp, replacement)** replaces matches from regexp in str with replacement _(all if **g** flag is present, otherwise only first)_
> > ```javascript
> > console.log( "We will, we will".replace(/we/i, "I") ); /);  // I will, we will
> > console.log( "We will, we will".replace(/we/ig, "I") );  // I will, I will
> > ```
