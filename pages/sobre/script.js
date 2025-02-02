const sliderContainer = document.querySelector('.slide-container')
const slides = document.getElementsByClassName('slide')
const btnPrev = document.querySelector('#prev')
const btnNext = document.querySelector('#next')

btnPrev.addEventListener('click', () =>{
    sliderContainer.insertBefore(slides[slides.length - 1], slides[0])
})

btnNext.addEventListener('click', () =>{
    sliderContainer.appendChild(slides[0])
})