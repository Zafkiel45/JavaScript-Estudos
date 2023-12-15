fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
    data.headers.forEach((item) => {
        console.log(item)
    }) // It's possible to use the method "get()" for pick specifiques informations.
})