# Web API
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
___

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

___

&emsp; **AJAX** (_Asynchronous JavaScript and XML_) allows us to access information from external pages even after our page has loaded.<br>
**fetch function** allows us to send HTTP requests to the server. With its help, you can both receive and send data.<br>
Result of the fetch call will be a **Promise** (a wrapper object for asynchronous code) - this is something that will happen between now and the final moment in time (something that will happen in the future, but probably not immediately).

> If you are working with JSON API, you will need to check status and parse JSON for each response. _You can simplify your code by defining status parsing and JSON parsing as separate functions that return Promises._ You will only have to think about handling the data itself and, of course, exceptions.
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



___

