let count = 0;
let secondsCount = setInterval(function(){
    count ++;
    if(count == 5){
        clearInterval(secondsCount);
        document.querySelector("main div.info-show").classList.add("show");
    }
}, 1000);

function closeItem () {
    document.querySelector("main div.info-show").classList.remove("show");
}

function toggleMenuLeft () {
    document.querySelector("menu").classList.toggle("hidden");
}