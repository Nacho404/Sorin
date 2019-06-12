// Selectare "Button" --> "Vezi articol"
let buttonArticle = document.getElementById("article-on-of");

// Selectare "Button" --> "Creeaza articol"
let buttonCreator = document.querySelector(".create-btn");

// Selectare  "Button" --> "Posteaza articol"
let buttonPost = document.getElementById("post");

// Selectare  "Button" --> "Avansat"
let buttonAvansat = document.querySelector(".hidden-set .avans");

// Selectare "Button" --> "Infrumusetare  articol" || "Default"
let buttonBlogStyle = document.querySelector("#style-btn");

// Selectare "Ul" --> optional-tools
let listOfTools = document.querySelector(".hidden-set .optional-tools");

// Selectare Articol creeat de USER 
let userArticle = document.getElementById("user-article-container");

// Selectare Articol creeat de USER  + Meniul de functionalitati
let userArticleAndMenu = document.getElementById("article-container-menu");

// Selectare "Input" --> name="Nume"
let inputName = document.querySelector('input[name="Nume"]');

// Selectare "Input" --> name="Prenume"
let inputLastName = document.querySelector("input[name=Prenume]");

// Selectare "Input" --> name="Titlu"
let inputTitle = document.querySelector("input[name=Titlu]");

// Selectare "Textarea" --> descrierea articolului
let article = document.querySelector("textarea");

// Numar lungimea sirului din "Input"  && "Textarea"
function checkInputLength (input) {
    let nameLength = input.value.length;
    return nameLength;
}

function checkForShow () {
    if( checkInputLength(inputName) >= 3) {

        if( checkInputLength(inputLastName) >= 3) {
            
            if( checkInputLength(inputTitle) > 0) {

                if( checkInputLength(article) >= 10) {

                    userArticleAndMenu.classList.toggle("show-article-container-menu");

                    if( userArticleAndMenu.className !== "hidden show-article-container-menu" ) {
                        buttonArticle.innerHTML = "Vezi articol";
                    } else {
                        buttonArticle.innerHTML = "Ascunde articol";
                    }
            
                } else {
                    alert("Va rog sa folositi o descriere mai detaliata \n\t Cel putin 9 caractere")
                }
            
            } else {
                alert("Titlul nu este corespunzator" )
            }

        } else {
            alert("Preumele dumneavoastra nu este corespunzator\n\t Lungimea prenumelui trebuie sa fie mai mare de " + 3)
        }
        
    } else {
        alert("Numele dumneavoastra nu este corespunzator\n\t Lungimea numelui trebuie sa fie mai mare de " + 3)
    }
}

buttonArticle.addEventListener("click", function(){
    checkForShow(); 
});

function showAdvancedMenu () {
    // listOfTools.classList.toggle("show");
    if(listOfTools.className == "optional-tools hidden show"){
        listOfTools.classList.remove("show");
    } else {
        listOfTools.classList.add("show");
        document.getElementById("put-some-style").classList.add("make-btn-green");
        document.getElementById("delete").classList.add("make-btn-green");
        document.getElementById("post").classList.add("make-btn-green");
    }

}

buttonAvansat.addEventListener("click", function () {
    showAdvancedMenu();
});

