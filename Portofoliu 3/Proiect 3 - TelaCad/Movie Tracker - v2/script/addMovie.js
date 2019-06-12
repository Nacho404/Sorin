
let addMovieBtn = document.querySelector(".add-btn");
let form = document.querySelector(".add-movie form");
let movies = document.querySelector(".movies ul")

addMovieBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let movieName = form.querySelector(".movie-name").value;
    let movieDescribe = form.querySelector(".movie-describe").value;
    let movieImage = form.querySelector(".movie-image").value;
    let movieRelease = form.querySelector(".movie-release").value;
    let movieRating = form.querySelector(".movie-rating").value;

    if(movieName != "") {
        managementWarnings(".movie-name", "#warning-mn", "", false );

        if(movieDescribe != "" && movieDescribe.length >=30) {
            managementWarnings(".movie-describe", "#warning-md", "", false );
            
            if(movieImage != "") {
                managementWarnings(".movie-image", "#warning-mi", "", false );
                
                if(movieRelease != "" && !isNaN(movieRelease) && movieRelease.length == 4) {
                    managementWarnings(".movie-release", "#warning-mre", "", false );

                    if(movieRating != "" && (Number(movieRating) >= 0 && Number(movieRating) <= 10 )) {
                        managementWarnings(".movie-rating", "#warning-mra", "", false );

                        movies.innerHTML += `
                        <li>

                            <div class="time">
                            Prescrise
                            </div>

                            <div class="name-year-rating d-flex justify-content-between">
                            <h3>${movieName} (<span class="year">${movieRelease}</span>)</h3>
                            <p><i class="far fa-star"></i> ${Number(movieRating).toFixed(1)}</p>
                            </div>

                            <div class="image-describe d-flex flex-column flex-md-row align-items-center justify-content-between">
                            <img class="image img-thumbnail" src="${movieImage}" alt="Nu exista">
                            <section class="describe">
                                ${movieDescribe}
                            </section>
                            </div>

                        </li>`

                        dateList.push({year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate(), hours: new Date().getHours(), minutes: new Date().getMinutes()});
                        checkTime();
                        eraseValueInput();

                        if(whereISorted==1){
                            sortList(".name-year-rating h3", false);
                        } else if(whereISorted==2){
                            sortList(".name-year-rating h3 span", false);
                        } else if(whereISorted==3){
                            sortList(".name-year-rating p", false);
                        } else if(whereISorted==4){
                            sortList( ".time" , true);
                        }


                    } else if(movieRating == "") {

                        managementWarnings(".movie-rating", "#warning-mra", "Casuta trebuie sa contina un numar", true );
                    } else if( !(Number(movieRating) >= 0 && Number(movieRating) <= 10 ) ) {
                        managementWarnings(".movie-rating", "#warning-mra", "Numarul trebuie sa fie in intervalul [0,10]", true );
                    }

                } else if(movieRelease == "") {

                    managementWarnings(".movie-release", "#warning-mre", "Casuta trebuie sa contina un numar", true );
                } else if(isNaN(movieRelease)) {

                    managementWarnings(".movie-release", "#warning-mre", "Casuta trebuie sa contina doar numere", true );
                } else if(movieRelease.length != 4) {

                    managementWarnings(".movie-release", "#warning-mre", "Anul trebuie sa fie in format de 4 cifre", true );
                }


            } else {
               
                managementWarnings(".movie-image", "#warning-mi", "Casuta trebuie sa contina text", true );
            }

        } else if(movieDescribe == "") {
    
            managementWarnings(".movie-describe", "#warning-md", "Casuta trebuie sa contina text", true );
        } else if(movieDescribe.length < 30) {

            managementWarnings(".movie-describe", "#warning-md", "Descrierea trebuie sa contina minim 30 cuvinte", true );
        }

    } else {

        managementWarnings(".movie-name", "#warning-mn", "Casuta trebuie sa contina text", true );
    }
})

function managementWarnings( inputClass, warningId, text, addClass){
    if(addClass) {
        form.querySelector(inputClass).classList.add("showWarning");
        form.querySelector(warningId).style.opacity = 1;
    } else {
        form.querySelector(inputClass).classList.remove("showWarning");
        form.querySelector(warningId).style.opacity = "";
    }

    form.querySelector(warningId).innerHTML = text
    
}


  
function eraseValueInput(){
  form.querySelector(".movie-name").value = "";
  form.querySelector(".movie-describe").value = "";
  form.querySelector(".movie-image").value = "";
  form.querySelector(".movie-release").value = "";
  form.querySelector(".movie-rating").value = "";
}