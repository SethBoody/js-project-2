
let username=document.querySelector("#username");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let registerBtn=document.querySelector("#sign-up");

registerBtn.addEventListener("click",register);

function register(e){
    e.preventDefault(); // this for to stop the behavior of refresh the page
    if(username.value === "" || password.value === "" || email.value === ""){
        alert("Please fill the data")
    
    } else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" ,password.value);

        setTimeout( () => {  // to move the user to home page after enter the data
            window.location= "login.html";
        } , 1500);
    }
}