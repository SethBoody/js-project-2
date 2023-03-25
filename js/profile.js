//get data from localStorage
let get_user= localStorage.getItem("username");
let get_email= localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((i) => i.isMe ==="Y");

//variables
let userDom2 = document.getElementById("userName");
let userEmailDom = document.getElementById("email");
let productsLength = document.querySelector("#productsLength span");
let userAvatar = document.querySelector(".user-avatar");

userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if(myProducts != 0){
productsLength.innerHTML = myProducts.length; 
} else{
productsLength.remove();
} 

//image
let userImage = localStorage.getItem("userImage")? localStorage.getItem("userImage") : "images/category-banner1.jpg";
userAvatar.src=userImage;

// localStorage.setItem("userImage", )
