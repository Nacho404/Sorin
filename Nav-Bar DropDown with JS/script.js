function myDropDown () {
    document.querySelector("nav ul#drop-down").classList.toggle("show");
    console.log("s-a executat");
}


var button = document.querySelector("button");

button.addEventListener("click", function() {
    myDropDown();
});