function writeArticleStyleDefault () {
   
    if( checkInputLength(inputName) >= 3) {

        if( checkInputLength(inputLastName) >= 3) {
            
            if( checkInputLength(inputTitle) > 0) {

                if( checkInputLength(article) >= 10) {

                    if(buttonCreator.innerHTML == "Modifica articol") {
                        document.getElements
                        document.querySelector("#user-article-container .heading-created").innerHTML = inputTitle.value + " -- <a href=\"javascript:void(0)\">Lasa un comentariu</a>";
                        document.querySelector("#user-article-container .paragraph-created").innerHTML = article.value +  "... <a href=\"javascript:void(0)\"> Mai mult</a>";
                        document.querySelector("#user-article-container .paragraph-created:nth-of-type(2)").innerHTML = "Articol creeat de: " + inputName.value + " " + inputLastName.value;
                        buttonCreator.setAttribute("title", "Apasa acest buton atunci cand doresti sa modifici ceva in Articol");        
                    } else {
                
                        if( document.querySelector(".heading-created") == null) {
                            userArticle.innerHTML += " <h3 class=\"heading-created\">" + inputTitle.value + " -- <a href=\"javascript:void(0)\">Lasa un comentariu</a></h3>";
                        } 
                
                        if( document.querySelector(".paragraph-created") == null) {
                            userArticle.innerHTML += "<p class=\"paragraph-created\">" + article.value + "... <a href=\"javascript:void(0)\"> Mai mult</a></p><p class=\"paragraph-created\">Articol creeat de: " + inputName.value + " " + inputLastName.value + "</p><hr>";
                        }
                        
                        userArticle.innerHTML = "<div class=\"default-style-article\">" + userArticle.innerHTML + "</div>";                    
                        
                        // document.querySelector("#user-article-container").classList.add("default-style-article");
                        document.querySelector("#user-article-container .heading-created").classList.add("default-style-article-heading");
                        document.querySelector("#user-article-container .paragraph-created").classList.add("default-style-article-paragraph");
                        document.querySelector("#user-article-container .paragraph-created:nth-of-type(2)").classList.add("default-style-article-paragraph");
                        document.querySelector("#user-article-container hr").classList.add("default-style-article-hr");
                
                        buttonCreator.innerHTML = "Modifica articol";
                    }
                    
                } else {
                    alert("Va rog sa folositi o descriere mai detaliata \n\t Cel putin 9 caractere")
                }
            
            } else {
                alert("Titlul nu este corespunzator" )
            }

        } else {
            alert("Preumele dumneavoastra nu este corespunzator\n\t Lungimea prenumelui trebuie sa fie mai mare de " + 3)
        }
        
    } else {
        alert("Numele dumneavoastra nu este corespunzator\n\t Lungimea numelui trebuie sa fie mai mare de " + 3)
    }
}

buttonCreator.addEventListener("click", function () {
    writeArticleStyleDefault(); 
});

function addBlogStyleToArticle () {
    if( buttonBlogStyle.innerHTML == "Default" ){
        document.querySelector("#user-article-container .heading-created").classList.remove("default-style-article-heading");
        document.querySelector("#user-article-container .paragraph-created").classList.remove("default-style-article-paragraph");
        document.querySelector("#user-article-container .paragraph-created:nth-of-type(2)").classList.remove("default-style-article-paragraph");
        document.querySelector("#user-article-container hr").classList.remove("default-style-article-hr");
    } else {
        document.querySelector("#user-article-container .heading-created").classList.add("default-style-article-heading");
        document.querySelector("#user-article-container .paragraph-created").classList.add("default-style-article-paragraph");
        document.querySelector("#user-article-container .paragraph-created:nth-of-type(2)").classList.add("default-style-article-paragraph");
        document.querySelector("#user-article-container hr").classList.add("default-style-article-hr");
    }
    

    document.querySelector("#user-article-container .heading-created").classList.toggle("blog-style-article-heading");
    document.querySelector("#user-article-container .paragraph-created").classList.toggle("blog-style-article-paragraph");
    document.querySelector("#user-article-container .paragraph-created:nth-of-type(2)").classList.toggle("blog-style-article-paragraph");
    document.querySelector("#user-article-container hr").classList.toggle("blog-style-article-hr");
    document.querySelector("#user-article-container .heading-created a").classList.toggle("blog-style-link-comment");
    document.querySelector("#user-article-container .paragraph-created a").classList.toggle("blog-style-link-more");

    if(document.querySelector("#user-article-container .heading-created").className !== "heading-created blog-style-article-heading") {
        buttonBlogStyle.innerHTML = "Default";
    } else {
        buttonBlogStyle.innerHTML = "sterge Default";
    }
    
    if(buttonBlogStyle.innerHTML == "sterge Default") {
        document.querySelector("#personal-style").disabled = true;
    } else {
        document.querySelector("#personal-style").disabled = false;
    }
}

buttonBlogStyle.addEventListener("click", function(){
   addBlogStyleToArticle();
});

function addStyleTools () {
    document.querySelector(".optional-tools .add-style-tools").classList.toggle("show");
    
    document.querySelector("#personal-style").classList.add("make-btn-blue");
    buttonBlogStyle.classList.add("make-btn-blue");

    if(buttonPost.disabled == false) {
        buttonPost.disabled = true;
    } else {
        buttonPost.disabled = false;
    }

    if(document.querySelector("#delete").disabled == false) {
        document.querySelector("#delete").disabled = true;
    } else {
        document.querySelector("#delete").disabled = false;
    }
}

