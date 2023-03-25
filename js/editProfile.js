//get data from localStorage
let get_user= localStorage.getItem("username");
let get_email= localStorage.getItem("email");

//variables
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");
let userImage = document.getElementById("user-img-file");

//setting Values
userInput.value = get_user;
userEmailInput.value = get_email;

//Events
editForm.addEventListener("submit" , editProfileData);
userImage.addEventListener("change" , getImageUrl);

//functions
function editProfileData(e){
    e.preventDefault();

    localStorage.setItem("username" , userInput.value);
    localStorage.setItem("email" , userEmailInput.value);

    setTimeout(() => {
        window.location = "profile.html" 
    }, 500)
}


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
        userImage = reader.result;
        localStorage.setItem("userImage" , userImage);
    }

    reader.onerror = function(){
        alert("Error !!");
    }
}