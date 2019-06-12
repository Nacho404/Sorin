function write (button) {
    let buttons = document.querySelectorAll("button");
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].innerHTML == button){
            document.getElementById("input").value += buttons[i].innerHTML ;
        }
    }
}

let j = 0;
function writeIn0 () {write(0);}
function writeIn1 () {write(1);}
function writeIn2 () {write(2);}
function writeIn3 () {write(3);}
function writeIn4 () {write(4);}
function writeIn5 () {write(5);}
function writeIn6 () {write(6);}
function writeIn7 () {write(7);}
function writeIn8 () {write(8);}
function writeIn9 () {write(9);}
function writeInDiv () { if(j==0) {write("/");} j=1;}
function writeInMod () { if(j==0) {write("%");} j=1;}
function writeInAmp () { if(j==0) {write("*");} j=1;}
function writeInDec () { if(j==0) {write("-");} j=1;}
function writeInIcr () { if(j==0) {write("+");} j=1;}
function writeInDot () {write(".");}

function clearInput() {
    document.getElementById("input").value = "";
    document.querySelector("span").innerHTML = "Result: ";
    j=0;
}

function clearLetters () {
    let input = document.getElementById("input");

    for(let i=0; i<input.value.length; i++){
        if(input.value[i] >= "A" && input.value[i] <= "z"){
            input.value = input.value.replace(input.value[i], "");
        }
    }
}



function calculate () {
    let input = document.getElementById("input");
    let numberA = "", numberB = "", operator = "", count=0;
    for(let i=0; i<input.value.length; i++){
        for(let j=0; j<=9; j++){
            if( input.value[i] == j && count == 0) {
                numberA += input.value[i];
            } else if( input.value[i] == j && count == 1) {
                numberB += input.value[i];
            }
        }

        if( input.value[i] == "." && count == 0) {
            numberA += input.value[i];
        } else if( input.value[i] == "." && count == 1) {
            numberB += input.value[i];
        }

        if( input.value[i] == "+" || input.value[i] == "-" || input.value[i] == "*" || input.value[i] == "/"  || input.value[i] == "%"){
            operator = input.value[i];
            count =1;
        }
    }
    
    console.log("Numar a = " + numberA + " " + operator + " Numar b= " + numberB);
    if(operator == "+"){
        document.querySelector("span").innerHTML = "Result: " + (Number(numberA) + Number(numberB));
    } else  if(operator == "-"){
        document.querySelector("span").innerHTML = "Result: " + (Number(numberA) - Number(numberB));
    } else  if(operator == "*"){
        document.querySelector("span").innerHTML = "Result: " + (Number(numberA) * Number(numberB));
    } else  if(operator == "/"){
        document.querySelector("span").innerHTML = "Result: " + Math.floor(Number(numberA) / Number(numberB));
    } else  if(operator == "%"){
        document.querySelector("span").innerHTML = "Result: " + (Number(numberA) % Number(numberB));
    } 
  
}



