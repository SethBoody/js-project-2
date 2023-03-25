// Variabels
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let creatForm = document.getElementById("creat-form");
let imageFile = document.getElementById("product-image-file");
let productSizeValue ;
let productImage;

//Events
productSizeSelect.addEventListener("change" , getProductSizeValue);
creatForm.addEventListener("submit" , creatProductFun);
imageFile.addEventListener("change" , getImageUrl);


//functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
};
function creatProductFun(e){
    e.preventDefault();//this to prevent the submition and the refresh that the form do
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue =productName.value;
    let descValue = productDesc.value; 
    if(nameValue && descValue){
    let obj = {
        id : allProducts.length+1,
        title : nameValue,
        size : productSizeValue,
        imageUrl : productImage,
        qty:1,
        desc:descValue,
        isMe : "Y",
    }

    let newProduct =allProducts? [...allProducts , obj] : [obj];
    localStorage.setItem("products",JSON.stringify(newProduct));

    productName.value="";
    productDesc.value="";
    productSizeSelect.value = "";
    imageFile.value="";

    setTimeout(() => {
        window.location="index.html";
    } , 500);
} else {
    alert("Enter Data ...");
}
};

function getImageUrl(){
    let file = this.files[0];
    console.log(file);
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