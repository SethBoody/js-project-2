let userInfo = document.querySelector(".user-info");
let userDom = document.querySelector(".user");
let links = document.querySelector(".links");
let logoutBtn = document.querySelector(".logout");

let username= localStorage.getItem("username");
if(username){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username;
} 

logoutBtn.addEventListener("click" , () => { 
    localStorage.clear();
    window.location="register.html";
} , 1500)