function elementsStyleTools () {
    document.querySelector(".optional-tools .add-style-tools .elements-style-tools").classList.toggle("show");
   
    document.querySelector("#title-btn").classList.add("make-btn-yellow");
    document.querySelector("#comment-btn").classList.add("make-btn-yellow");
    document.querySelector("#describe-btn").classList.add("make-btn-yellow");
    document.querySelector("#more-btn").classList.add("make-btn-yellow");

    if(buttonBlogStyle.disabled == false) {
        buttonBlogStyle.disabled = true;
    } else {
        buttonBlogStyle.disabled = false;
    }
}

let counter;
let i=0 ,j=0, k=0, l=0;
let ifz=0, jfz=0, kfz=0, lfz=0;
let iff=0, jff=0, kff=0, lff=0;

function styleToolsTitle () {

    if(i == 0){
        document.getElementById("color-btn").innerHTML = "Culoare";
    } else if(i==1) {
        document.getElementById("color-btn").innerHTML = "Sterge Culoare";
    }

    if(ifz == 0){
        document.getElementById("text-size-btn").innerHTML = "Marime text";
    } else if(ifz == 1) {
        document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
    }

    if(iff == 0){
        document.getElementById("font-family-btn").innerHTML = "Font text";
    } else if(iff == 1) {
        document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
    }


    counter = 1;
    document.querySelector(".optional-tools .add-style-tools .elements-style-tools .style-tools").classList.toggle("show");
    
    document.getElementById("color-btn").classList.add("make-btn-red");
    document.getElementById("text-size-btn").classList.add("make-btn-red");
    document.getElementById("font-family-btn").classList.add("make-btn-red");
    

    if(document.querySelector("#comment-btn").disabled == false) {
        document.querySelector("#comment-btn").disabled = true;
    } else {
        document.querySelector("#comment-btn").disabled = false;
    }

    if(document.querySelector("#describe-btn").disabled == false) {
        document.querySelector("#describe-btn").disabled = true;
    } else {
        document.querySelector("#describe-btn").disabled = false;
    }

    if(document.querySelector("#more-btn").disabled == false) {
        document.querySelector("#more-btn").disabled = true;
    } else {
        document.querySelector("#more-btn").disabled = false;
    }
}

function styleToolsComment () {

    if(j == 0){
        document.getElementById("color-btn").innerHTML = "Culoare";
    } else if(j==1) {
        document.getElementById("color-btn").innerHTML = "Sterge Culoare";
    }

    if(jfz == 0){
        document.getElementById("text-size-btn").innerHTML = "Marime text";
    } else if(jfz == 1) {
        document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
    }

    if(jff == 0){
        document.getElementById("font-family-btn").innerHTML = "Font text";
    } else if(jff == 1) {
        document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
    }

    counter = 2;
    document.querySelector(".optional-tools .add-style-tools .elements-style-tools .style-tools").classList.toggle("show");
    
    document.getElementById("color-btn").classList.add("make-btn-red");
    document.getElementById("text-size-btn").classList.add("make-btn-red");
    document.getElementById("font-family-btn").classList.add("make-btn-red");

    if(document.querySelector("#title-btn").disabled == false) {
        document.querySelector("#title-btn").disabled = true;
    } else {
        document.querySelector("#title-btn").disabled = false;
    }

    if(document.querySelector("#describe-btn").disabled == false) {
        document.querySelector("#describe-btn").disabled = true;
    } else {
        document.querySelector("#describe-btn").disabled = false;
    }

    if(document.querySelector("#more-btn").disabled == false) {
        document.querySelector("#more-btn").disabled = true;
    } else {
        document.querySelector("#more-btn").disabled = false;
    }
}

