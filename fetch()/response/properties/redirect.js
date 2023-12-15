fetch('https://jsonplaceholder.typicode.com/todos/1', {
    redirect: "error"
})
.then((data) => {
    console.log(data.redirected);
})