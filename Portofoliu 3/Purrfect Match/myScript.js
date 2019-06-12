
    var body = document.querySelector("body");
    var isNotCat = false;

    setInterval(function(){
        if(isNotCat){
            body.style.background ="white";
        } else {
            body.style.background= "blue";
        }
        isNotCat = !isNotCat;
    }, 1000);