function styleToolsDescribe () {

    if(k == 0){
        document.getElementById("color-btn").innerHTML = "Culoare";
    } else if(k==1) {
        document.getElementById("color-btn").innerHTML = "Sterge Culoare";
    }

    if(kfz == 0){
        document.getElementById("text-size-btn").innerHTML = "Marime text";
    } else if(kfz == 1) {
        document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
    }

    if(kff == 0){
        document.getElementById("font-family-btn").innerHTML = "Font text";
    } else if(kff == 1) {
        document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
    }

    counter = 3;
    document.querySelector(".optional-tools .add-style-tools .elements-style-tools .style-tools").classList.toggle("show");
    
    document.getElementById("color-btn").classList.add("make-btn-red");
    document.getElementById("text-size-btn").classList.add("make-btn-red");
    document.getElementById("font-family-btn").classList.add("make-btn-red");

    if(document.querySelector("#title-btn").disabled == false) {
        document.querySelector("#title-btn").disabled = true;
    } else {
        document.querySelector("#title-btn").disabled = false;
    }

    if(document.querySelector("#comment-btn").disabled == false) {
        document.querySelector("#comment-btn").disabled = true;
    } else {
        document.querySelector("#comment-btn").disabled = false;
    }

    if(document.querySelector("#more-btn").disabled == false) {
        document.querySelector("#more-btn").disabled = true;
    } else {
        document.querySelector("#more-btn").disabled = false;
    }
}

function styleToolsMore () {

    if(l == 0){
        document.getElementById("color-btn").innerHTML = "Culoare";
    } else if(l==1) {
        document.getElementById("color-btn").innerHTML = "Sterge Culoare";
    }

    if(lfz == 0){
        document.getElementById("text-size-btn").innerHTML = "Marime text";
    } else if(lfz == 1) {
        document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
    }

    if(lff == 0){
        document.getElementById("font-family-btn").innerHTML = "Font text";
    } else if(lff == 1) {
        document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
    }

    counter = 4;
    document.querySelector(".optional-tools .add-style-tools .elements-style-tools .style-tools").classList.toggle("show");

    document.getElementById("color-btn").classList.add("make-btn-red");
    document.getElementById("text-size-btn").classList.add("make-btn-red");
    document.getElementById("font-family-btn").classList.add("make-btn-red");

    if(document.querySelector("#title-btn").disabled == false) {
        document.querySelector("#title-btn").disabled = true;
    } else {
        document.querySelector("#title-btn").disabled = false;
    }

    if(document.querySelector("#comment-btn").disabled == false) {
        document.querySelector("#comment-btn").disabled = true;
    } else {
        document.querySelector("#comment-btn").disabled = false;
    }

    if(document.querySelector("#describe-btn").disabled == false) {
        document.querySelector("#describe-btn").disabled = true;
    } else {
        document.querySelector("#describe-btn").disabled = false;
    }
}

