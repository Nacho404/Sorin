
console.log("baaa")
// Extinderea optiunilor de sortare 
let sortedBy = document.querySelector("#section-of-sort .options-sort-by");
let sortedHow = document.querySelector("#section-of-sort .options-sort-how");
let defaultSort = 1, whereISorted=0;

document.querySelector("body").onclick = function(event) {
    if(event.target.id == "expand-by"){
        sortedBy.classList.toggle("show");
    } else {
        sortedBy.classList.remove("show");
    }
    
    if(event.target.id == "expand-how") {
        sortedHow.classList.toggle("show");
    } else {
        sortedHow.classList.remove("show");
    }
}
// Sortarea dupa caracteristici
sortedBy.onclick = function (event) {
    
    switch(event.target.innerHTML) {
        case "Lista initiala":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            document.querySelector("#movies-sorted").classList.remove("showListSorted");
            movies.style.display = "";
        break;
        case "Nume":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            sortList(".name-year-rating h3", false);
            whereISorted=1;
        break;
        case "An":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            sortList(".name-year-rating h3 span", false);
            whereISorted=2;
        break;
        case "Rating":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            sortList(".name-year-rating p", false);
            whereISorted=3;
        break;
        case "Data adaugarii":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            sortList( ".time" , true);
            whereISorted=4;
        break;
    }
}

