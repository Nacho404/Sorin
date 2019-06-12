
let menu = document.querySelector(".functions-menu .sort-options");
let ok=0;
let body = document.querySelector("body");
let menuFilter = document.querySelector(".filter-options");
let menuFilterOn = false, okFiler=0;

// Functionalitate Button -- > "Sort"
body.onclick =  function (event) {
    if(menu.className == "sort-options show" && ok == 0) {
        menu.classList.remove("show");  
    }

    if(menuFilterOn && okFiler==0) {
        menuFilter.style.display = "";
        menuFilterOn = false;
    }

    // if(event.target.nodeName != "SELECT" || )

    // console.log({a: event.target});

    if(event.target.id != "tip-date-btn") {
        listDateType.classList.remove("show");
    }
}

document.querySelector(".functions-menu #sort-btn").onclick = showOptionsForSort;
document.querySelector(".functions-menu #sort-btn").onmouseout = function () {
    ok=0;
}
function showOptionsForSort() {
    menu.classList.toggle("show");
    ok=1;
}

// Functionalitate Button -- > "Add Filter"

let filterBtn = document.querySelector("#filter-btn");
let table = document.querySelector("table"), checkInput=false, checkSelect=false, countFilter=0;

table.onclick = function (event) {
    if(event.target.value != "" && event.target.type == "text") {
        checkInput = true;
    } else {
        checkInput = false;
    }
    
}

function createLeft (jLeft) {
    let left = (jLeft+1)*70 - 20 - 2;
    console.log("succes");
    return left;
}

function createTop (iTop) {
    let top =  59.44 + iTop*28 + 4;
    return top;
}

// function posOfLarge (index) {
//     let ok=0;
//     function createLeftLarge (jLeft) {
//         let left = (jLeft+1)*138.86 - 20 - 2;
//         console.log("bine S");
//         return left;
//     }

//     for(i=1;i<n.length-1;i++){
//         let childrenTr = n[i].children;
//         for(let j=1;j<childrenTr;j++){
//             console.log(childrenTr.children[0].style.width);
//             if(childrenTr.children[0].style.width == "138.86px"){
//                 ok=1;
//                 return createLeftLarge(j);
//             }
//         }
//     }

//     if(ok== 0){
//         return createLeft(index);
//     }
// }


let listFilterOptions;
let pos;
let colectionArray = [];
filterBtn.onclick = filerBtnEvent;

function filerBtnEvent () {
    if(checkSelect == false){
        if(checkInput) {
            let count = 0;
            for(let i=1;i<n.length-1; i++){
            let childrenTr =  n[i].children;
            for(let j=1; j<childrenTr.length; j++){
                    if(childrenTr[j].children[0].value != ""){
                        count++;
                        childrenTr[j] = createSelect (i, j, count);
                    }
                    function createSelect (i, j, count) {
                        let remainder = childrenTr[j].children[0].value;
                        childrenTr[j].innerHTML += `<select class="index${count}"></select> <ul class="filter-options index${count}"></ul>`;
                        pos=j;
                        childrenTr[j].children[2].innerHTML = createCheckbox(pos);
                        createEvent("index"+count);
                        childrenTr[j].children[1].style.top = createTop(i) + "px";
                        childrenTr[j].children[1].style.left = createLeft(j) + "px";
                        childrenTr[j].children[2].style.top = (createTop(i)+20) + "px";
                        childrenTr[j].children[2].style.left = (createLeft(j)-130) + "px";  // Sa revin aici
                        childrenTr[j].children[0].value = remainder;
                        checkSelect = true;
                        countFilter++;
                        return childrenTr[j];
                    }
                }
                if(checkSelect) {
                    checkWhereIClicked();
                    filterBtn.style.backgroundColor = "#f4cb7b";
                    listFilterOptions = document.querySelectorAll(".filter-options");
                    saveValueInputs();
                    checkboxEvent();
                    return;
                }
            }
            
        } else {
            alert("Selecteaza o casuta cu text !!!")
        }
    } else {

        for(let i=1;i<n.length-1; i++){
            let childrenTr =  n[i].children;
            for(let j=1; j<childrenTr.length; j++){
                if(childrenTr[j].innerHTML != "+"){
                    let remainder = childrenTr[j].children[0].value;
                    childrenTr[j].innerHTML = '<input type="text">';
                    childrenTr[j].children[0].value = remainder;
                }
            }
        }
        
        checkSelect = false;
        filterBtn.style.backgroundColor = "";
    }
    checkWhereIClicked();
}


