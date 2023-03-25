let cartProductDivDom = document.querySelector(".carts-products div");
let cartProductMenu = document.querySelector(".carts-products");
let shoppingCartIcon = document.querySelector(".shopping-cart");
let badge = document.querySelector(".badge");
shoppingCartIcon.addEventListener("click" , openCartMenu);


function openCartMenu(){
    if(cartProductDivDom.innerHTML != "" && cartProductMenu.style.display == "none" ){
    cartProductMenu.style.display= "block";
    } else{
        cartProductMenu.style.display= "none";
    }
}

//check if there is item in localstorage
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []; 

if(addedItem){
    addedItem.map((item) => {
        cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badge.style.display= "block"; 
    badge.innerHTML += addedItem.length;

};