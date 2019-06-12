let footerMessage = document.querySelector("footer");
let sortPriceBiggerBtn = document.querySelector("#sort-price-bigger");
let arrOfPrices = [];
let pressedPriceBtn = 0;

sortPriceBiggerBtn.onclick = sortPriceBigger;


function sortPriceBigger () {
    sortPriceBiggerBtn.style.backgroundColor = "rgb(77, 74, 74)";
    sortInitialBtn.style.backgroundColor = "";
    sortPriceLowerBtn.style.backgroundColor = "";
    sortTitleBiggerBtn.style.backgroundColor = "";
    sortTitleLowerBtn.style.backgroundColor = "";

    pressedPriceBtn = 1;
    pressedTitleBtn =0;
    let sections = cards.querySelectorAll("section");
    // 1. Parcurgerea tuturor "Sectiunilor"
    // 2. Prelucrarea pretului (intr-un final va arata:  exemplu--> 1200.99)
    // 3. Introducerea pretului in classa "Sectiunii" respective
    for(let i=0;i<sections.length;i++){
        let price = sections[i].querySelector("p").innerText;
        let count=0;
        price = price.replace("lei", "");
        
        for(let i=0;i<price.length;i++){
            if(price[i]=="."){
                count++;
            }
        }

        for(let i=1;i<=count;i++){
            price = price.replace(".", "");
        }

        Number(price);
        price = price/100;
        arrOfPrices[i] = price;
        sections[i].className = price + " " +  sections[i].className;

    }   
    // Ordonare crescatoare

    for(let i=0; i<arrOfPrices.length-1;i++){
        for(let j=i+1;j<arrOfPrices.length; j++){
            if(arrOfPrices[i]>arrOfPrices[j]){
                let remainder = arrOfPrices[i];
                arrOfPrices[i]=arrOfPrices[j];
                arrOfPrices[j]=remainder;
            }
        }
    }

    // Bazandu-ne pe Array-ul ordonat mai sus, vom cauta sectiunile care indeplinesc urmatoarea conditie :
    // "Classa sectiunii sa corespunda cu elementul din Array"
    
    let sortCardsSections = ``;
    for(let i=0;i<arrOfPrices.length;i++){
        for(let j=0;j<sections.length;j++){
            if(parseFloat(sections[j].className) == arrOfPrices[i]) {
                // In acest fel vom pune in variabilia "sortCardsSections" toate sectiuniile in ordine Crescatoare
                sortCardsSections += `<section class="product-card">${sections[j].innerHTML}</section>`;
                
            }
        }
    }

    // Inlocuirea textului din : " <div id="cards-section"> text........ </div>"
    // cu noul text cu sectiuni ordonate
    cards.innerHTML = sortCardsSections;


    
    // footerMessage.classList.remove("showMessage");
    // footerMessage.classList.add("hideMessage");
    // footerMessage.classList.remove("hideMessage");
    // footerMessage.classList.add("showMessage");
    sortInitialBtn.querySelector("footer").classList.remove("showMessage");
    sortPriceLowerBtn.querySelector("footer").classList.remove("showMessage");
    sortTitleBiggerBtn.querySelector("footer").classList.remove("showMessage");
    sortTitleLowerBtn.querySelector("footer").classList.remove("showMessage");

    sortPriceBiggerBtn.querySelector("footer").classList.add("showMessage");
    sortPriceBiggerBtn.querySelector("footer h4").innerHTML = "Lista a fost sortata dupa:\n Pret - Crescator";
    
}


