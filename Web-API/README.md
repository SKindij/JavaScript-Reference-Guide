# 📚 Browser API

## <a name="domBom"></a>📖 DOM-BOM

### DOM (Document Object Model).
* Fetching
  + index.html
* Parsing
  + Render Tree (WebKit) 
  + Frame Tree (Gecko)
  + CSSOM (CSS Object Model)
* Layout
* Paint
  + background-color;   >>  background-image;   >>   border;   >>   children;   >>   outline;
* Compositing

### BOM (Browser Object Model)
* navigator
  + User-Agent Client Hints
* screen
* location
  + console.log(window.location.href);   
  + window.location.reload();
  + window.location.replace("https://github.com/SKindij");
* Fetch
* history
* pageX/pageY 
  + pageXOffset
  + pageYOffset
* clientX/clientY 
  + clientXOffset
  + clientYOffset


### Basics of DOM Manipulation in Vanilla JavaScript   

* **NodeList**
  + stores any nodes (including comments and text);
  + can be both a "live" collection (``getElementsByName`` and ``childNodes``) and a static one (``querySelectorAll``);
    - ```javascript
        let myElement = document.querySelector("#foo > div.bar"); 
        //If there are no required elements, null will be returned.
        const myChildElement = myElement.querySelector('input[type="submit"]');
      ``` 
  + method ``.querySelectorAll()`` returns an array-like static NodeList collection of found elements;
    - ```javascript
        let myElements = document.querySelectorAll("div>p");
      ``` 
    - to search for all elements in general, you need to pass string ``'*'``, which is called a **wildcard**, as an argument.  

To work with a collection of elements, we must convert the list to an array or "borrow" the array methods from the Array prototype.
> > > ```javascript
> > >  Array.from(myElements).forEach(doSomethingWithEachElement);
> > >    Array.from(myElements).forEach((item) => {  item.classList.add('foo'); });
> > >  Array.prototype.forEach.call(myElements, doSomethingWithEachElement); 
> > > ```

* HTMLCollection
  + save only HTML element nodes;
  + always remains relevant — JS will update it when new element appears;
  + method ``.getElementById('idName')`` is only in document object (_good for unique elements: title, form_);
    - ```javascript
         let divAll = document.getElementsByTagName("div");
           const newElement = document.createElement('div'); //creates new element with given tag
             document.body.appendChild(newElement);
         let myElement = document.querySelector("div");    
           const myNewTextNode = document.createTextNode('some text'); // creates new text node with given text
            myElement.appendChild(myNewTextNode);
      ```
  + method ``.getElementsByClassName('class1 class2')`` defined for any HTML-Element of page;

Take your time writing loops over HTMLCollection. Because the cycle can become infinite in those cases when searchable elements are added and removed from the page.

- - -

HTML attribute values can be read and written using element properties.
> > * to set class:
> >   + ``element.className = "hacked";``
> >     - ``element.className.add('hello');``
> >     - ``element.className.remove('bye');``
> > * add or remove multiple classes:
> >   + ``button.classList.add('active', 'paralel');``
> >   + ``button.classList.remove('active');``
> > * to set styles:
> >   + ``element.style.marginTop = "20px";``
> >   + ``element.style.color = "gray";``
> >   + ``element.style.backgroundColor = "beige";``
> >   + ``elem.style.cssText = "color: blue; border: 1px solid black";``
> > * get a child or parent element:
> >   + ``myElement. children``
> >   + ``myElement.firstChild`` or ``myElement.lastChild``
> >   + ``myElement.parentElement``
> > * get the next/previous neighbor node:
> >   + ``myElement.nextElementSibling`` or ``myElement.previousElementSibling``
> > * internal content of elements:
> >   + ``El.innerHTML`` _returns the HTML code of everything in the current element (the easiest way to see the HTML content of an element)_
> >   + ``El.innerText`` _for working with text_
> >   + ``El.textContent`` _returns the contents of hidden nested children as well (use to add text)_
> >   + ``outerHTML`` _returns the HTML code of both this element and everything in it_
> > * attribute management:
> >   + ``element.setAttribute("style", "color: red; border: 1px solid blue;");``
> >   + ``someElement.getAttribute('id' || 'class' || 'type');``

