// functionalitate "De la A la Z" si "De la Z la A"

let isFocused = false, whereAmI;
function checkWhereIClicked () {
    let n  = document.querySelectorAll("tr");
    for(let i=1; i<n.length-1; i++) {
        let m = document.querySelectorAll("." + n[i].className + " td input");

        for(let j=0;j<m.length;j++){
            m[j].onclick = function () {
                whereAmI = j;
                isFocused = true;
            }
        }
    }
}

checkWhereIClicked();

//  functionalitate "De la A la Z"

let sortUp = document.querySelector("#sort-up");

sortUp.onclick = function () {
    if(isFocused){
        // Creeare Array cu continutul de pe fiecare casuta din COLOANA "focusata"

        let contentOfCurrentColumn = [];
        let n  = document.querySelectorAll("tr");
        for(let i=1; i<n.length-1; i++) {
            let m = document.querySelectorAll("." + n[i].className + " td input");
            contentOfCurrentColumn.push(m[whereAmI].value);
        }

        console.log(contentOfCurrentColumn);
        // Fac sortarea "crescatoare" array-ului meu creeat !!!!!
        for(let i=0; i<contentOfCurrentColumn.length-1; i++){
        //    if(contentOfCurrentColumn[i] != ""){
                for(let j=i+1; j<contentOfCurrentColumn.length; j++){
                    if(contentOfCurrentColumn[i] > contentOfCurrentColumn[j]){
                        const remainder = contentOfCurrentColumn[j];
                        contentOfCurrentColumn[j] = contentOfCurrentColumn[i];
                        contentOfCurrentColumn[i] = remainder;
                    }
                }
            // }
        }
        console.log(contentOfCurrentColumn);
        // Rescriu toate casutele din COLOANA cu valorile Sortate

        for(let i=1; i<n.length-1; i++) {
            let m = document.querySelectorAll("." + n[i].className + " td input");
            m[whereAmI].value = contentOfCurrentColumn[i-1];
        }

    }else {
        alert("Selecteaza 'Coloana' pe care vrei sa aiba loc sortarea!!!");
    }
}

//  functionalitate "De la Z la A"

let sortDown = document.querySelector("#sort-down");

sortDown.onclick = function () {
    if(isFocused){
        // Creeare Array cu continutul de pe fiecare casuta din COLOANA "focusata"

        let contentOfCurrentColumn = [];
        let n  = document.querySelectorAll("tr");
        for(let i=1; i<n.length-1; i++) {
            let m = document.querySelectorAll("." + n[i].className + " td input");
            contentOfCurrentColumn.push(m[whereAmI].value);
        }

        // Fac sortarea "crescatoare" array-ului meu creeat !!!!!
        for(let i=0; i<contentOfCurrentColumn.length-1; i++){
            // if(contentOfCurrentColumn[i] != ""){
                for(let j=i+1; j<contentOfCurrentColumn.length; j++){
                    if(contentOfCurrentColumn[i] < contentOfCurrentColumn[j]){
                        const remainder = contentOfCurrentColumn[j];
                        contentOfCurrentColumn[j] = contentOfCurrentColumn[i];
                        contentOfCurrentColumn[i] = remainder;
                    }
                }
            // }
            
        }

        // Rescriu toate casutele din COLOANA cu valorile Sortate

        for(let i=1; i<n.length-1; i++) {
            let m = document.querySelectorAll("." + n[i].className + " td input");
            m[whereAmI].value = contentOfCurrentColumn[i-1];
        }

    }else {
        alert("Selecteaza 'Coloana' pe care vrei sa aiba loc sortarea!!!");
    }
}
