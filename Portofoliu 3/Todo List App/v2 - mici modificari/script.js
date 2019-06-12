window.setTimeout(function (){

var todo = ["Treci la munca, putoare nenorocita !!!!!!"];

var request = prompt("What would you like to do");

while(request !== "quit") {

    // while( request !== "new" && request !== "delete" && request !== "list" ){
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

        todo.forEach(function(listTodo){
            var indice = todo.indexOf(listTodo);
            console.log(indice + ":  " + listTodo);
        })

        console.log("****************");
    }
}

}, 100)


