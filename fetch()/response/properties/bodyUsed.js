fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
    console.log(data.bodyUsed);
    return data.json()
}).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})