**Date attributes** are used to store values on HTML elements.
_When the server compiles the starting HTML, it can put values in data attributes. The frontend can then use them instead of sending the request to the server._
> > * ``elem.dataset.columns`` - the value of the data-columns attribute;

To delete a node: ``element.remove();`` 


- - -

### insertAdjacentHTML/Text/Element

- - -

### Web Storage 
+ **Local Storage** (_for long-term data storage_) >>>
  * we specify name of field in which data (_up to 5MB_) should be saved (values in form of strings), and then use this name to retrieve it;
  * this object is one for all tabs and windows within the source (same domain/protocol/port);
  * if we set data in one window, changes become visible in another;
    - write: ``window.localStorage.setItem("name", "Doka SKj");``
    - read: ``const name = window.localStorage.getItem("name");``
    - remove: ``window.localStorage.removeItem("user");``
    - clear: ``window.localStorage.clear();``
+ **Session Storage** (_data is stored only during the lifetime of the current session_) >>>
  * is created when a new browser tab is opened. _The amount of data is limited to 5MB_;
  * page session remains active as long as the browser window is open and persists between page reloads;
  * values are stored in order they are added, so first one added will be stored in position ``.key(0)`` and so on.

Use wrapper functions to prevent errors related to failed write attempts, missing localStorage in the browser, and code duplication.
> ```javascript
>  function setItem(key, value) {
>    try { return window.localStorage.setItem(key, value) 
>    } catch (e) { console.log(e) }
>  } 
> ```
> > ```javascript
> >  function getItem(key) {
> >    try { return window.localStorage.getItem(key)
> >    } catch (e) { console.log(e) }
> >  }
> > ```
> ```javascript
>  function setJSON(key, value) { 
>    try {
>      const json = JSON.stringify(value) 
>      setItem(key, json)
>    } catch (e) { console.error(e) }
>  }
> ```
> > ```javascript
> >  function getJSON(key) {
> >    try {
> >      const json = getItem(key)
> >      return JSON.parse(json)
> >    } catch (e) { console.error(e) }
> >  }
> > ```

A global storage event is fired, which can be used to track changes in storage. This event occurs only on other open pages of the current site. The event contains properties: key - the key that was changed; oldValue - the old value recorded in the field; newValue - new value; url - the address of the page where the change was triggered.
> ```javascript
>  window.sessionStorage.setItem("name", "Doka SKj")
>    function readUser() { const userJSON == sessionStorage.getItem("user")
>      if (userJSON === null) { return undefined } 
>        try { return JSON.parse(userJSON)
>        } catch (e) {sessionStorage.removeItem("user"); 
>            return undefined }
>    }
> ```


- - -

## <a name="webApi"></a>📖 Web API
&emsp;Global Window object is an object that provides access to the browser's Web API.

&emsp;In fact, if the programs are written in different languages, it can be difficult to make them friends and make them communicate with each other. That's why **APIs** (_Application Programming Interface_) exist.<br>
&emsp;JavaScript objects are very useful for transferring data from one site to another, especially when using APIs.

&emsp;**API** - structured form of communication between different applications.<br>
**REST** (_Representational State Transfer_) - component communication style in which all required data is specified in request parameters.<br>
&emsp; The interaction between the client and the server is reduced to 4 operations
   |   C    |   R   |     U      |   D    |
   |--------|-------|------------|--------|
   | create | read  |   update   | delete |
   |  POST  |  GET  | PUT, PATCH | DELETE |

&emsp; **RPC** (_Remote Procedure Call_) - is a style in which request message stores action to be performed and data required for that action.<br>
&emsp; **JSON-RPC** must have the following fields:
  |      method      |       params    |          id          |
  |------------------|-----------------|----------------------|
  | "name of method" | [array of data] | establish compliance |

