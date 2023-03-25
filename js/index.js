

/* ************* Define products **************** */
let productsDom = document.querySelector(".products");
let products = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")) :productsDB;

//display products
let drowProductsUI; // all this change of an immediatly function to make it both => immediatly and can use it in another position 
( drowProductsUI=function (products = []){
    let productsUI = products.map( (item) => {
        return `
        <div class="product-item" style ="border : ${item.isMe === 'Y'  ? "2px solid green" : ""}">
            <img src="${item.imageUrl}" alt="chair" class="product-item-img"/>
            <div class="product-item-info">
                <a onclick = "saveItemID(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick ="addedToCart(${item.id})">Add to cart</button>
                <i class="favorite far fa-heart" 
                style="color: ${item.liked === true?  'red' : ''}"
                onclick ="addToFavorite(${item.id})"></i>
            </div>
        </div>
        `; 
    });   
    productsDom.innerHTML = productsUI.join("");// to move the coma btween the items 
})(JSON.parse(localStorage.getItem("products")) || products); // imediatly function
 

//add to cart
function addedToCart(id){
    checkLogedUser ();

    let product = products.find( (item) => item.id === id);
    let isProductinCart = addedItem.some((i) => i.id === product.id)

    if(isProductinCart){
        addedItem = addedItem.map( (p) => {
            if(p.id === product.id)p.qty +=1;
            return p;
        })
    }else{
        addedItem.push(product);
    }
    cartProductDivDom.innerHTML =""; 
    addedItem.forEach((item)=>{
        cartProductDivDom.innerHTML += `<p>${item.title} <span class ="menu-qty">${item.qty}</span></p>`;
    });

    //save data
    localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
    
    //add counter of items
    let cartLength = document.querySelectorAll(".carts-products div p ");
    badge.style.display= "block";
    badge.innerHTML = cartLength.length;
}

function getUniqueArr(arr, filterType){
    let unique = arr.map( (item) => item[filterType])
    .map( (item , index , finalArr) => finalArr.indexOf(item) ===index && index)//if this true && return this
    .filter( (item) => arr[item])// to move the false value from the array
    .map(item => arr[item]); // to return the final array
    return unique ;    
;}

//check if the user loged in
function checkLogedUser (){
    if(username){
        
    } else{ 
        window.location = "login.html";
    }
}


let viewItems = localStorage.getItem("viewItems")? JSON.parse(localStorage.getItem("viewItems")) : [];
function saveItemID (id){
    localStorage.setItem("productID" , id);
    window.location = "cartDetails.html";

    let isIN = viewItems.find((i) => i.id === id);
    let choosen =products.find(item => item.id === id )
    if(!isIN){
        viewItems = [...viewItems , choosen];
    } 
    localStorage.setItem("viewItems" ,JSON.stringify(viewItems));
}
//search 
let input = document.getElementById("search");

input.addEventListener("keyup" , function(e){
    // if(e.keyCode === 13){ // 13 equals enter key
        search(e.target.value , JSON.parse(localStorage.getItem("products")) )
   
    if(e.target.value.trim() === ""){
        drowProductsUI(JSON.parse(localStorage.getItem("products")));   
    }
})


function search(title , myArray){
    // for(var i ; i< myArray.length; i++){
    //     if(myArray[i].title ===title){
    //         console.log(myArray[i]);
    //     }
    // }
    let arr = myArray.filter ((item) => item.title.toLocaleLowerCase().indexOf(title.toLocaleLowerCase()) !== -1 );
    drowProductsUI(arr);
}


//add to favorite
let favoriteItems =localStorage.getItem("productsFavorite")? JSON.parse(localStorage.getItem("productsFavorite")) :[]; 
function addToFavorite(id){
    checkLogedUser ();
    // favoriteItems.map((o) => {
    //     o.like = true;
    // })
    let choosenItem = products.find((item) => item.id === id);
    let isItemExist = favoriteItems.some((i) => i.id === choosenItem.id);
    
    if(isItemExist ){
        choosenItem.liked = "";
        favoriteItems = favoriteItems.filter((n) => n.id !== choosenItem.id);
        
    } else {
        choosenItem.liked = true ;
        favoriteItems.push(choosenItem);
            
            // localStorage.setItem("productsFavorite" , JSON.stringify(favoriteItems));
        }
        
        
        
        console.log(products);
    localStorage.setItem("products" , JSON.stringify(products));
    localStorage.setItem("productsFavorite" , JSON.stringify(favoriteItems));
    drowProductsUI(products);  
};


/*********** filter product by size **********  */
let sizeFilter = document.getElementById("size-filter");
sizeFilter.addEventListener("change" , getProductsFilterBySize);

function getProductsFilterBySize(e){
    let val = e.target.value;
    let product = JSON.parse(localStorage.getItem("products")) || products ;
    if(val === "all"){
        drowProductsUI(product);
    } else {
        product=products.filter((i) => i.size === val );
        drowProductsUI(product);
    }
}


/* ******** Edit Product *********** */
function editProduct(id){
    localStorage.setItem("edit" , id)
    window.location="editProduct.html";
}

