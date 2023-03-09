// sample 1
fetch('http://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1}),
	headers: {'Content-Type': 'aaplication/json'}
})
	.then(res => { return res.json();}) 
	.then(post => console.log(post))        // {id: 101}
	.catch(err => { console.log("Failed") })
					// Promise {<pending>}








// run each query separately, one at a time
console.log('first request')




console.log('second request')




