const modalContainer = document.querySelector('#modal-container')
const modalBtnClose = document.querySelector('#modal-btn-close')

console.log(modalContainer, modalBtnClose)

modalBtnClose.addEventListener("click", () =>{
    modalContainer.classList.toggle('active')
        console.log('teste')
    
})

setTimeout(() => {
modalContainer.classList.add('active')
console.log('foi')
}, 3000)
