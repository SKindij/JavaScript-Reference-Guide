# Syntax

## <a name="variables"></a>Variables:

&ensp;In JavaScript, you can **declare a variable** using the `var`, `let`, or `const` keyword.\
**Assignment** is the process of giving a value to a declared variable.
> ```javascript
>  // When you declare variable without initializing it, the variable is automatically assigned value undefined.
>    var someVariable; let anotherVariable;
>  // const variables must always be initialized with value, and their value cannot be changed afterward.
>    const PI = 3.14159; const specificNumber = 10;
>  // most basic assignment operator is equals sign (=)
>    someVariable = 'any word';
>  // There are also compound operators, which perform operation and assign result to variable in single step.  
>    let sn = 20;
>      sn += 13; // => 33 - equivalent to sn = sn + 13; 
>      sn -= 9; // => 24 - equivalent to sn = sn - 9; 
>      sn *= 2; // => 48 equivalent to sn = sn * 2;
>      sn /= 6; // => 8 - equivalent to sn = sn / 6;
>      sn %= 5; // => 3 - equivalent to sn = sn % 5;
> ```

&ensp;Variables that hold **non-primitive data types** (such as objects and arrays) are assigned by reference, while variables that hold **primitive data types** (such as numbers, strings, and booleans) are assigned by value.  
> _When a variable is assigned by reference, it stores a reference to the memory location where the value is stored, rather than the value itself. This can have implications when modifying the value of the variable._

&ensp;In JS, you can declare a variable with the same name multiple times within the same scope using the `var` keyword. However, this is generally considered a **bad practice** and can lead to unexpected behavior. The later declaration will simply override the previous declaration, which can cause confusion and bugs.

&ensp;In contrast, when using `let` or `const` to declare variables, you cannot redeclare a variable with the same name within the same block of code.

&ensp;**Shadowing** occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope. 
The inner variable will "shadow" the outer variable, making it inaccessible within that scope.
> ```javascript
>  let someDigit = 25;
>  function foo() {
>    let someDigit = 30; // inner variable shadows outer variable
>    console.log(someDigit); // => 30
>  }
>  foo();
>  console.log(someDigit); // => 25 - outer variable is still accessible outside of function
> ```

&ensp;**Temporal Dead Zone** (TDZ) - behavior in JS that prevents variables from being accessed before they are declared.\
If you try to access a `let` or `const` variable before its declaration, you will get a `ReferenceError: is not defined`.

&ensp;When naming variables, you should follow certain conventions:
- variable names are case-sensitive; 
- can contain letters, numbers, and underscores;
- must start with a letter or an underscore;
- use camelCase or snake_case for variable names;
- choose descriptive names that convey the purpose of the variable; 
- important to avoid using reserved keywords.


## <a name="data-types"></a>Data types:

### Strings
_It is a sequence of characters that represent text, and it is enclosed in either single quotes (' '), double quotes (" "), or backticks ( )._

> concatenate (combine) strings 
> > ```javascript
> >  let firstName = "John"; let lastName = "Doe";
> >  let fullName = firstName + " " + lastName; // => "John Doe"
> > ```
> get the length of a string
> > ```javascript
> >  let message = "A wonderful spring day!";
> >  let messageLength = message.length; // => 23
> > ```
> access individual characters in a string
> > ```javascript
> >  let firstCharacter = message[0]; // => "A"
> >  let fifthCharacter = message[4]; // => "n"
> > ```

&ensp;JS provides many built-in methods for manipulating strings. 
> > ```javascript
> >  let phrase = 'It will be a warm Spring!';
> >
> >      phrase.toUpperCase(); // => ''IT WILL BE A WARM SPRING!''
> >      phrase.toLowerCase(); // => ''it will be a warm spring!''
> >    // check if string contains searchValue and returns boolean 
> >      phrase.includes("warm"); // => true
> >      phrase.includes("cold"); // => false
> >    // check if string starts or ends with searchValue respectively
> >      phrase.startsWith('It will be'); // => true
> >      phrase.endsWith('warm spring!'); // => true
> >    // index of first occurrence of searchValue within string
> >    // it returns -1 if the value is not found
> >      phrase.indexOf('be'); // => 8
> >      phrase.substring(3, 10); // => 'will be'
> >    // returns character at specified index in string
> >      let characterAtIndex11 = phrase.charAt(11); // => 'a'
> > ```

&ensp;Let's consider a few more manipulations with the text.
> _Note: It's important to understand that strings in JavaScript are immutable, which means that string methods do not modify the original string, but instead return a new string with the desired changes._
> > ```javascript
> >  let stringo = 'A great man does great things on great days.';
> >
> >  // split string into array of substrings based on specified separator  
> >    const arrPhrase = stringo.split(' '); // => ['A', 'great', 'man', 'does', 'great', 'things', 'on', 'great', 'days.']
> >  // concatenate two or more strings and returns new string  
> >    let citation = 'Citation:'; 
> >    let fullPhrase = citation.concat(" ", stringo);
> >      fullPhrase; // => 'Citation:  A great man does great things on great days.'
> >      
> >  // searchValue can be string or regExp, and replaceValue can be string or function
> >    stringo.replaceAll('great', 'small'); // => 'A small man does small things on small days.'
> >  // startIndex is inclusive, while endIndex is exclusive
> >    stringo.slice(8, 23); // => 'man does great '
> >  //  If endIndex is omitted, extraction continues to end of string. 
> >  // Negative indices: -1 refers to last character, -2 refers to second-to-last character
> > ```
> > 
&ensp;A tag template is a `loggerTag` function that allows you to parse a template string.


