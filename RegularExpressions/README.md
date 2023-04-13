# Regular Expressions

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
> > console.log( "We will, we will".replace(/we/i, "I") ); /);  // => I will, we will
> > console.log( "We will, we will".replace(/we/ig, "I") );  // => I will, I will
> > ```

&ensp; In the **replacement string**, we can use special combinations of characters to insert match fragments:
+ $& inserts all matches found
  - ``console.log ( "! HTML as well as CSS".replace(/HTML/, "$& and JavaScript") );`` => _! HTML and JavaScript as well as CSS_
+ $` inserts part of the string before the match
  - ``console.log ( "! HTML as well as CSS".replace(/HTML/, "$` JavaScript") );`` => _! !  JavaScript as well as CSS_
+ $' inserts the part of the string after the match
  - ``console.log ( "! HTML as well as CSS".replace(/HTML/, "$' JavaScript") );`` => _!  as well as CSS JavaScript as well as CSS_

> The **regexp.test(str)** method checks if there is at least one match, if so, returns true, otherwise false.
> > ``console.log( /learning/i.test("I'm learning JavaScript") );``  // => true

&ensp; A character class is a special notation that corresponds to any character in a particular set.<br>
+ **\d** = "any single digit"
> > ```javascript
> >   let myNumber = '+38-062-751-59-37';
> >		let regexp = /\d/g;
> >		console.log (myNumber.match(regexp) );  // => ['3', '8', '0', '6', '2', '7', '5', '1', '5', '9', '3', '7']
> > ```
+ **\s** = ("space")
+ **\w** = ("word")
+ **.** dot means "any character"

> find non-numeric **\D** characters and remove them from the string:
> > ```javascript
> >  let myNumber = '+38-062-751-59-37';
> >  console.log (myNumber.replace(/\D/g, "") ); // => 380627515937
> > ```

&ensp; The caret **^** and dollar **$** characters have special meanings in regular expressions. They are called "anchors".
+ **^** means match with beginning of text, and **$** - with end;
+ both together **^...$** are often used to check if a string matches a pattern completely;
> _Let's check that the string is a time in the format 12:34, that is, two numbers, then a colon, then two more numbers._
> > ```javascript
> >  let regexp = /^\d\d:\d\d$/;
> >			console.log ( regexp.test("14:27") );     // => true
> >			console.log ( regexp.test("14:327") );   // => false
> > ```
In multiline mode, **^** and **$** denote the start/end of each line of text.

&ensp; Multiple characters in square brackets **[…]** mean "search for any given character".<br>
For example, [a-z] corresponds to a character in the range from a to z, or [0-5] to a number from 0 to 5.