function sortList(onWhat, complicated) {
    let list = document.querySelector("#movies-sorted");
    list.innerHTML = movies.innerHTML;
    let itemsList = Array.from(list.querySelectorAll("li"));
    if(complicated){
        complexSort(onWhat + " .years", onWhat + " .months");
        complexSort(onWhat + " .months", onWhat + " .days", onWhat + " .years" );
        complexSort(onWhat + " .days", onWhat + " .hours", onWhat + " .months" );
        complexSort(onWhat + " .hours", onWhat + " .minutes", onWhat + " .days");
        complexSort(onWhat + " .minutes", "");
    } else {
        if(defaultSort == 1) {
            for(let i=0; i<itemsList.length-1; i++){
                for(let j=1; j<itemsList.length; j++){
                        console.log(itemsList[i].querySelector(onWhat).innerText>itemsList[j].querySelector(onWhat).innerText)
                    if(itemsList[i].querySelector(onWhat).innerText>itemsList[j].querySelector(onWhat).innerText){
                        let remainder = itemsList[i];
                        itemsList[i] = itemsList[j];
                        itemsList[j] = remainder;
                    }
                }
            }
        } else {
            for(let i=0; i<itemsList.length-1; i++){
                for(let j=1; j<itemsList.length; j++){
                        console.log(itemsList[i].querySelector(onWhat).innerText>itemsList[j].querySelector(onWhat).innerText)
                    if(itemsList[i].querySelector(onWhat).innerText < itemsList[j].querySelector(onWhat).innerText){
                        let remainder = itemsList[i];
                        itemsList[i] = itemsList[j];
                        itemsList[j] = remainder;
                    }
                }
            }
        }
    }
    list.innerHTML = "";
    for(let item of itemsList){
        list.innerHTML += `<li>${item.innerHTML}</li>`;
    }
    list.classList.add("showListSorted");
    movies.style.display = "none";
    // Sortarea dupa vechime (complicated)
    // INCOMPLETA (algoritm gresit) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    function complexSort(location, verify, wrong) {
        if(defaultSort == 1) {
            for(let i=0; i<itemsList.length-1; i++){
                for(let j=1; j<itemsList.length; j++){

                    if(!itemsList[i].querySelector(wrong) && !itemsList[j].querySelector(wrong)){
                        if(itemsList[i].querySelector(location) && itemsList[j].querySelector(location)){
                            if(itemsList[i].querySelector(verify) && itemsList[j].querySelector(verify)) {
                                if(itemsList[i].querySelector(location).innerText >= itemsList[j].querySelector(location).innerText){
                                    let remainder = itemsList[i];
                                    itemsList[i] = itemsList[j];
                                    itemsList[j] = remainder;

                                } else if(itemsList[i].querySelector(location).innerText == itemsList[j].querySelector(location).innerText) {

                                    if(itemsList[i].querySelector(verify).innerText >= itemsList[j].querySelector(verify).innerText){
                                        let remainder = itemsList[i];
                                        itemsList[i] = itemsList[j];
                                        itemsList[j] = remainder;
                                    }
                                }
                            } else {

                                if(itemsList[i].querySelector(location).innerText >= itemsList[j].querySelector(location).innerText){
                                    let remainder = itemsList[i];
                                    itemsList[i] = itemsList[j];
                                    itemsList[j] = remainder;
                                }
                            }

                        } else if( itemsList[i].querySelector(location) && !itemsList[j].querySelector(location) && defaultSort == 1 ) {
                            let remainder = itemsList[i];
                            itemsList[i] = itemsList[j];
                            itemsList[j] = remainder;

                        } else if( !itemsList[i].querySelector(location) && itemsList[j].querySelector(location) && defaultSort == 0 ) {
                            let remainder = itemsList[i];
                            itemsList[i] = itemsList[j];
                            itemsList[j] = remainder;

                        }
                    }
                }
            }
        } else {

            for(let i=0; i<itemsList.length-1; i++){
                for(let j=1; j<itemsList.length; j++){
                    if(itemsList[i].querySelector(location) && itemsList[j].querySelector(location)){
                        if(itemsList[i].querySelector(verify) && itemsList[j].querySelector(verify)) {
                            if(itemsList[i].querySelector(location).innerText <= itemsList[j].querySelector(location).innerText){
                                let remainder = itemsList[i];
                                itemsList[i] = itemsList[j];
                                itemsList[j] = remainder;

                            } else if(itemsList[i].querySelector(location).innerText == itemsList[j].querySelector(location).innerText) {

                                if(itemsList[i].querySelector(verify).innerText <= itemsList[j].querySelector(verify).innerText){
                                    let remainder = itemsList[i];
                                    itemsList[i] = itemsList[j];
                                    itemsList[j] = remainder;
                                }
                            }
                        } else {

                            if(itemsList[i].querySelector(location).innerText <= itemsList[j].querySelector(location).innerText){
                                let remainder = itemsList[i];
                                itemsList[i] = itemsList[j];
                                itemsList[j] = remainder;
                            }
                        }

                    } else if( itemsList[i].querySelector(location) && !itemsList[j].querySelector(location) && defaultSort == 1 ) {
                        let remainder = itemsList[i];
                        itemsList[i] = itemsList[j];
                        itemsList[j] = remainder;

                    } else if( !itemsList[i].querySelector(location) && itemsList[j].querySelector(location) && defaultSort == 0 ) {
                        let remainder = itemsList[i];
                        itemsList[i] = itemsList[j];
                        itemsList[j] = remainder;

                    }
                }
            }
        }
    }
}
// Sortarea crescatoare/descrescatoare
sortedHow.onclick = function (event) {
    switch(event.target.innerHTML) {
        case "Crescator":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            defaultSort = 1;
            
            if(whereISorted==1){
                sortList(".name-year-rating h3", false);
            } else if(whereISorted==2){
                sortList(".name-year-rating h3 span", false);
            } else if(whereISorted==3){
                sortList(".name-year-rating p", false);
            } else if(whereISorted==4){
                sortList( ".time" , true);
            }
        break;
        case "Descrescator":
            event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;
            defaultSort = 0;
            if(whereISorted==1){
                sortList(".name-year-rating h3", false);
            } else if(whereISorted==2){
                sortList(".name-year-rating h3 span", false);
            } else if(whereISorted==3){
                sortList(".name-year-rating p", false);
            } else if(whereISorted==4){
                sortList( ".time" , true);
            }
            
        break;
    }
}
