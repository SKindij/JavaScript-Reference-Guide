'use strict'
// GET
const ul = document.getElementById('authors');
	const url = 'https://randomuser.me/api/?results=10'; 
	
	function createNode(element) { return document.createElement(element); };
	function append(parent, el) { return parent.appendChild(el); };
	  
	function status(response) {  
      if (response.status >= 200 && response.status < 300) {  
	    console.log('Status:', response.status);
        return Promise.resolve(response)  
      } else { return Promise.reject(new Error(response.statusText)) }  
    };
    function json(response) { return response.json() }

    fetch(url)  
      .then(status)  
      .then(json)  
      .then(function(data) { console.log('Request succeeded with JSON response', data); })
      .catch(function(error) { console.log('Request failed', error); });  
	  
	fetch(url)  
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

// POST












