window.setTimeout(function (){

    var todo = ["Treci la munca, putoare nenorocita !!!!!!"];
    
    var request = prompt("What would you like to do");
    
    while(request !== "quit") {
    
        // while( request !== "new" && request !== "delete" && request !== "list" && request !== "quit" ){
        //     alert("<-- Lista ta de Preferinte.  Incearca sa scrii unul dintre cuvintele CHEIE din stanga");
        //     request = prompt("What would you like to do");
        // }
    
        if(request === "new"){
    
            newTodo();
        }
    
        if(request ===  "delete"){
    
            deleteTodo();
        }
    
        if(request === "list"){
    
            listYourTodo();
        }
    
        request = prompt("What would you like to do");
    }
    
    console.log("You quit the App");
    
    function newTodo(){
        request = prompt("Enter new todo");
        todo.push(request);
        console.log("You added to list --> " + request);
    
    }
    
    function deleteTodo(){
        request = Number(prompt("Enter index of todo to delete"));
        console.log("You have deleted --> " + todo[request]);
        todo.splice(request, 1);
    }
    
    function listYourTodo(){
        if(todo.length === 0){
    
            console.log("/////////////////////");
            console.log("You have an Empty Todo");
            console.log("/////////////////////");
    
        } else {
    
            console.log("****************");

            // Varianta cu myForEach **

            myForEach(todo, function(listTodo){
                var indice = todo.indexOf(listTodo);
                console.log(indice + ":  " + listTodo);
            })

            // Varianta cu Array . PROTOTYPE !!!!!!!!!!!!!!!!!!!!!!! ************** (1)

            // Array.prototype.myForEach = function (func){
            //     for(var i=0; i<this.length; i++){
            //         func(this[i]);
            //     }
            // }

            // todo.myForEach(function(listTodo){
            //     var indice = todo.indexOf(listTodo);
            //     console.log(indice + ":  " + listTodo);
            // });


    
            console.log("****************");
        }
    }

    // Varianta cu myForEach **

    function myForEach(arr, func){
        for(var i=0; i<arr.length; i++){
            func(arr[i]);
        }
    }

    // Varianta cu Array . PROTOTYPE !!!!!!!!!!!!!!!!!!!!!!! ************** 
    // Acesta nu merge scos in afara... trebuie neaparat sa respecte ordinea cum este prezentat la (1)
    Array.prototype.myForEach = function (func){
        for(var i=0; i<this.length; i++){
            func(this[i]);
        }
    }













    // var str = ["Rapid", "Dinamo" , "Steaua"];

    // function myForEach(arr, func){
    //     for(var i=0; i< arr.length; i++){
    //         func(arr[i]);
    //     }
    // }

    // myForEach(str, function(echipa){
    //     if(echipa === "Rapid" ){
    //         alert("Fortzaaaaa " + echipa)
    //     }
    //     if(echipa === "Dinamo" ){
    //         alert("Fortzaaaaa " + echipa)
    //     }

    //     if(echipa === "Steaua" ){
    //         console.log(echipa + " ->> Serios... te mai si miri de ce nu te baga nimeni in seama =))))")
    //     }
        
    // })

    // var crazyPeople =["Nacho" , "Nacho the Boneless"];
    // Array.prototype.myForEach = function(func){
    //     for(var i=0; i<this.length; i++){
    //         func(this[i]);
    //     }
    // }

    // crazyPeople.myForEach(function(friends){
    //     console.log(friends + " is THE Best !!!!!!!!!!!!");
    // })

    
    }, 500)