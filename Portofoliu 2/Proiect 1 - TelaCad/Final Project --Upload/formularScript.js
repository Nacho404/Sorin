/*
1. Nume -> prima litera cu majuscula
2. Varsta -> intre 18 si 75
3. Telefon -> 10 cifre si sa fie separate cate 3 (prin spatii) si la urma 4
              ex. 075 123 1234
4. Email -> sa fie un mail valid
5. Oras -> selecteaza intre 5 orase
6. Text Read-only -> Mesaj diferit pentru fiecare oras
7. Cautare -> valoare predefinita "Cauta"
*/

// 1.
function upperCaseFirstLetter () {
    let name = document.getElementById("name");
   if( name.value[0] <= "z" && name.value[0] >= "a" ) {
    name.value = name.value.replace(name.value[0], name.value[0].toUpperCase());
   }
}

// 2.
function ageInterval () {
    let age = document.getElementById("age");
   if (age.value < 18 || age.value > 75) {
        age.value = 18;
    }
}

// 3.
let count=0;
function spacedPhoneNumber () {
    let phoneNumber = document.getElementById("phoneNumber");
    if(phoneNumber.value == "") {
        count=0;
    }
    for(let i=0; i<phoneNumber.value.length; i++){
        if(isNaN(phoneNumber.value[i])==true){
            phoneNumber.value = phoneNumber.value.replace(phoneNumber.value[i], "");
        }

        if(i==2 && count == 0) {
            phoneNumber.value += " ";
            count=1;  
        } else  if(i==7 && count == 1) {
            phoneNumber.value += " ";
            count=2;
        }
    }
}

// 4.

function validEmail () {
    let email = document.getElementById("email");
    
    // email.setAttribute("required","required");
    document.getElementById("phoneNumber").setAttribute("required","required");
    document.getElementById("age").setAttribute("required","required");
    document.getElementById("name").setAttribute("required","required");

    if(email.value.search("@") == -1) {
        alert("Email-ul tau nu contine \"@\"");
    } else if(email.value.search("yahoo") == -1) {
        alert("Email-ul tau nu contine \"yahoo\"");
    } else if(email.value.search(".com") == -1) {
        alert("Email-ul tau nu contine \".com\"");
    }
}

// 6.

function readOnly () {
    if(document.getElementById("city").value == "Bucuresti"){
        document.getElementById("read-only").innerHTML = "Bucuresti, este orasul tuturor posibilitatilor";
    }

    if(document.getElementById("city").value == "Constanta"){
        document.getElementById("read-only").innerHTML = "Constanta --> Hai la mare !!!";
    }

    if(document.getElementById("city").value == "Brasov"){
        document.getElementById("read-only").innerHTML = "Brasov --> Hai la munte !!!";
    }

    if(document.getElementById("city").value == "Timisoara"){
        document.getElementById("read-only").innerHTML = "Timisoara --> Intotdeauna vei avea timp de o bere cu prietenii !";
    }

    if(document.getElementById("city").value == "Ploiesti"){
        document.getElementById("read-only").innerHTML = "Ploiesti --> S-a anuntat vreme 'ploioasa'";
    }

}

// 7.
document.getElementById("search").setAttribute("value", "Cauta");