function createCheckbox (i) {
    let checkbox = "";
    let input = `<input type="checkbox" checked>`
    for(let k=1;k<n.length-1; k++){
        let td = n[k].children[i];
        if(td.children[0].value != ""){
            checkbox += "<li>" + input + td.children[0].value + "</li>";
        }
    }
    return checkbox;
}

function createEvent(index) {
    document.querySelector("." + index).onclick = function () {
        
        if(document.querySelector(".filter-options" + "." + index).className.search("show") == -1){
            let lists = document.querySelectorAll(".filter-options");
            for(let i=0;i<lists.length; i++){
                lists[i].classList.remove("show");
            }
            document.querySelector(".filter-options" + "." + index).classList.add("show");
        } else {
            document.querySelector(".filter-options" + "." + index).classList.remove("show");
        }
    }
}

let inputsText = document.querySelectorAll("input[type=text]");


function saveValueInputs() {
    colectionArray = [];
    let ok=0;
    for(let i=1;i<n.length-1;i++){
        let array = [];
        let tds = n[i].children;
        if(ok==1){
            if(i==n.length-2){
                for(let j=1;j<tds.length-1;j++){
                    array.push(tds[j].children[0].value);
                } 
            } else {
                for(let j=1;j<tds.length;j++){
                    array.push(tds[j].children[0].value);
                }
            }
            createArray(array);
        } else {
            for(let j=1;j<tds.length;j++){
                if(tds[j].children[1]){
                    ok=1;
                }
            }
        }
    }
}

function createArray(arr) {
    colectionArray.push(arr);
}



function checkboxEvent() {
    let checkboxInputs = document.querySelectorAll("input[type=checkbox]");
    console.log(colectionArray);
    let indexOfFilter = n.length-colectionArray.length-1;

    for(let i=0;i<checkboxInputs.length;i++){

        checkboxInputs[i].onchange = function () {
            let ok=0;
            if(checkboxInputs[i].checked){
                // if(checkboxInputs[i].parentNode.innerText)
                for(let z=indexOfFilter;z<n.length-1;z++){
                    let j = colectionArray[z-indexOfFilter];
                    for(let k=0;k<j.length;k++){
                        if(j[k] == checkboxInputs[i].parentNode.innerText){
                            ok=1;
                            break;
                        } else {
                            ok=0;
                        }
                    }

                    if(ok==1){
                        let tds = n[z].children;
                        if(z== n.length-1){
                            for(let l=1;l<tds.length-1;l++){
                                tds[l].children[0].value = colectionArray[z-indexOfFilter][l-1];
                            }
                        } else {
                            for(let l=1;l<tds.length;l++){
                                tds[l].children[0].value = colectionArray[z-indexOfFilter][l-1];
                            }
                        }
                        b(z, indexOfFilter);
                    }
                    
                }
                
            } else {
                
                // if(this.parentNode.innerText)
                for(let z=indexOfFilter;z<n.length-1;z++){
                    let j = colectionArray[z-indexOfFilter];
                    for(let k=0;k<j.length;k++){
                        if(j[k] == checkboxInputs[i].parentNode.innerText){
                            ok=1;
                            break;
                        } else {
                            ok=0;
                        }
                    }

                    if(ok==1){
                        let tds = n[z].children;
                        if(z== n.length-1){
                            for(let l=1;l<tds.length-1;l++){
                                tds[l].children[0].value = "";
                            }
                        } else {
                            for(let l=1;l<tds.length;l++){
                                tds[l].children[0].value = "";
                            }
                        }
                        a(z, indexOfFilter);
                    }
                    
                }
            }
        }
    }
}


function a(index, indexOf) {
    let checkboxInputs = document.querySelectorAll("input[type=checkbox]");
    let j = colectionArray[index-indexOf];
    for(let k=0;k<j.length;k++){
        if(j[k]!= ""){
            for(let i=0;i<checkboxInputs.length;i++){
                if(checkboxInputs[i].parentNode.innerText == j[k]){
                    checkboxInputs[i].checked = false;
                }
            }
        }
    }
}

function b(index, indexOf) {
    let checkboxInputs = document.querySelectorAll("input[type=checkbox]");
    let j = colectionArray[index-indexOf];
    for(let k=0;k<j.length;k++){
        if(j[k]!= ""){
            for(let i=0;i<checkboxInputs.length;i++){
                if(checkboxInputs[i].parentNode.innerText == j[k]){
                    checkboxInputs[i].checked = true;
                }
            }
        }
    }
}

