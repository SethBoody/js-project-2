let productsDom = document.querySelector(".products");
let noProducts = document.querySelector('.no-products');
let toHomePage = document.querySelector(".to-home-page");

function drowCartFavoritesProductsUI(allProducts = []){
    let products = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts; // to return the last items in the array

    if( JSON.parse(localStorage.getItem("productsFavorite")).length === 0){
        noProducts.innerHTML = " Ops!! there is no items";
        toHomePage.innerHTML = "Home Page";
        toHomePage.style.display = "block";
        toHomePage.addEventListener("click" , function (){
            window.location = "index.html";
        });
    };    

    let productsUI = products.map( (item) => {
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
                <button class="add-to-cart " onclick ="removeFromFavorite(${item.id})" > Remove from favorite </button> 
            </div>
        </div>
        `;
    });    productsDom.innerHTML = productsUI.join("");// to move the coma btween the items 
}; 
drowCartFavoritesProductsUI();


function removeFromFavorite(id){
    let productsFavorite =  localStorage.getItem("productsFavorite");
    if(productsFavorite){
        let items = JSON.parse(productsFavorite);
        let filteredItems = items.filter((item)=> item.id !== id);
        localStorage.setItem("productsFavorite" , JSON.stringify(filteredItems));

        drowCartFavoritesProductsUI(filteredItems);
    }
}


// function saveItemID (id){
//     localStorage.setItem("productID" , id);
//     window.location = "cartDetails.html";
// }