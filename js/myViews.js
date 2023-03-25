let viewItems = localStorage.getItem("viewItems")? JSON.parse(localStorage.getItem("viewItems")) : [] ;
let products = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")) : productsDB;

// variables 
let noProducts = document.querySelector(".no-products");
let productsDom = document.querySelector(".products");
let drowProductsUI; // all this change of an immediatly function to make it both => immediatly and can use it in another position 
( function drowProductsUI(){
    
    let productsUI = viewItems.map(item => {
            return `
            
            <div class="product-item">
            <img src="${item.imageUrl}" alt="chair" class="product-item-img"/>
            <div class="product-item-info">
                <a onclick = "saveItemID(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span> <br> 
                <span> Quntity : ${item.qty}</span>
            </div>
            <div class="product-item-actions">
            <button class="add-to-cart" onclick ="addedToCart(${item.id})">Add to cart</button>

                <button class="add-to-cart " onclick ="removeFromFavorite(${item.id})" > Remove From My Views </button> 
            </div>
        </div>
        `;
    });

        productsDom.innerHTML = productsUI.join("");// to move the coma btween the items 
    if(viewItems.length === 0) {
        console.log("No");
        noProducts.innerHTML = "No Products !!!";
    }
})(); // imediatly function

// add to  cart
function addedToCart(id){

    let product = products.find( (item) => item.id === id);
    let isProductinCart = addedItem.some((i) => i.id === product.id)

    if(isProductinCart){
        addedItem = addedItem.map( (p) => {
            if(p.id === product.id)p.qty +=1;
            return p;
        })
    }else{
        addedItem.push(product);
    }
    cartProductDivDom.innerHTML =""; 
    addedItem.forEach((item)=>{
        cartProductDivDom.innerHTML += `<p>${item.title} <span class ="menu-qty">${item.qty}</span></p>`;
    });

     //save data
     localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
    
     //add counter of items
     let cartLength = document.querySelectorAll(".carts-products div p ");
     badge.style.display= "block";
     badge.innerHTML = cartLength.length;
 }