- - -

&emsp; **XMLHttpRequest** is a built-in browser object that allows you to make HTTP requests to the server without reloading the page. XMLHttpRequest has two modes of operation: synchronous and asynchronous.

To make a request, we need to complete three steps:
1. Create an XMLHttpRequest.
    + ``let xhr = new XMLHttpRequest();`` 
2. Initialize it.
    + ``xhr.open(method, URL, async = true, user, password);``
        - HTTP method(usually "GET" or "POST");
        - URL where the request is sent;
3. Send a request.
    + ``xhr.send([body]);``

Next, we listen to events on xhr to get the answer:
  + **load** – occurs when any response is received, including HTTP error responses such as 404.
  + **error** – when the request cannot be fulfilled, for example, there is no connection or URL.
  + **progress** - occurs periodically while loading a response, reports progress.
> Here is a complete example.
> > ```javascript
> > let xhr = new XMLHttpRequest();
> > xhr.open('GET', '/article/example/load');
> > xhr.send();
> > 	xhr.onload = function() {
> > 		if (xhr.status != 200) {  // analyze HTTP status of response
> > 			alert(`Error ${xhr.status}: ${xhr.statusText}`);    // 404: Not Found
> > 		} else { alert(`Done, received ${xhr.response.length} byte`);  // this is server response
> >   } };
> >   xhr.onprogress = function(event) { 
> >     if (event.lengthComputable) { alert(`Received ${event.loaded} of ${event.total} byte`);
> > 	  } else { alert(`Received ${event.loaded} byte`); 
> >   } };
> >   xhr.onerror = function() { alert("The request failed"); };
> > ```

- - -

&emsp; **AJAX** (_Asynchronous JavaScript and XML_) allows us to access information from external pages even after our page has loaded.<br>
**fetch function** allows us to send HTTP requests to the server. With its help, you can both receive and send data.<br>
Result of the fetch call will be a **Promise** (a wrapper object for asynchronous code) - this is something that will happen between now and the final moment in time (something that will happen in the future, but probably not immediately).

> If you are working with JSON API, you will need to check status and parse JSON for each response. _You can simplify your code by defining status parsing and JSON parsing as separate functions that return Promises._<br>
> You will only have to think about handling the data itself and, of course, exceptions.
> > ```javascript
> > function status(response) {  
> >   if (response.status >= 200 && response.status < 300) {  
> >     return Promise.resolve(response)  
> >   } else { return Promise.reject(new Error(response.statusText)) }  
> > };
> > function json(response) { return response.json() }
> > 
> > fetch('users.json')  
> >   .then(status)  
> >   .then(json)  
> >   .then(function(data) { console.log('Request succeeded with JSON response', data); })
> >   .catch(function(error) { console.log('Request failed', error); });
> > ```

- - -

&emsp; ``fetch()`` method can take a second parameter, the **init object**, which allows you to control various settings:
> _An example of sending a POST request:_
> > ```javascript
> > async function postData(url = '', data = {}) {
> >   // Default options are marked with *
> >   const response = await fetch(url, {
> >     method: 'POST', // *GET, POST, PUT, DELETE, etc.
> >     mode: 'cors', // no-cors, *cors, same-origin
> >     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
> >     credentials: 'same-origin', // include, *same-origin, omit
> >     headers: {
> >       'Content-Type': 'application/json'
> >       // 'Content-Type': 'application/x-www-form-urlencoded',
> >     },
> >     redirect: 'follow', // manual, *follow, error
> >     referrerPolicy: 'no-referrer', // no-referrer, *client
> >     body: JSON.stringify(data) // body data type must match "Content-Type" header
> >   });
> >   return await response.json(); // parses JSON response into native JavaScript objects
> > }
> > 
> > postData('https://example.com/answer', { answer: 42 })
> >   .then((data) => {
> >     console.log(data); // JSON data parsed by `response.json()` call
> >   });
> >  ```

- - -

## <a name="webWorkers"></a>📖 Web Workers

