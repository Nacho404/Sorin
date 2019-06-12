typeDateBtn = document.querySelector("#tip-date-btn");
listDateType = document.querySelector(".tip-date");
dateTypes = listDateType.querySelectorAll("li");

typeDateBtn.onclick = function() {
    listDateType.classList.toggle("show");
}

for(let i=0;i<dateTypes.length;i++){
    dateTypes[i].onclick = function() {
        if(isFocused){
            switch(dateTypes[i].innerText) {
                case "text":
                changeType("text");
                break;
                case "numar":
                changeType("number");
                break;
                case "data calendaristica":
                changeType("date")
                break;
                case "ora":
                changeType("time");
                break;
            }
            console.log({a:document.querySelectorAll("." + n[1].className + " td input[type=text]")});
        } else {
            alert("Selecteaza 'Casuta' pe care vrei sa schimbi Tipul de Date!!!");
        }
    }
}

function changeType (type) {
    n[whereAmIAtLine].children[whereAmI+1].children[0].type = type;
    for(let j=1; j<n.length-1; j++){
        if(type == "date"){
            n[j].children[whereAmI+1].children[0].style.width = "138.86px";
        } else {
            n[j].children[whereAmI+1].children[0].style.width = "";
        }
    }
}