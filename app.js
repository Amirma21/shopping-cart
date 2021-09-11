const backDrop = document.querySelector(".backdrop")
const cartBtn = document.querySelector(".cart")
const modal = document.querySelector(".modal")
const confirmBtn = document.querySelector(".modal-confirm-btn")

function showModalFunction(){
    backDrop.style.display = "block"
    modal.style.top = "5rem"
}

function closeModalFunction(){
    backDrop.style.display = "none"
    modal.style.top = "-40rem"
}



cartBtn.addEventListener("click",showModalFunction)
backDrop.addEventListener("click",closeModalFunction)
confirmBtn.addEventListener("click",closeModalFunction)
