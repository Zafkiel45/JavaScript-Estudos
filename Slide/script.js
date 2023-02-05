// const container = document.getElementById('container');
// const img = document.querySelectorAll('#container img');
// var idx = 0;

// function carrosel(){
//     idx++;

//     if(idx > img.length - 1){
//         idx = 0;
//     }

//     container.style.transform = `translateX(${-idx * 300}px)`
// }

// setInterval(carrosel, 1800);

const slides = document.querySelectorAll('.slides');
let idx = 0; 

console.log(idx)

slides[idx].classList.add('slide-ativo')

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

prev.addEventListener('click', function(){
    slides[idx].classList.remove('slide-ativo');
    console.log(idx)
    idx = (idx - 1 + slides.length) % slides.length;
    console.log(idx)
    slides[idx].classList.add('slide-ativo');
})

next.addEventListener('click', function(){
    slides[idx].classList.remove('slide-ativo');
    console.log(idx)
    idx = (idx + 1) % slides.length ;
    console.log(idx)
    slides[idx].classList.add('slide-ativo');
})


// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// slides[currentSlide].classList.add('active-slide');

// const prevButton = document.querySelector('#prev');
// const nextButton = document.querySelector('#next');

// prevButton.addEventListener('click', function() {
//     slides[currentSlide].classList.remove('active-slide');
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active-slide');
// });

// nextButton.addEventListener('click', function() {
//     slides[currentSlide].classList.remove('active-slide');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active-slide');
// });
