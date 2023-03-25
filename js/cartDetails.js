let products = JSON.parse(localStorage.getItem("products"));
let productID = localStorage.getItem("productID");
let itemDom = document.querySelector(".item-details");

let productsDetails = products.find( (item) => item.id == productID );
itemDom.innerHTML = `
    <img src="${productsDetails.imageUrl}"/>
    <h2>${productsDetails.title}</h2>
    <p>${productsDetails.desc}</p>
    <span>size : ${productsDetails.size}</span><br>
    <span> Quntity: ${productsDetails.qty}</span> <br>
    <button onclick ="editProduct(${productID})" id ="edit-product">Edit Product</button>
    `

    
/* ******** Edit Product *********** */
function editProduct(id){
    localStorage.setItem("edit" , id)
    window.location="editProduct.html";
};