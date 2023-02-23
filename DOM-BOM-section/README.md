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