function addFontSize () {
    
    switch (counter) {
        case 1:
            // let addFontSizeTitle = prompt("Ce marime doresti sa pui Titlului tau ?!\n Poti scrie: mic, mediu sau mare");
            
            if(document.getElementById("text-size-btn").innerHTML == "Sterge Marime text"){
                document.querySelector("#user-article-container .heading-created").style.fontSize = "";
                document.getElementById("text-size-btn").innerHTML = "Marime text";
                ifz=0;
            } else {
                let addFontSizeTitle = prompt("Ce marime doresti sa pui Titlului tau ?!\n Poti scrie: mic, mediu sau mare");
            
                while ( (addFontSizeTitle == null || addFontSizeTitle == "") || (addFontSizeTitle != "mic" && addFontSizeTitle != "mediu" && addFontSizeTitle != "mare") ) {
                    addFontSizeTitle = prompt("Ce marime doresti sa pui Titlului tau ?!\n Poti scrie: mic, mediu sau mare");
                }
                
                if(addFontSizeTitle == "mic") {
                    document.querySelector("#user-article-container .heading-created").style.fontSize = "1.2rem";
                } else if (addFontSizeTitle == "mediu") {
                    document.querySelector("#user-article-container .heading-created").style.fontSize = "1.5rem";
                } else if (addFontSizeTitle == "mare") {
                    document.querySelector("#user-article-container .heading-created").style.fontSize = "2rem";
                }

                document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
                ifz=1;
            }   
        break;
        case 2:
            // let addFontSizeComment = prompt("Ce marime doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie: mic, mediu sau mare");
            
            if(document.getElementById("text-size-btn").innerHTML == "Sterge Marime text"){
                document.querySelector("#user-article-container .heading-created a").style.fontSize = "";
                document.getElementById("text-size-btn").innerHTML = "Marime text";
                jfz=0;
            } else {
                let addFontSizeComment = prompt("Ce marime doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie: mic, mediu sau mare");
            
                while ( (addFontSizeComment == null || addFontSizeComment == "") || (addFontSizeComment != "mic" && addFontSizeComment != "mediu" && addFontSizeComment != "mare") ) {
                    addFontSizeComment = prompt("Ce marime doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie: mic, mediu sau mare");
                }
                
                if(addFontSizeComment == "mic") {
                    document.querySelector("#user-article-container .heading-created a").style.fontSize = "1.2rem";
                } else if (addFontSizeComment == "mediu") {
                    document.querySelector("#user-article-container .heading-created a").style.fontSize = "1.5rem";
                } else if (addFontSizeComment == "mare") {
                    document.querySelector("#user-article-container .heading-created a").style.fontSize = "2rem";
                }

                document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
                jfz=1;
            }  
        break;
        case 3:
            // let addFontSizeDescribe = prompt("Ce marime doresti sa pui Descrierii tale ?!\n Poti scrie: mic, mediu sau mare");

            if(document.getElementById("text-size-btn").innerHTML == "Sterge Marime text"){
                document.querySelector("#user-article-container .paragraph-created").style.fontSize = "";
                document.getElementById("text-size-btn").innerHTML = "Marime text";
                kfz=0;
            } else {
                let addFontSizeDescribe = prompt("Ce marime doresti sa pui Descrierii tale ?!\n Poti scrie: mic, mediu sau mare");
            
                while ( (addFontSizeDescribe == null || addFontSizeDescribe == "") || (addFontSizeDescribe != "mic" && addFontSizeDescribe != "mediu" && addFontSizeDescribe != "mare") ) {
                    addFontSizeDescribe = prompt("Ce marime doresti sa pui Descrierii tale ?!\n Poti scrie: mic, mediu sau mare");
                }
                
                if(addFontSizeDescribe == "mic") {
                    document.querySelector("#user-article-container .paragraph-created").style.fontSize = "1.2rem";
                } else if (addFontSizeDescribe == "mediu") {
                    document.querySelector("#user-article-container .paragraph-created").style.fontSize = "1.5rem";
                } else if (addFontSizeDescribe == "mare") {
                    document.querySelector("#user-article-container .paragraph-created").style.fontSize = "2rem";
                }

                document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
                kfz=1;
            }  
        break;
        case 4:
            // let addFontSizeMore = prompt("Ce marime doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie: mic, mediu sau mare");

            if(document.getElementById("text-size-btn").innerHTML == "Sterge Marime text"){
                document.querySelector("#user-article-container .paragraph-created a").style.fontSize = "";
                document.getElementById("text-size-btn").innerHTML = "Marime text";
                lfz=0;
            } else {
                let addFontSizeMore = prompt("Ce marime doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie: mic, mediu sau mare");
            
                while ( (addFontSizeMore == null || addFontSizeMore == "") || (addFontSizeMore != "mic" && addFontSizeMore != "mediu" && addFontSizeMore != "mare") ) {
                    addFontSizeMore = prompt("Ce marime doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie: mic, mediu sau mare");
                }
                
                if(addFontSizeMore == "mic") {
                    document.querySelector("#user-article-container .paragraph-created a").style.fontSize = "1.2rem";
                } else if (addFontSizeMore == "mediu") {
                    document.querySelector("#user-article-container .paragraph-created a").style.fontSize = "1.5rem";
                } else if (addFontSizeMore == "mare") {
                    document.querySelector("#user-article-container .paragraph-created a").style.fontSize = "2rem";
                }

                document.getElementById("text-size-btn").innerHTML = "Sterge Marime text";
                lfz=1;
            }  
        break;
    }
}

