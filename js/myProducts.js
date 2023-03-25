let noProducts = document.querySelector(".no-products");
let productsDom = document.querySelector(".products");
let drowProductsUI; // all this change of an immediatly function to make it both => immediatly and can use it in another position 
( drowProductsUI=function (products =[]){
    let myProducts = products.filter((item) => item.isMe === "Y");
    if(myProducts.length !==0 ){
    let productsUI = myProducts.map( (item) => {
            return `
            <div class="product-item" style ="border : ${item.isMe === 'Y'  ? "2px solid green" : ""}">
                <img src="${item.imageUrl}" alt="chair" class="product-item-img"/>
                <div class="product-item-info">
                    <a onclick = "saveItemID(${item.id})">${item.title}</a>
                    <p>${item.desc}</p>
                    <span>Size: ${item.size}</span>

                    <button id="edit-product" onclick ="editProduct(${item.id})">Edit Product</button>
                    <button id="delet-product" onclick ="deletProduct(${item.id})">Delet Product</button>
                    </div>
            
            </div>
            `;
        });    
        productsDom.innerHTML = productsUI.join("");// to move the coma btween the items 
    } else {
        noProducts.innerHTML = "No Products !!!";
    }
})(JSON.parse(localStorage.getItem("products")) || productsDB); // imediatly function

/* ******** Edit Product *********** */
function editProduct(id){
    localStorage.setItem("edit" , id)
    window.location="editProduct.html";
};

/* ********** Delet Product *********** */
function deletProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) ;
    // let myProducts = products.filter((item) => item.isMe === "Y");
//     let filtered = myProducts.filter(i => i.id !== id );
//    let choosenItem = products.find(i => i.id ===id);
    products = products.filter((n) => n.id !== id);
    
    localStorage.setItem("products" , JSON.stringify(products));
    
    
    drowProductsUI(products);
}