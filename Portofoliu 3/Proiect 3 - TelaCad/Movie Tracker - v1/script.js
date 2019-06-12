
function load() {

let addMovieBtn = document.querySelector(".add-btn");
let form = document.querySelector(".add-movie form");
let movies = document.querySelector(".movies ul")
localStorage.setItem("movies", movies.innerHTML);
movies.innerHTML = localStorage.getItem("movies");

let timeOf = [
   {
     hours: 21,
     minutes: 35,
     seconds: 15
  },

  {
    hours: 21,
    minutes: 35,
    seconds: 15
 },

 {
   hours: 21,
   minutes: 35,
   seconds: 15
}

]

addMovieBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let movieName = form.querySelector(".movie-name").value;
  let movieDescribe = form.querySelector(".movie-describe").value;
  let movieImage = form.querySelector(".movie-image").value;
  let movieRelease = form.querySelector(".movie-release").value;
  let movieRating = form.querySelector(".movie-rating").value;



  movies.innerHTML += `
  <li>
    <div class="time">
      Adaugat acum 4 min
    </div>

    <div class="name-year-rating">
      <h3>${movieName}(<span class="year">${movieRelease}</span>)</h3>
      <p>Rating: ${movieRating}</p>
    </div>

    <div class="image-describe">
      <img class="image" src="${movieImage}" alt="">
      <section class="describe">
        ${movieDescribe}
      </section>
    </div>

  </li>`
  timeOf.push({hours: new Date().getHours, minutes: new Date().getMinutes, seconds: new Date().getSeconds})
  eraseValueInput();

  localStorage.setItem("movies", movies.innerHTML);
})

function eraseValueInput(){
  form.querySelector(".movie-name").value = "";
  form.querySelector(".movie-describe").value = "";
  form.querySelector(".movie-image").value = "";
  form.querySelector(".movie-release").value = "";
  form.querySelector(".movie-rating").value = "";
}

let optionsSort = document.querySelector(".movies .options-sort");

optionsSort.onclick = function(event) {
  event.target.parentNode.parentNode.querySelector("section").innerHTML = event.target.innerHTML;

  switch (event.target.innerText) {
    case "Initial":
      movies.innerHTML = localStorage.getItem("movies");
    break;

    case "Nume":
      sortByName(".name-year-rating h3");
    break;

    case "An":
      sortByName(".name-year-rating h3 span");
    break;

    case "Rating":
      sortByName(".name-year-rating p");
    break;

    case "Data adaugarii":

    break;
    default:

  }
}

function sortByName(key) {
  let arrOfNames = [];
  let movie =  movies.querySelectorAll("li");

  // creeare array cu Titlul fimului
  for(let i=0; i<movie.length; i++){
    arrOfNames[i] = movie[i].querySelector(key).innerText;
  }

// Sortarea array cu Titlu
  for(let i=0;i<arrOfNames.length-1;i++){
    for(let j=i+1; j<arrOfNames.length; j++){
      if(arrOfNames[i] > arrOfNames[j]){
        let remainder = arrOfNames[j];
        arrOfNames[j] = arrOfNames[i];
        arrOfNames[i] = remainder;
      }
    }
  }

// Introducerea continului din "li" pe pozitia din ARRAY
  for(let i=0; i<arrOfNames.length;i++){
    for(let j=0;j<movie.length; j++){
      if(arrOfNames[i] == movie[j].querySelector(key).innerText){
        arrOfNames[i] = movie[j].innerHTML;
      }
    }
  }

  // Modificarea li-urilor dupa continutul array-ului SORTAT

  for(let i=0;i<movie.length;i++){
    movie[i].innerHTML = arrOfNames[i];
  }

}

function checkTime() {
  let movie =  movies.querySelectorAll("li");
  for(let i=0;i<movie.length;i++){
    if(timeOf[i].hours < new Date().getHours) {
      movie[i].querySelector(".time").innerHTML = `Adaugat acum ${new Date().getHours - timeOf[i].hours}`;
    }

    if(timeOf[i].minutes < new Date().getMinutes) {
      movie[i].querySelector(".time").innerHTML = `Adaugat acum ${new Date().getMinutes - timeOf[i].minutes}`;
    }

  }
}

setInterval(function(){
  checkTime();
}, 30000);


}

window.onload = load;
