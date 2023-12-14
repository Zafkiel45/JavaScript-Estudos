fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
    },
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})
.then((element) => element.json())
.then((reply) => console.log(reply))
.catch((error) => {
    console('error-' + error)
})