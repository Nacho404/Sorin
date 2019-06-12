
let yourCart = document.querySelector("#your-cart");
let numberOfProducts = ` 
<div class="number-products">
    <div class="click-expand">1</div>  
    <main class="expand">
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div> <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div>
    </main>
    <span>buc</span>
</div>`


cards.onclick = function(event){
    if(event.target.className == "add") {
        let title = event.target.parentNode.querySelector("h3").innerText;
        let price = event.target.parentNode.querySelector("p").innerText;
        yourCart.innerHTML = yourCart.innerHTML.replace(emptyCart, "");
        yourCart.innerHTML += `
        <div class="cart">
            <h3>Produs: <span>${title}</span></h3>
            <h4>Pret: <span> ${transform(price)} </span> lei</h4>
            ${numberOfProducts}
            <div>
                <h4>Total: <span> ${transform(price)} </span> lei </h4>
                <span class="erase-cart">Sterge produs!</span>
            </div>
        </div>`

        document.querySelector("nav .right-side a span").innerHTML = yourCart.children.length;
        functionalOption();
    }
}

function transform(newPrice) {
    newPrice = newPrice.replace("lei", "");
    let count=0;
    for(let i=0;i<newPrice.length;i++){
        if(newPrice[i]=="."){
            count++;
        }
    }

    for(let i=1;i<=count;i++){
        newPrice = newPrice.replace(".", "");
    }

    Number(newPrice);
    newPrice = newPrice/100;

    return newPrice;
}


// Numar Buc. per produs

let mainExpand = document.querySelector(".number-products main");
let lastMainEpand, ok=0;

document.querySelector("body").onclick = function(event) {
    if(event.target.className == "click-expand") {
        event.target.parentNode.querySelector("main").classList.toggle("showExpand");
        lastMainEpand = event.target.parentNode.querySelector("main");
        ok=1;
    } else if(event.target.className != "click-expand" && ok==1) {
        lastMainEpand.classList.remove("showExpand");
        console.log("aaaa")
    }
}


// Sterge din cos

let areaErase = shopPage.querySelector("#your-cart");

areaErase.onclick = function(event){
    if(event.target.className == "erase-cart"){
        event.target.parentNode.parentNode.remove();
        document.querySelector("nav .right-side a span").innerHTML = yourCart.children.length;
        
        if(yourCart.children.length == 0) {
            console.log("bee")
            yourCart.innerHTML = emptyCart;
            cartIsEmpty = false;
        }
    }
}


// Numarul de bucati pe produs

function functionalOption () {
    let options = document.querySelectorAll(".cart .number-products main");

    for(let i=0; i<options.length;i++){
        options[i].onclick = function(event){
            let newPrice = Number(event.target.innerText) * Number(event.target.parentNode.parentNode.parentNode.children[1].querySelector("span").innerText);
            event.target.parentNode.parentNode.children[0].innerText = event.target.innerText;
        
            event.target.parentNode.parentNode.parentNode.children[3].querySelector("h4 span").innerText = newPrice.toFixed(2);
        }
    }
}


