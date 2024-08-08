let sliderImage = document.querySelector(".slider__image")
let sliderInput = document.querySelector(".slider__input")
function biggerImg(){
    let currentRange = sliderInput.value / 100
    sliderImage.style.transform = `scale(${currentRange})`
}
let newImg = _.debounce(biggerImg, 100)
sliderInput.addEventListener("input", newImg) 

const box = document.getElementById('box');

// Функція для переміщення об'єкту
function moveBox(event) {
  box.style.left = `${event.clientX - box.offsetWidth / 2}px`;
  box.style.top = `${event.clientY - box.offsetHeight / 2}px`;
}

// Використовуємо debounce для зменшення кількості викликів функції при русі миші
const debouncedMoveBox = _.debounce(moveBox, 100);

document.addEventListener('mousemove', debouncedMoveBox);