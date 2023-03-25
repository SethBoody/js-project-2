let loginBtn=document.querySelector("#sign-in");
let username=document.querySelector("#username");
let password=document.querySelector("#password");


let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click",function(e){
    e.preventDefault(); // this for to stop the behavior of refresh the page
    let username=document.querySelector("#username");
    let password=document.querySelector("#password");

    if(username.value === "" || password.value === ""){
        alert("Please fill the data")
    
    } else{
        if( getUser &&
            getUser.trim() === username.value.trim() && 
            getPassword && 
            getPassword ===  password.value  )
        {
            setTimeout( () => {  // to move the user to home page after enter the data
                window.location= "index.html";
            } , 1500);
        }else{
            
        }
    }
});

