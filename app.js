const backDrop = document.querySelector(".backdrop")
const cartBtn = document.querySelector(".cart")
const modal = document.querySelector(".modal")
const confirmBtn = document.querySelector(".modal-confirm-btn")
const productsContainer = document.querySelector(".product-container")


import { productsData } from "./products.js";
// get products

class Products{
    getproducts(){
        return productsData;
    }
    
}

// display products 

class UI{
    displayProducts(products){
        let result = "";
        products.forEach(item => {
            result +=`<section class="product-items">
            <div class="image-container">
                <img class="product-image" src="${item.imageUrl}" alt="p-1">
            </div>
            <div class="imgae-desc">
                <p> ${item.title} </p>
                <p>price :$ ${item.price}</p>
            </div>
            <button class="add-to-card" data-id = ${item.id}>add to cart <i class="fas fa-plus"></i></button>
        </section>`
        });

        productsContainer.innerHTML = result
    }
}


//storage 
class storage{
   static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products))
    }
}


document.addEventListener("DOMContentLoaded",()=>{
   const products = new Products()
   const productsData = products.getproducts()
   const ui = new UI()
   ui.displayProducts(productsData)
   storage.saveProducts(productsData)

   
})








// cart item 
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
