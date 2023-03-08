'use strict'
    // Fetch uses GET requests by default
    const ul = document.getElementById('authors');
	const urlGet = 'https://randomuser.me/api/?results=10'; 
	
	function createNode(element) { return document.createElement(element); };
	function append(parent, el) { return parent.appendChild(el); };
	  
	function status(response) {  
      if (response.status >= 200 && response.status < 300) {  
	    console.log('Status:', response.status);
        return Promise.resolve(response)  
      } else { return Promise.reject(new Error(response.statusText)) }  
    };
    function json(response) { return response.json() }

    fetch(urlGet)  
      .then(status)  
      .then(json)  
      .then(function(data) { console.log('Request succeeded with JSON response', data); })
      .catch(function(error) { console.log('Request failed', error); });  
	  
	fetch(urlGet)  
        .then(status)  
        .then(json)    
	    .then(function(data) {
	      let authors = data.results;
		  // for each author in Authors variable, we need to create an element of list that displays portrait and name of author.
          return authors.map(function(author) {
            let li = createNode('li');
	    	let img = createNode('img');
            let span = createNode('span');
		      img.src = author.picture.medium;
			  // SPAN element must contain name and surname of the author
			  span.innerHTML = `${author.name.first} ${author.name.last}`;
			    // use the Append function to display these elements on the page
		  	    append(li, img);
                append(li, span);
                append(ul, li);
          })
	    })
        .catch(function(error) { console.log(error); });	  


// Be sure to add a constant variable that holds a reference to the Random User API.
const urlPost = 'https://randomuser.me/api';

// before you make a POST request, create the data you want to send to the API
let data = {
  name: 'Sauron'
}

// fetch() can take a second parameter (fetchData), which allows you to control various settings:
let fetchData = {
  method: 'POST',
  body: data,
  headers: new Headers()
}

// then() function will include code that handles the response received from the Random User API server:
fetch(urlPost, fetchData)
.then(function() {
    // Handle response you get from the server
});
