let sortTitleBiggerBtn = document.querySelector("#sort-title-bigger");
let arrOfTitles = [];
let pressedTitleBtn = 0;

sortTitleBiggerBtn.onclick = sortTitleBigger;


function sortTitleBigger () {
    sortPriceBiggerBtn.style.backgroundColor = "";
    sortInitialBtn.style.backgroundColor = "";
    sortPriceLowerBtn.style.backgroundColor = "";
    sortTitleLowerBtn.style.backgroundColor = "";

    sortTitleBiggerBtn.style.backgroundColor = "rgb(77, 74, 74)";

    pressedTitleBtn = 1;
    pressedPriceBtn = 0;
    let sections = cards.querySelectorAll("section");
    // 1. Parcurgerea tuturor "Sectiunilor"
    // 2. Prelucrarea titlului
    
    for(let i=0;i<sections.length;i++){
        let title = sections[i].querySelector("h3").innerText;

        arrOfTitles[i] = title;
    }   
    // Ordonare crescatoare

    for(let i=0; i<arrOfTitles.length-1;i++){
        for(let j=i+1;j<arrOfTitles.length; j++){
            if(arrOfTitles[i]>arrOfTitles[j]){
                let remainder = arrOfTitles[i];
                arrOfTitles[i]=arrOfTitles[j];
                arrOfTitles[j]=remainder;
            }
        }
    }
    
    let sortCardsSections = ``;
    for(let i=0;i<arrOfTitles.length;i++){
        for(let j=0;j<sections.length;j++){
            if(sections[j].querySelector("h3").innerHTML == arrOfTitles[i]) {
                // In acest fel vom pune in variabilia "sortCardsSections" toate sectiuniile in ordine Crescatoare
                sortCardsSections += `<section class="product-card">${sections[j].innerHTML}</section>`;
                
            }
        }
    }

    // Inlocuirea textului din : " <div id="cards-section"> text........ </div>"
    // cu noul text cu sectiuni ordonate
    cards.innerHTML = sortCardsSections;

    sortInitialBtn.querySelector("footer").classList.remove("showMessage");
    sortPriceLowerBtn.querySelector("footer").classList.remove("showMessage");
    sortPriceBiggerBtn.querySelector("footer").classList.remove("showMessage");
    sortTitleLowerBtn.querySelector("footer").classList.remove("showMessage");
    
    sortTitleBiggerBtn.querySelector("footer").classList.add("showMessage");
    sortTitleBiggerBtn.querySelector("footer h4").innerHTML = "Lista a fost sortata dupa:\n Titlu - Crescator";

}