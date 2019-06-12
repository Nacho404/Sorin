// Pun in "table" ceea ce am in "myTableStorage";
document.querySelector("table").innerHTML = localStorage.getItem("myTableStorage");

let n  = document.querySelectorAll("tr");
let removeLine = document.querySelectorAll(".line-of-remove td");



function doSomething() {
    let n  = document.querySelectorAll("tr");
    let removeLine = document.querySelectorAll(".line-of-remove td");
    for(let i=1; i<n.length-1; i++){
    
        let trClass =  "line-"+i;
        n[i].setAttribute("class", trClass);
        
        let m = document.querySelectorAll("." + trClass + " td");

        n[i].onmouseover = function () {
            document.querySelector("." + trClass + " td").innerHTML = "-";
            if(i == n.length-2) {
                document.querySelector("." + trClass + " td").onmouseover = function () {
                    for(let j=1;j<m.length-1;j++){
                        m[j].children[0].classList.add("removeLine");
                    }
                }
        
                document.querySelector("." + trClass + " td").onmouseout = function () {
                    for(let j=1;j<m.length-1;j++){
                        m[j].children[0].classList.remove("removeLine");
                    }
                }
            } else {
                document.querySelector("." + trClass + " td").onmouseover = function () {
                    for(let j=1;j<m.length;j++){
                        m[j].children[0].classList.add("removeLine");
                    }
                }
        
                document.querySelector("." + trClass + " td").onmouseout = function () {
                    for(let j=1;j<m.length;j++){
                        m[j].children[0].classList.remove("removeLine");
                    }
                }
            }

        }

        
    
        if(i == n.length-2) {
            for(let j=1; j<m.length-1; j++){
                m[j].onmouseover = function () {
                    removeLine[j].innerHTML = "-";
                }
        
                m[j].onmouseout = function () {
                    removeLine[j].innerHTML = "";
                }
            }
        } else {
            for(let j=1; j<m.length; j++){
                m[j].onmouseover = function () {
                    removeLine[j].innerHTML = "-";
                }
        
                m[j].onmouseout = function () {
                    removeLine[j].innerHTML = "";
                }
            }
        }


        n[i].onmouseout = function () {
            document.querySelector("." + trClass + " td").innerHTML = "";
        }

    }

    for(let i=1; i<removeLine.length; i++){
        let countChild = i;
        removeLine[i].onmouseover = function () { 
            removeLine[i].innerHTML = "-";
            for(let k=1; k<n.length-1; k++) {
                let trClass =  "line-"+k;
                document.querySelector("." + trClass + " td:nth-of-type("+ countChild + ")").children[0].classList.add("removeColumn");
            }
        }

        removeLine[i].onmouseout = function () {
            removeLine[i].innerHTML = "";
            for(let k=1; k<n.length-1; k++) {
                let trClass =  "line-"+k;
                document.querySelector("." + trClass + " td:nth-of-type("+ countChild + ")").children[0].classList.remove("removeColumn");
            }
        }

        countChild++;
    }
}

doSomething();
// creez si modific constant "myTableStorage"
localStorage.setItem("myTableStorage", document.querySelector("table").innerHTML);

let countLines=0, countColumns=0;
for(let i=1; i<n.length-1; i++){
    countColumns =0; 
    let trClass =  "line-"+i;
    let m = document.querySelectorAll("." + trClass + " td");
    for(let j=1; j<m.length; j++){
        countColumns++;
    }
    countColumns--;
    countLines ++;
}

function doSomethingWithTable() {
    document.querySelector("tbody").innerHTML = "<tr class=\"line-of-remove\"><td class=\"useless\"></td>"

    for(let i=1; i<=countColumns; i++) {
        document.querySelector(".line-of-remove").innerHTML += "<td class=\"remove\" onclick=\"removeColumns()\"></td>";
    }
    document.querySelector(".line-of-remove").innerHTML += "</tr>"

    for(let i=1;i<=countLines; i++){
        let lastTd = "";
        if(i==countLines) {
            let trClass =  "line-"+i;
            lastTd += "<tr class="+ trClass +"> <td class=\"remove\" onclick=\"removeLines()\"></td>"; 
            
            for(let j=1; j<=countColumns; j++) {
                lastTd += "<td><input type=\"text\"></td>";
                if(j==countColumns){
                    lastTd += "<td id=\"add-lines\" class=\"add\" onclick=\"addLines()\">+</td></tr>";
                }
            }
            document.querySelector("tbody").innerHTML += lastTd;
        } else {

            let trClass =  "line-"+i;
            document.querySelector("tbody").innerHTML += "<tr class="+ trClass +"> <td class=\"remove\" onclick=\"removeLines()\"></td>"; 
            
            for(let j=1; j<=countColumns; j++) {
                document.querySelector("." + trClass).innerHTML += "<td><input type=\"text\"></td>";
            }

            document.querySelector("tbody").innerHTML += "</tr>";
        }
    }
    let lastTr= "";
    lastTr += "<tr>";
    for(let i=1; i<=countColumns; i++) {
     lastTr +=   "<td class=\"useless\"></td>";
    }

    lastTr += "<td id=\"add-columns\" class=\"add\" onclick=\"addColumns()\">+</td></tr>";
    
    document.querySelector("tbody").innerHTML += lastTr;

    // creez si modific constant "myTableStorage"
    localStorage.setItem("myTableStorage", document.querySelector("table").innerHTML);
}


function addLines() {
    countLines ++;
    doSomethingWithTable()
    doSomething();
    checkWhereIClicked();   
}

function addColumns(){
    
    countColumns ++;
    doSomethingWithTable()
    doSomething();
    checkWhereIClicked(); 
}


function removeLines() {
    if(countLines>1 && countColumns>1 ) {
        countLines --;
        doSomethingWithTable()
    }
    doSomething();
    checkWhereIClicked();
}

function removeColumns() {  
    if(countColumns>1 && countLines>1) {
        countColumns --;
        doSomethingWithTable()
    }
    doSomething();
    checkWhereIClicked();
}
