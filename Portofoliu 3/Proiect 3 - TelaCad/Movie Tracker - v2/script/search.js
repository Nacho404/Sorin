
let resultSearch = document.querySelector("#searched ul");

document.querySelector("nav form button").onclick = function(event) {
    event.preventDefault();
    resultSearch.innerHTML = "";

    if(document.querySelector("nav form input").value != "") {
        let movieFound = 0;
        const text = document.querySelector("nav form input").value.toLowerCase();
        
        let childs = movies.querySelectorAll("li");
        for(let child of childs){
            if(child.querySelector(".name-year-rating h3").innerText.toLowerCase().search(text) == 0){
                resultSearch.innerHTML += `<li>${child.innerHTML}</li>`;
                movieFound = 1;
            }
        }

        document.querySelector("main").classList.add("hideMain");
        document.querySelector("#searched").classList.add("showSearch");
        document.querySelector("nav form input").value = ""

        if(movieFound == 0) {
            document.querySelector("#searched div").style.display = "block";
        } else {
            document.querySelector("#searched div").style.display = "";
        }

    } else {

        document.querySelector("main").classList.add("hideMain");
        document.querySelector("#searched").classList.add("showSearch");
        document.querySelector("nav form input").value = ""
        document.querySelector("#searched div").style.display = "block";
       
    }
}

document.querySelector("#searched button").onclick = function () {
    document.querySelector("main").classList.remove("hideMain");
    document.querySelector("#searched").classList.remove("showSearch");
}

function backToMovies(){
    document.querySelector("main").classList.remove("hideMain");
    document.querySelector("#searched").classList.remove("showSearch");
}