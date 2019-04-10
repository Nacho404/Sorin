
let menu = document.querySelector(".functions-menu .sort-options");
let ok=0;
let body = document.querySelector("body");

// Functionalitare Button -- > "Sort"
body.onclick =  function () {
    if(menu.className == "sort-options show" && ok == 0) {
        menu.classList.remove("show");  
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





