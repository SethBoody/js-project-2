// // Variabels
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("edit"));
let getProduct = products.find((i) => i.id ===productId);

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let updateForm = document.getElementById("update-form");
let imageFile = document.getElementById("product-image-file");
let productSizeValue ;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;


// //Events
productSizeSelect.addEventListener("change" , getProductSizeValue);
updateForm.addEventListener("submit" , updateProductFun);
imageFile.addEventListener("change" , getImageUrl);


//functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
};
function updateProductFun(e){
    e.preventDefault();//this to prevent the submition and the refresh that the form do

    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeValue;
    getProduct.imageUrl = productImage;
    localStorage.setItem("products",JSON.stringify(products));
    setTimeout(() => {
    window.location="index.html";
    } , 500); 

};

function getImageUrl(){
    let file = this.files[0];
    let types = ["image/jpeg", "image/png"]
    if(types.indexOf(file.type)== -1){
        alert("Type Not Supported");
        imageFile.value = "";
    }

    if(file.size > 2*1024*1024){
        alert("Image Not Exced 2MG");
        return;
    } 
    getImageBase64(file);
    //productImage = URL.createObjectURL(file); // to make the image in url and its not work in local storage so we use the next function

   
}

function getImageBase64(file){
    let reader = new FileReader();// to read my file

    reader.readAsDataURL(file);//read the file and convert it to 64

    reader.onload = function(){
        productImage = reader.result;
    }

    reader.onerror = function(){
        alert("Error !!");
    }
}