function addFontFamily () {
    
    switch (counter) {
        case 1:
            // let addFontFamilyTitle = Number(prompt("Ce font doresti sa pui Titlului tau ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
            
            if(document.getElementById("font-family-btn").innerHTML == "Sterge Font text"){
                document.querySelector("#user-article-container .heading-created").style.fontFamily = "";
                document.getElementById("font-family-btn").innerHTML = "Font text";
                iff=0;
            } else {
                let addFontFamilyTitle = Number(prompt("Ce font doresti sa pui Titlului tau ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
            
                while ( (addFontFamilyTitle == null || addFontFamilyTitle == "") || (addFontFamilyTitle != 1 && addFontFamilyTitle != 2 && addFontFamilyTitle != 3) ) {
                    addFontFamilyTitle = Number(prompt("Ce font doresti sa pui Titlului tau ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
                }
                
                if(addFontFamilyTitle == 1) {
                    document.querySelector("#user-article-container .heading-created").style.fontFamily = "'Pacifico', cursive";
                } else if (addFontFamilyTitle == 2) {
                    document.querySelector("#user-article-container .heading-created").style.fontFamily = "'Indie Flower', cursive";
                } else if (addFontFamilyTitle == 3) {
                    document.querySelector("#user-article-container .heading-created").style.fontFamily = "'Josefin Sans', sans-serif";
                }

                document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
                iff=1;
            } 


        break;
        case 2:
            // let addFontFamilyComment = Number(prompt("Ce font doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));

            if(document.getElementById("font-family-btn").innerHTML == "Sterge Font text"){
                document.querySelector("#user-article-container .heading-created a").style.fontFamily = "";
                document.getElementById("font-family-btn").innerHTML = "Font text";
                jff=0;
            } else {
                let addFontFamilyComment = Number(prompt("Ce font doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
            
                while ( (addFontFamilyComment == null || addFontFamilyComment == "") || (addFontFamilyComment != 1 && addFontFamilyComment != 2 && addFontFamilyComment != 3) ) {
                    addFontFamilyComment = Number(prompt("Ce font doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
                }
                
                if(addFontFamilyComment == 1) {
                    document.querySelector("#user-article-container .heading-created a").style.fontFamily = "'Pacifico', cursive";
                } else if (addFontFamilyComment == 2) {
                    document.querySelector("#user-article-container .heading-created a").style.fontFamily = "'Indie Flower', cursive";
                } else if (addFontFamilyComment == 3) {
                    document.querySelector("#user-article-container .heading-created a").style.fontFamily = "'Josefin Sans', sans-serif";
                }

                document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
                jff=1;
            } 
            

        break;
        case 3:
            // let addFontFamilyDescribe = Number(prompt("Ce font doresti sa pui Descrierii tale ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));

            if(document.getElementById("font-family-btn").innerHTML == "Sterge Font text"){
                document.querySelector("#user-article-container .paragraph-created").style.fontFamily = "";
                document.getElementById("font-family-btn").innerHTML = "Font text";
                kff=0;
            } else {
                let addFontFamilyDescribe = Number(prompt("Ce font doresti sa pui Descrierii tale ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
            
                while ( (addFontFamilyDescribe == null || addFontFamilyDescribe == "") || (addFontFamilyDescribe != 1 && addFontFamilyDescribe != 2 && addFontFamilyDescribe != 3) ) {
                    addFontFamilyDescribe = Number(prompt("Ce font doresti sa pui Descrierii tale ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
                }
                
                if(addFontFamilyDescribe == 1) {
                    document.querySelector("#user-article-container .paragraph-created").style.fontFamily = "'Pacifico', cursive";
                } else if (addFontFamilyDescribe == 2) {
                    document.querySelector("#user-article-container .paragraph-created").style.fontFamily = "'Indie Flower', cursive";
                } else if (addFontFamilyDescribe == 3) {
                    document.querySelector("#user-article-container .paragraph-created").style.fontFamily = "'Josefin Sans', sans-serif";
                }

                document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
                kff=1;
            }

        break;
        case 4:
            // let addFontFamilyMore = Number(prompt("Ce font doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));

            if(document.getElementById("font-family-btn").innerHTML == "Sterge Font text"){
                document.querySelector("#user-article-container .paragraph-created a").style.fontFamily = "";
                document.getElementById("font-family-btn").innerHTML = "Font text";
                lff=0;
            } else {
                let addFontFamilyMore = Number(prompt("Ce font doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
            
                while ( (addFontFamilyMore == null || addFontFamilyMore == "") || (addFontFamilyMore != 1 && addFontFamilyMore != 2 && addFontFamilyMore != 3) ) {
                    addFontFamilyMore = Number(prompt("Ce font doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie:\n 'Pacifico', cursive; --> Tasteaza 1\n 'Indie Flower', cursive; -->> Tasteaza 2\n 'Josefin Sans', sans-serif; -->> Tasteaza 3"));
                }
                
                if(addFontFamilyMore == 1) {
                    document.querySelector("#user-article-container .paragraph-created a").style.fontFamily = "'Pacifico', cursive";
                } else if (addFontFamilyMore == 2) {
                    document.querySelector("#user-article-container .paragraph-created a").style.fontFamily = "'Indie Flower', cursive";
                } else if (addFontFamilyMore == 3) {
                    document.querySelector("#user-article-container .paragraph-created a").style.fontFamily = "'Josefin Sans', sans-serif";
                }

                document.getElementById("font-family-btn").innerHTML = "Sterge Font text";
                lff=1;
            }

        break;
    }
}

function addColor () {
    
    switch (counter) {
        case 1:

            if(document.getElementById("color-btn").innerHTML == "Sterge Culoare"){
                document.querySelector("#user-article-container .heading-created").style.color = "";
                document.getElementById("color-btn").innerHTML = "Culoare";
                i=0;
            } else {
                let addColorTitle = prompt("Ce culoare doresti sa pui Titlului tau ?!\n Poti scrie: rgb, rgba, hexa sau text");
            
                while (addColorTitle == null || addColorTitle == "") {
                    addColorTitle = prompt("Ce culoare doresti sa pui Titlului tau ?!\n Poti scrie: rgb, rgba, hexa sau text");
                }
                
                document.querySelector("#user-article-container .heading-created").style.color = addColorTitle;
                document.getElementById("color-btn").innerHTML = "Sterge Culoare";
                i=1;
            }   

            
        break;
        case 2:

            if(document.getElementById("color-btn").innerHTML == "Sterge Culoare"){
                document.querySelector("#user-article-container .heading-created a").style.color = "";
                document.getElementById("color-btn").innerHTML = "Culoare";
                j=0;
            } else {
                let addColorComment = prompt("Ce culoare doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie: rgb, rgba, hexa sau text");
            
                while (addColorComment == null || addColorComment == "") {
                    addColorComment = prompt("Ce culoare doresti sa pui linkului tau --> 'Lasa un comentariu' ?!\n Poti scrie: rgb, rgba, hexa sau text");
                }
                
                document.querySelector("#user-article-container .heading-created a").style.color = addColorComment;
                document.getElementById("color-btn").innerHTML = "Sterge Culoare";
                j=1;
            }   
        
        break;
        case 3:

            if(document.getElementById("color-btn").innerHTML == "Sterge Culoare"){
                document.querySelector("#user-article-container .paragraph-created").style.color = "";
                document.getElementById("color-btn").innerHTML = "Culoare";
                k=0;
            } else {
                let addColorDescribe = prompt("Ce culoare doresti sa pui Descrierii tale ?!\n Poti scrie: rgb, rgba, hexa sau text");
            
                while (addColorDescribe == null || addColorDescribe == "") {
                    addColorDescribe = prompt("Ce culoare doresti sa pui Descrierii tale ?!\n Poti scrie: rgb, rgba, hexa sau text");
                }
                
                document.querySelector("#user-article-container .paragraph-created").style.color = addColorDescribe;
                document.getElementById("color-btn").innerHTML = "Sterge Culoare";
                k=1;
            } 

        break;
        case 4:

            if(document.getElementById("color-btn").innerHTML == "Sterge Culoare"){
                document.querySelector("#user-article-container .paragraph-created a").style.color = "";
                document.getElementById("color-btn").innerHTML = "Culoare";
                l=0;
            } else {
                let addColorMore = prompt("Ce culoare doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie: rgb, rgba, hexa sau text");
            
                while (addColorMore == null || addColorMore == "") {
                    addColorMore = prompt("Ce culoare doresti sa pui linkului tau --> 'Mai mult' ?!\n Poti scrie: rgb, rgba, hexa sau text");
                }
                
                document.querySelector("#user-article-container .paragraph-created a").style.color = addColorMore;
                document.getElementById("color-btn").innerHTML = "Sterge Culoare";
                l=1;
            }

        break;
    }
}

// Actiune la postare Articol 
let initialArticles;
function postArticleUp () {
    if(document.querySelector("#post").innerHTML == "Salveaza articol"){
        alert("Daca vrei sa pui acest articol pe site..\n Trebuie sa PLATESTI !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    } else {
        initialArticles = document.getElementById("articles").innerHTML;
        document.getElementById("articles").innerHTML += "<div id=\"user-article-container\">" + userArticle.innerHTML + "</div>";
        document.querySelector("#post").innerHTML = "Salveaza articol";
    }
}

function deleteArticleUp () {
    document.getElementById("articles").innerHTML = initialArticles;
    document.querySelector("#post").innerHTML = "Posteaza articol";
}