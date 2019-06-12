
// Media

let li = document.querySelectorAll("nav ul a"), arrOfLinks = [];

// for(let i=1;i<li.length;i++){
//     arrOfLinks.push(li[i].innerText);
// }

// function eraseText (y) {
//     if(y.matches) {
//         for(let i=1;i<li.length;i++){
//             li[i].innerText= "";
//         }
//     } else {
//         for(let i=1;i<li.length;i++){
//             li[i].innerText= arrOfLinks[i-1];
//         }
//     }
// }

// let x = window.matchMedia("(min-width: 595px) and (max-width: 866px)");
// eraseText(x);
// x.addListener(eraseText);


let menuBtn = document.querySelector("#menu-btn");
let rightSideNav =  document.querySelector(".right-side");

menuBtn.onclick = function (event){
    event.preventDefault();
    rightSideNav.classList.toggle("show");
}


function checkRightNav (y){
    if(y.matches) {
        if(rightSideNav.className == "right-side show"){
            rightSideNav.classList.remove("show");
        }
    }
}

let y= window.matchMedia("(min-width: 596px)");
checkRightNav(y);
y.addListener(checkRightNav);

// Media

let navBar = document.querySelector("nav");
let homePage = document.querySelector("#welcome");
let productPage = document.querySelector("#products");
let addProductPage = document.querySelector("#add-products");
let shopPage = document.querySelector("#shopping");

navBar.onclick = function(event){
    event.preventDefault();
    if(event.target.attributes.href){
        let href = event.target.attributes.href.value;
        console.log(href);
        switch(href) {
            case "#home":
            homePage.style.display = "block";
            productPage.classList.remove("showThis");
            addProductPage.classList.remove("showThis");
            shopPage.classList.remove("showThis");
            break;
            case "#product":
            homePage.style.display = "none";
            productPage.classList.add("showThis");
            addProductPage.classList.remove("showThis");
            shopPage.classList.remove("showThis");
            break;
            case "#addProduct":
            homePage.style.display = "none";
            productPage.classList.remove("showThis");
            addProductPage.classList.add("showThis");
            shopPage.classList.remove("showThis");
            break;
            case "#shopping":
            homePage.style.display = "none";
            productPage.classList.remove("showThis");
            addProductPage.classList.remove("showThis");
            shopPage.classList.add("showThis");
            checkCart();
            break;
        }
    }
}

let emptyCart = ` 
<div class="empty-cart">
    <h1>Cosul tau este gol!</h1>
</div>`

let cartIsEmpty = false;

function checkCart () {
    let yourCart = shopPage.querySelector("#your-cart");
    if(yourCart.querySelector(".cart")) {
        cartIsEmpty = true;
    } else {
        yourCart.innerHTML = emptyCart;
    }
}

// Add products 

let cards = document.querySelector("#cards-section");
let addCard = document.querySelector("#add-product");
let titleProduct = document.querySelector("#title-product");
let priceProduct = document.querySelector("#price-product");
localStorage.setItem("products", cards.innerHTML);

addCard.onclick = function(event) {
    event.preventDefault();
    let title = titleProduct.value;
    let price = priceProduct.value;
    
    if(title != "" && price != "") {
        if(!isNaN(price)){
            price = Number(price);
            let newPrice = price.toFixed(2);
            let afterDot = newPrice[newPrice.length-2] + newPrice[newPrice.length-1];

            cards.innerHTML += `
            <section class="product-card">
            <img src="defaultCard.jpg" alt="">
            <h3>${title}</h3>
            <p>${dotInNumber(parseInt(newPrice))}<span>${afterDot}</span>lei</p>
            <div class="add"> Adauga in cos  <i class="fas fa-cart-arrow-down"></i></div>
            </section> 
            `;

            localStorage.setItem("products", cards.innerHTML);

            titleProduct.value = "";
            priceProduct.value = "";
        } else {
            alert("Formatul pretului este gresit!\n Mai incearca...");
            priceProduct.value = "";
        }
    } else {
        alert("Combinatia de cifre este gresita!\n Mai incearca...");
    }

    if(pressedPriceBtn==1){
        sortPriceBigger();
    } else if(pressedPriceBtn==2) {
        sortPriceLower();
    } else if(pressedTitleBtn==1) {
        sortTitleBigger();
    } else if(pressedTitleBtn==2) {
        sortTitleLower();
    }

}

function dotInNumber (num) {
    let count=0, newNumber = "";

    while(num !=0) {
        count++;
        if(count == 3 && Math.floor(num/10) !=0) {
            newNumber = num%10 + newNumber;
            newNumber = "." + newNumber;
            count=0;
        } else {
            newNumber = num%10 + newNumber;
        }
        
        num = Math.floor(num/10);
    }
    return newNumber;
} 


// Sortare

// Ordonarea INITIALA

let sortInitialBtn = document.querySelector("#sort-initial");
sortInitialBtn.style.backgroundColor = "rgb(77, 74, 74)";

sortInitialBtn.onclick = function () {
    pressedPriceBtn =0;
    pressedTitleBtn = 0;

    sortInitialBtn.style.backgroundColor = "rgb(77, 74, 74)";
    cards.innerHTML = localStorage.getItem("products");

    sortPriceBiggerBtn.style.backgroundColor = "";
    sortPriceLowerBtn.style.backgroundColor = "";
    sortTitleBiggerBtn.style.backgroundColor = "";
    sortTitleLowerBtn.style.backgroundColor = "";


    sortPriceBiggerBtn.querySelector("footer").classList.remove("showMessage");
    sortPriceLowerBtn.querySelector("footer").classList.remove("showMessage");
    sortTitleBiggerBtn.querySelector("footer").classList.remove("showMessage");
    sortTitleLowerBtn.querySelector("footer").classList.remove("showMessage");

    sortInitialBtn.querySelector("footer").classList.add("showMessage");
    sortInitialBtn.querySelector("footer h4").innerHTML = "Lista a revenit la valoarea \n INITIALA";
   
}







