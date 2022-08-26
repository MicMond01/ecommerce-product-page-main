
/* ****************************************
             THUMBNAIL SLIDE
**************************************** */

const allThumb = document.querySelectorAll(".thumbs")
let theImage = document.getElementById("main-image")

// console.log(allThumb)

allThumb.forEach(item => {
    
    const imageEl = {
        "images/image-product-1-thumbnail.jpg" : "images/image-product-1.jpg",
        "images/image-product-2-thumbnail.jpg" : "images/image-product-2.jpg",
        "images/image-product-3-thumbnail.jpg" : "images/image-product-3.jpg",
        "images/image-product-4-thumbnail.jpg" : "images/image-product-4.jpg"
    }


    item.addEventListener('click', function(e) {
       const srcEl = e.target.getAttribute("src")
       const newImage = imageEl[srcEl]



        theImage.setAttribute("src", newImage) 
        
    })
})



/* ****************************************
             COUNTER
**************************************** */

let minusEl = document.getElementById("minus-el")
let plusEl = document.getElementById("plus-el")
let numberEl = document.getElementById("number-el")


let counter = 1


minusEl.addEventListener('click', () => {
    counter -= 1

    numberEl.innerHTML = counter




    if(counter <= 1){
        counter = 1
    }
})


plusEl.addEventListener('click', () => {
    counter += 1
    numberEl.innerHTML = counter
})

const badgeEl = document.getElementById("product-number")
const cartBtn = document.getElementById("btn-cart")
const priceEl = document.getElementById("price")
const cartIcon = document.getElementById("Cart-icon")
const cartSlid = document.getElementById("cart-preview")

cartIcon.addEventListener('click', () => {
    if(cartSlid.style.display === 'none'){
        cartSlid.style.display = 'block'
    } else {
        cartSlid.style.display = 'none'
    }
})



const cartEl_img = document.getElementById("cart-info-image")
const cartEl_p = document.getElementById("cart-p")
const cartEl_prc = document.querySelector(".cart-info")
const cartEl_dlt = document.getElementById("delete-icon")

const pAlart = document.getElementById("alart")

// cartEl_img.classList.add("hidden")
// priceEl.classList.add("hidden")
// cartEl_p.classList.add("hidden")
// cartEl_prc.style.display = "none"

// function cartElements(){
//     cartEl_img.classList.remove("hidden")
//     cartEl_p.classList.remove("hidden")
//     cartEl_dlt.classList.add("hidden")
// }

cartEl_dlt.addEventListener('click', () => {
    cartEl_img.classList.add("hidden")
    priceEl.classList.add("hidden")
    cartEl_p.classList.add("hidden")
    cartEl_prc.style.display = "none"
    pAlart.style.display = "block"

    badgeEl.innerHTML = 0
})

if (numberEl.innerHTML <= 0){
    cartEl_img.classList.add("hidden")
    priceEl.classList.add("hidden")
    cartEl_p.classList.add("hidden")
    cartEl_prc.style.display = "none"
    
}



cartBtn.addEventListener('click', () => {

    if (numberEl.innerHTML > 0){
        cartEl_img.classList.remove("hidden")
        priceEl.classList.remove("hidden")
        cartEl_p.classList.remove("hidden")
        cartEl_prc.style.display = "block"
        pAlart.style.display = "none"
    }

    
    let numPrice = numberEl.innerHTML * 125
    priceEl.innerText = " " + numberEl.innerText + "   " + numPrice
    badgeEl.innerHTML = numberEl.innerText


    numberEl.innerHTML = 0

    
})



/* ****************************************
             ABSOLUTE SLIDE
**************************************** */


const thumb_Oly = document.querySelectorAll(".thumbs-oly")
const mainThumb_Oly = document.getElementById("image-oly")
const thumbContainer_Oly = document.getElementById("overlay-container")

theImage.addEventListener("click", () => {
    if(thumbContainer_Oly.style.display === "none") {
        thumbContainer_Oly.style.display = "block";
    }
    else {
        thumbContainer_Oly.style.display = "none"
    }
})


mainThumb_Oly.addEventListener('click', () => {
    if(thumbContainer_Oly.style.display === "block") {
        thumbContainer_Oly.style.display = "none";
    }
    else {
        thumbContainer_Oly.style.display = "block"
    }
})



thumb_Oly.forEach(thumb => {

    const thumb_obj = {
        "images/image-product-1-thumbnail.jpg" : "images/image-product-1.jpg",
        "images/image-product-2-thumbnail.jpg" : "images/image-product-2.jpg",
        "images/image-product-3-thumbnail.jpg" : "images/image-product-3.jpg",
        "images/image-product-4-thumbnail.jpg" : "images/image-product-4.jpg"
    }

    thumb.addEventListener('click', function(event){
        const srcOly = event.target.getAttribute("src")
        const newImageOly = thumb_obj[srcOly]

        mainThumb_Oly.setAttribute("src",newImageOly)
    })

})

const nextBtn_Oly = document.getElementById("next-btn")
const preBtn_Oly = document.getElementById("previus-btn")



/* ****************************************
             ABSOLUTE SLIDE
**************************************** */


const iconMenu = document.querySelector(".icon-menu")
const iconCross = document.querySelector(".cross-icon")
const menuNav = document.querySelector(".main-nav-list")



iconMenu.addEventListener("click", function(e) {
    
    menuNav.classList.add("open");
    console.log("menuNav")
    document.querySelector(".bg").classList.add("bg-color")
})

iconCross.addEventListener('click', () => {
    menuNav.classList.remove("open")
    document.querySelector(".bg").classList.remove("bg-color")
})


