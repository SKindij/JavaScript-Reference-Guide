// sample 1
function reqListener() {
	let data = JSON.parse(this.responseText);
	console.log(data) }

function reqError(err) {
	console.log("Fetch Error:", err) }

let request = new XMLHttpRequest();
		request.onload = reqListener;
		request.onerror = reqError;

// run each query separately, one at a time
console.log('first request')
	request.open("GET", 'http://jsonplaceholder.typicode.com/posts/2', true);
    request.send();       // => {userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae...'}

console.log('second request')
	request.open("GET", 'http://jsonplaceholder.typicode.com/posts/7', true);
    request.send();       // => {userId: 1, id: 7, title: 'magnam facilis autem', body: 'dolore placeat...'}





