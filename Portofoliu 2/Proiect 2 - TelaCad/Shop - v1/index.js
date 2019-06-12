const sections = {
  menu: document.querySelector('#menu'),
  add: document.querySelector('#add'),
  products: document.querySelector('#products'),
  sorted: document.querySelector('#sorted'),
  home: document.querySelector("#home")
}


function start() {
  sections.add.querySelector('form').onsubmit = handleAddNew;
  sections.menu.onclick = changeCurrentPage;
  displayCurrentPage('/');
  sections.products.querySelector('ul').innerHTML = localStorage.getItem('products')
}


function handleAddNew(event) {
  event.preventDefault();
  const name = event.target['product-name'].value;
  const price = event.target.price.valueAsNumber;
  event.target.reset();

  fetch('https://jsonplaceholder.typicode.com/photos/' + getRandom(1, 5000))
  .then(response => response.json())
  .then(photo => {
    sections.products.querySelector('ul').innerHTML +=
      `<li><img src="${photo.url}"> ${name} - <span class="price">${price.toFixed(2)}</span>$ <a href="#">Sterge</a></li>`;
    localStorage.setItem('products', sections.products.querySelector('ul').innerHTML);
  })
}


function changeCurrentPage(event) {
  event.preventDefault();
  const href = event.target.attributes.href;
  if (href) {
    displayCurrentPage(href.value);
  }
}



function displayCurrentPage(route) {
  for (let section in sections) {
    if (section === 'menu') {
      continue;
    }
    hide(sections[section]);
  }
  switch (route) {
    case '/products':
      setPage('products');
      show(sections.add);
      show(sections.products);
      show(sections.sorted);
      hide(sections.home);
    break;

    default:
      setPage('home');
      show(sections.home);
  }
}



function show(el) {
  el.style.display = '';
}


function hide(el) {
  el.style.display = 'none';
}


function setPage(page) {
  document.body.className = page;
}


function sortProducts(sortBy, filteredBy) {
  const list = sections.sorted.querySelector('ul');
  const items = Array.from(sections.products.querySelectorAll('li'));
  
  for(let item of items) {
    item.innerHTML =  item.innerHTML.replace("<a href=\"#\">Sterge</a>", "");
  }

  items.sort(function(a, b) {
    if (sortBy === 'price') {
      return +a.querySelector('.price').innerText > +b.querySelector('.price').innerText ? 1 : -1;
    }
    return a.innerText.toLowerCase() > b.innerText.toLowerCase() ? 1 : -1;
  });

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (let item of items) {
    if (filteredBy === 'price-smaller100') {
      if (+item.querySelector('.price').innerText <= 100) {
        list.appendChild(item.cloneNode(true));
      }
    } else if(filteredBy === 'price-bigger100'){
        if (+item.querySelector('.price').innerText > 100) {
          list.appendChild(item.cloneNode(true));
        }
      } else {
        list.appendChild(item.cloneNode(true));
    }
  }

  for(let item of items) {
    item.innerHTML +="<a href=\"#\">Sterge</a>";
  }

}


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

start();


let optionsBtn = document.querySelector("#products .options .first-impact");
let sectionButtons = document.querySelector("#products .options section");

document.querySelector("body").onclick = function (event) {
  if(event.target.className == "first-impact"){
    document.querySelector("#products section").classList.toggle("productsShow");
  } else {
    document.querySelector("#products section").classList.remove("productsShow");
  }
}

sectionButtons.onclick = function (event) {
  switch(event.target.id){
    case "initial":
    optionsBtn.innerHTML = event.target.innerHTML;
    sections.products.querySelector('ul').classList.remove("ulProductsHide");
    sections.sorted.classList.remove("sortedShow");
    break;

    case "sorted-abc":
    optionsBtn.innerHTML = event.target.innerHTML;
    sections.products.querySelector('ul').classList.add("ulProductsHide");
    sections.sorted.classList.add("sortedShow");
    sortProducts('abc');
    break;

    case "sorted-price":
    optionsBtn.innerHTML = event.target.innerHTML;
    sections.products.querySelector('ul').classList.add("ulProductsHide");
    sections.sorted.classList.add("sortedShow");
    sortProducts('price');
    break;

    case "filtered-price-smaller100":
    optionsBtn.innerHTML = event.target.innerHTML;
    sections.products.querySelector('ul').classList.add("ulProductsHide");
    sections.sorted.classList.add("sortedShow");
    sortProducts('price', 'price-smaller100');
    break;

    case "filtered-price-bigger100":
    optionsBtn.innerHTML = event.target.innerHTML;
    sections.products.querySelector('ul').classList.add("ulProductsHide");
    sections.sorted.classList.add("sortedShow");
    sortProducts('price', 'price-bigger100');
    break;
    
  }

}


sections.products.querySelector("ul").onclick = function(event) {
  if(event.target.attributes.href){
    event.target.parentNode.remove();
    localStorage.setItem('products', sections.products.querySelector('ul').innerHTML);
  }
}


document.querySelector("#home a").onclick = function () {
  document.querySelector("#home img").style.opacity = 1;
  document.querySelector("#home img").classList.add("opacity");
}

document.querySelector("#home a").onmouseout = function () {
  document.querySelector("#home img").style.opacity = "";
}