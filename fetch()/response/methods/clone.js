const img = document.querySelector("#img")
const img2 = document.querySelector("#copy")

fetch('https://picsum.photos/200/300')
.then((data) => {
    let data2 = data.clone()

    data.blob().then((res) => {
        const newImg = URL.createObjectURL(res);
        img.src = newImg;
    })

    data2.blob().then((red) => {
        const newImg = URL.createObjectURL(red);
        img2.src = newImg;
    })
})