### Numbers
&ensp;There are several commonly used methods in JS for working with numbers. 

> * &ensp; ``Number.isFinite (constNum);``
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


### booleans
&ensp;They are a data type in JavaScript that represent two values: `true` and `false`. They are used to represent **binary logic**, where something can be either true or false. Booleans are often used in conditional statements and comparisons to determine the flow of a program.

&ensp;All values are **truthy** except for a few specific cases that are considered **falsy** `0`, `NaN`, `null`, `undefined`, `false`, and empty strings `('')`.

### Null and Undefined: 
&ensp;In JS, null and undefined are special values that represent the absence of a value. When you assign `null` to a variable, you are explicitly setting it to have no value. When a variable is declared but not assigned any value, it is automatically assigned the value `undefined`.

&ensp;It's important to note that null and undefined are distinct values in JS, and they are not interchangeable. `null` is a deliberate assignment to indicate the absence of a value, whereas `undefined` typically indicates that a value is missing or has not been assigned.\
> `null` is of type **object**, whereas `undefined` is of type **undefined**


### symbols
&ensp;It is unique data type introduced in ES6 that represents unique identifier that is not equal to any other value, including other Symbol values.

&ensp;Here are some common use cases of Symbol in real projects:
> Symbol values can be used as property keys in JS objects to create non-enumerable properties.\
> This can be useful for creating **hidden or internal properties** that should not be exposed in certain use cases.
> > ```javascript 
> >  const mySymbol = Symbol('mySymbol');
> >  const myObj = {
> >    [mySymbol]: 'It is a non-enumerable property',
> >    foo: 'This is an enumerable property'
> >  };
> >  console.log( Object.getOwnPropertySymbols(myObj) ); // => [Symbol(mySymbol)]
> > ```
> When creating symbol, you can give a description (so-called name), which is mainly used to debug code:
> > ```javascript 
> > let id = Symbol("idento"); 
> > console.log(id.description); // => idento
> > ```
> They create "hidden" properties of objects that cannot be accidentally accessed and overwritten from other parts of the program.
> > ```javascript 
> > let usero = { name: "potatoGrower", [id]: 123, town: "Lynovo" }; 
> > // Properties whose keys are symbols are not iterated over by the for..in loop.
> > let clone = Object.assign({}, usero); // clones all types of object properties;
> > ```

> * &ensp; ``Symbol.iterator`` - allows in constructions using ``for..of`` and spread syntax ``...``;
> * &ensp; ``Symbol.for(key)`` — returns the symbol stored by the key;


## <a name="variable-scope"></a>Variable scope:
&ensp;It refers to the **accessibility and visibility of a variable** within a certain portion of code during runtime.\
It determines where a variable can be accessed and modified within a program. 
* global scope
* local scope 
* function scope
* block scope

 
* `var` has function-level scope, meaning they are accessible 
  - within the function they are declared in 
  - or globally if declared outside any function;
* `let` and `const` have block-level scope, meaning they are accessible 
  - only within the block of code they are declared in, such as a loop or an if statement.


## <a name="additionally"></a>Additionally:

### hoisting





### Lexical scope (also known as static scope):
&ensp;It is a concept that determines how **variable names** are resolved at runtime based on their position in the source code during the static phase of code compilation. It is determined by the nesting of functions within other functions or code blocks in the source code, and it remains fixed during the entire runtime of the program.

&ensp;**Lexical scope** plays a role in determining the **variable scope**. Variables declared in a certain scope (_function or a code block_) have access to the surrounding lexical scope, which allows them to access variables from their parent scopes.\
> In other words, **lexical scope** is determined by the nesting of functions within other functions or code blocks **in the source code**. When a variable is referenced within a function, JS looks for that variable first within the local scope of the function, and if not found, it looks in the next outer scope until it reaches the global scope.
> > ```javascript
> >  const globalVar = 'I am global!';
> >  function outerFunction() {
> >     const outerVar = 'I am outer!';  
> >     function innerFunction() {
> >        const innerVar = 'I am inner!';
> >        console.log(globalVar); // accesses from global scope
> >        console.log(outerVar); // accesses from outer scope
> >        console.log(innerVar); // accesses from local scope
> >     }
> >    innerFunction();
> >  }
> >  
> >  outerFunction();
> > ```


## <a name="operators"></a>Operators:

* arithmetic
* comparison
* logical
* bitwise
* assignment


## <a name="literals"></a>Literals:

* string
* numeric
* boolean
* object
