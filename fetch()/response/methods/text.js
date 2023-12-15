fetch('https://picsum.photos/200/300')
.then((data) => {
    console.log(data.text())
})