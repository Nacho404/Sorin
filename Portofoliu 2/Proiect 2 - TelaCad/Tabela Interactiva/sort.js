
// functionalitate "De la A la Z" si "De la Z la A"

let isFocused = false, whereAmI, whereAmIAtLine;
function checkWhereIClicked () {
    let n  = document.querySelectorAll("tr");
    for(let i=1; i<n.length-1; i++) {
        let m = document.querySelectorAll("." + n[i].className + " td input[type=text]");

        for(let j=0;j<m.length;j++){
            m[j].onclick = function () {
                whereAmIAtLine = i;
                whereAmI = j;
                isFocused = true;
                console.log(j);
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
            let m = document.querySelectorAll("." + n[i].className + " td input[type=text]");
 
            m[whereAmI].value = m[whereAmI].value.trim();
            if(m[whereAmI].value != "" && !isNaN(m[whereAmI].value)) {
                contentOfCurrentColumn.push(Number(m[whereAmI].value));
            } else {
                contentOfCurrentColumn.push(m[whereAmI].value);
            }
            
        }
        let ok=0;
        console.log("Sort cresc " ,contentOfCurrentColumn);
        // Fac sortarea "crescatoare" array-ului meu creeat !!!!!
        for(let i=1; i<contentOfCurrentColumn.length-1; i++){
           if(contentOfCurrentColumn[i] != "" && ok==1){
                for(let j=i+1; j<contentOfCurrentColumn.length; j++){
                    if(contentOfCurrentColumn[j] != ""){
                        if(typeof contentOfCurrentColumn[i] == "string" || typeof contentOfCurrentColumn[j] == "string"){
                            if(contentOfCurrentColumn[i].toString() > contentOfCurrentColumn[j].toString()){
                                const remainder = contentOfCurrentColumn[j];
                                contentOfCurrentColumn[j] = contentOfCurrentColumn[i];
                                contentOfCurrentColumn[i] = remainder;
                            }
                        } else {
                            if(contentOfCurrentColumn[i] > contentOfCurrentColumn[j]){
                                const remainder = contentOfCurrentColumn[j];
                                contentOfCurrentColumn[j] = contentOfCurrentColumn[i];
                                contentOfCurrentColumn[i] = remainder;
                            }
                        }
                       
                    }
                }
            } else {
                if(contentOfCurrentColumn[i]!= ""){
                    ok=1;
                } 
            }
        }
        console.log("Sort cresc " ,contentOfCurrentColumn);
        // Rescriu toate casutele din COLOANA cu valorile Sortate

        for(let i=1; i<n.length-1; i++) {
            let m = document.querySelectorAll("." + n[i].className + " td input[type=text]");
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
            let m = document.querySelectorAll("." + n[i].className + " td input[type=text]");

            m[whereAmI].value = m[whereAmI].value.trim();
            if(m[whereAmI].value != "" && !isNaN(m[whereAmI].value)) {
                contentOfCurrentColumn.push(Number(m[whereAmI].value));
            } else {
                contentOfCurrentColumn.push(m[whereAmI].value);
            }
        }

        // Fac sortarea "Descrescatoare" array-ului meu creeat !!!!!
        let ok=0;
        console.log("Sort desc " ,contentOfCurrentColumn);
        for(let i=1; i<contentOfCurrentColumn.length-1; i++){
            if(contentOfCurrentColumn[i] != "" && ok==1){
                for(let j=i+1; j<contentOfCurrentColumn.length; j++){
                    if(contentOfCurrentColumn[j] != ""){
                        if(typeof contentOfCurrentColumn[i] == "string" || typeof contentOfCurrentColumn[j] == "string"){
                            if(contentOfCurrentColumn[i].toString() < contentOfCurrentColumn[j].toString()){
                                const remainder = contentOfCurrentColumn[j];
                                contentOfCurrentColumn[j] = contentOfCurrentColumn[i];
                                contentOfCurrentColumn[i] = remainder;
                            }
                        } else {
                            if(contentOfCurrentColumn[i] < contentOfCurrentColumn[j]){
                                const remainder = contentOfCurrentColumn[j];
                                contentOfCurrentColumn[j] = contentOfCurrentColumn[i];
                                contentOfCurrentColumn[i] = remainder;
                            }
                        }
                    }
                }
            } else {
                if(contentOfCurrentColumn[i]!= ""){
                    ok=1;
                } 
            }
            
        }
        console.log("Sort desc " ,contentOfCurrentColumn);

        // Rescriu toate casutele din COLOANA cu valorile Sortate

        for(let i=1; i<n.length-1; i++) {
            let m = document.querySelectorAll("." + n[i].className + " td input[type=text]");
            m[whereAmI].value = contentOfCurrentColumn[i-1];
        }

    }else {
        alert("Selecteaza 'Coloana' pe care vrei sa aiba loc sortarea!!!");
    }
}
