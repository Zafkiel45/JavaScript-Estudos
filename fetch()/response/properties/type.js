fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data.type))