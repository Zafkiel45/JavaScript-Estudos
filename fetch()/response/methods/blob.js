const img = document.querySelector("#img")

fetch('https://picsum.photos/200/300')
.then((data) => {
    return data.blob();
}).then((res) => {
    const newImg = URL.createObjectURL(res);
    img.src = newImg;
})