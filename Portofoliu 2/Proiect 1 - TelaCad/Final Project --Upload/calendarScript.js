
let countDays =0, countOverFlow =0 , countWeekends =0, emptyLi=0;
let countOfMonths = 0;
let month = ["IANUARIE", "FEBRUARIE", "MARTIE", "APRILIE", "MAI", "IUNIE", "IULIE", "AUGUST", "SEPTEMBRIE", "OCTIOMBRIE", "NOIEMBRIE", "DECEMBRIE"];

function writeFirstMonth () {
    document.querySelector(".calendar-image").innerHTML = "<div class=\"prev\" onclick=\"prevMonth()\">&#10094;</div>" + "<h1>" + month[0] + "<br>2019</h1> <div class=\"next\" onclick=\"nextMonth()\">&#10095;</div>";

    document.querySelector(".calendar-info .weekdays").innerHTML = " <li>L</li> <li>Ma</li> <li>Mi</li> <li>J</li> <li>V</li> <li class=\"weekends\">S</li> <li class=\"weekends\">D</li> "

    document.querySelector(".calendar-info .days").innerHTML = "<li></li>";
    countDays ++;
    countWeekends ++;
    for(let i=1; i<=31; i++) {
        if(countWeekends == 5 || countWeekends == 6) {
            document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends\">" + i + "</li>";
            countDays ++;
            if(countWeekends == 6) { countWeekends = 0; } else { countWeekends ++; }
            
        } else {
            document.querySelector(".calendar-info .days").innerHTML += "<li>" + i + "</li>";
            countDays ++;
            countWeekends ++;
        }
    }

    for(let i=countDays; i<35; i++) {
        document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
        countOverFlow ++;
    }
    countOfMonths++;

    document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1549187052-e7a5f822fc1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)";
}

writeFirstMonth();




let daysOfMonth;
function writeActualMonth () {
    for(let i=1;i <month.length; i++){
        switch(i) {
            case 1:
            daysOfMonth = 28;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1486684228390-da5df1e46f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)";
            break;
            case 2:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://assets.perfecte.ro/assets/perfecte/2019/02/28/image_galleries/51497/traditii-si-obiceiuri-de-1-martie_1.jpg)";
            break;
            case 3:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517438092123-7a01c38aeef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)";
            break;
            case 4:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://verushkmind.files.wordpress.com/2013/12/most-beautiful-wisteria-tree-in-the-world.jpg)";
            break;
            case 5:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517592721893-0c2310f24ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80)";
            break;
            case 6:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80)";
            break;
            case 7:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517170657990-68eb9d70899a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
            case 8:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1493408878302-bb48127906bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
            case 9:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1477516561410-f0b5dd8319e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)";
            document.querySelector(".calendar-image h1").style.color = "white";
            break;
            case 10:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1550076940-33b042bf05b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
            case 11:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1543614992-e160ec1d03fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
        }
    
        countDays =0;
        countWeekends =0;
        emptyLi =0;
    
        document.querySelector(".calendar-image").innerHTML = "<div class=\"prev\" onclick=\"prevMonth()\">&#10094;</div>" + "<h1>" + month[i] + "<br>2019</h1> <div class=\"next\" onclick=\"nextMonth()\">&#10095;</div>";
        if(countOverFlow == 0) {
            document.querySelector(".calendar-info .days").innerHTML = "";
        } else {
            document.querySelector(".calendar-info .days").innerHTML = "<li></li>";
            emptyLi++;
            countDays ++;
            countWeekends ++;
            for(let j=2; j<=7-countOverFlow; j++){
                document.querySelector(".calendar-info .days").innerHTML += "<li></li>";
                emptyLi++;
                countDays ++;
                countWeekends ++;
            }
            countOverFlow =0;
        }

        
        for(let k=1; k<=daysOfMonth; k++) {
            if(countWeekends == 5 || countWeekends == 6) {
                if( new Date().getMonth() == i && new Date().getDay() == k){
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends current-day\">" + k + "</li>";
                    countDays ++;
                } else {
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends\">" + k + "</li>";
                    countDays ++;
                }
                
                if(countWeekends == 6) { countWeekends = 0; } else { countWeekends ++; }
                
            } else {
                if( new Date().getMonth() == i && new Date().getDay() == k){
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"current-day\">" + k + "</li>";
                    countDays ++;
                    countWeekends ++;
                } else {
                    document.querySelector(".calendar-info .days").innerHTML += "<li>" + k + "</li>";
                    countDays ++;
                    countWeekends ++;
                }
                
            }
        }

        if(emptyLi == 6 && (daysOfMonth == 30 || daysOfMonth == 31)) {
            for(let l=countDays; l<42; l++) {
                document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
                countOverFlow ++;
            }
        } else {
            for(let l=countDays; l<35; l++) {
                document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
                countOverFlow ++;
            }
        }
        countOfMonths++;
        if(new Date().getMonth() == i) {
            return;
        }
        
    }

    
}

if(new Date().getMonth() != 0) {
    writeActualMonth();
}


let countButtonNext=0;

let buttonNext = document.querySelector(".calendar-image .next");

function nextMonth (){
    
    if(countOfMonths<12){
           
        switch(countOfMonths) {
            case 1:
            daysOfMonth = 28;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1486684228390-da5df1e46f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)";
            break;
            case 2:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://assets.perfecte.ro/assets/perfecte/2019/02/28/image_galleries/51497/traditii-si-obiceiuri-de-1-martie_1.jpg)";
            break;
            case 3:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517438092123-7a01c38aeef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)";
            break;
            case 4:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://verushkmind.files.wordpress.com/2013/12/most-beautiful-wisteria-tree-in-the-world.jpg)";
            break;
            case 5:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517592721893-0c2310f24ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80)";
            break;
            case 6:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80)";
            break;
            case 7:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517170657990-68eb9d70899a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
            case 8:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1493408878302-bb48127906bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
            case 9:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1477516561410-f0b5dd8319e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)";
            document.querySelector(".calendar-image h1").style.color = "white";
            break;
            case 10:
            daysOfMonth = 30;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1550076940-33b042bf05b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
            case 11:
            daysOfMonth = 31;
            document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1543614992-e160ec1d03fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
            break;
        }
    
        countDays =0;
        countWeekends =0;
        emptyLi =0;
    
        document.querySelector(".calendar-image").innerHTML = "<div class=\"prev\" onclick=\"prevMonth()\">&#10094;</div>" + "<h1>" + month[countOfMonths] + "<br>2019</h1> <div class=\"next\" onclick=\"nextMonth()\">&#10095;</div>";
        if(countOverFlow == 0) {
            document.querySelector(".calendar-info .days").innerHTML = "";
        } else {
            document.querySelector(".calendar-info .days").innerHTML = "<li></li>";
            emptyLi++;
            countDays ++;
            countWeekends ++;
            for(let j=2; j<=7-countOverFlow; j++){
                document.querySelector(".calendar-info .days").innerHTML += "<li></li>";
                emptyLi++;
                countDays ++;
                countWeekends ++;
            }
            countOverFlow =0;
        }
        
        for(let k=1; k<=daysOfMonth; k++) {
            if(countWeekends == 5 || countWeekends == 6) {
                if( new Date().getMonth() == countOfMonths && new Date().getDay() == k){
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends current-day\">" + k + "</li>";
                    countDays ++;
                } else {
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends\">" + k + "</li>";
                    countDays ++;
                }
 
                if(countWeekends == 6) { countWeekends = 0; } else { countWeekends ++; }
            } else if( new Date().getMonth() == countOfMonths && new Date().getDay() == k){
                document.querySelector(".calendar-info .days").innerHTML += "<li class=\"current-day\">" + k + "</li>";
                countDays ++;
                countWeekends ++;
                } else {
                    document.querySelector(".calendar-info .days").innerHTML += "<li>" + k + "</li>";
                    countDays ++;
                    countWeekends ++;
                }
        }

        if(emptyLi == 6 && (daysOfMonth == 30 || daysOfMonth == 31)) {
            for(let l=countDays; l<42; l++) {
                document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
                countOverFlow ++;
            }
        } else {
            for(let l=countDays; l<35; l++) {
                document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
                countOverFlow ++;
            }
        }
  
        countButtonNext=1;
        countOfMonths++;
        console.log(countOfMonths);
    }
       
}

function prevMonth () {
    
    if(countOfMonths>2){
        console.log(countOfMonths);
        countDays =0, countOverFlow =0 , countWeekends =0, emptyLi=0;
        let x = countOfMonths-1;
        
        countOfMonths=0;
        
        writeFirstMonth();
        for(let i=1;i <month.length; i++){
            switch(i) {
                case 1:
                daysOfMonth = 28;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1486684228390-da5df1e46f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)";
                break;
                case 2:
                daysOfMonth = 31;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://assets.perfecte.ro/assets/perfecte/2019/02/28/image_galleries/51497/traditii-si-obiceiuri-de-1-martie_1.jpg)";
                break;
                case 3:
                daysOfMonth = 30;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517438092123-7a01c38aeef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)";
                break;
                case 4:
                daysOfMonth = 31;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://verushkmind.files.wordpress.com/2013/12/most-beautiful-wisteria-tree-in-the-world.jpg)";
                break;
                case 5:
                daysOfMonth = 30;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517592721893-0c2310f24ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80)";
                break;
                case 6:
                daysOfMonth = 31;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80)";
                break;
                case 7:
                daysOfMonth = 31;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1517170657990-68eb9d70899a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
                break;
                case 8:
                daysOfMonth = 30;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1493408878302-bb48127906bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
                break;
                case 9:
                daysOfMonth = 31;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1477516561410-f0b5dd8319e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)";
                document.querySelector(".calendar-image h1").style.color = "white";
                break;
                case 10:
                daysOfMonth = 30;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1550076940-33b042bf05b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
                break;
                case 11:
                daysOfMonth = 31;
                document.querySelector(".calendar-image").style.backgroundImage = "url(https://images.unsplash.com/photo-1543614992-e160ec1d03fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)";
                break;
            }
        
            countDays =0;
            countWeekends =0;
            emptyLi =0;
        
            document.querySelector(".calendar-image").innerHTML = "<div class=\"prev\" onclick=\"prevMonth()\">&#10094;</div>" + "<h1>" + month[i] + "<br>2019</h1> <div class=\"next\" onclick=\"nextMonth()\">&#10095;</div>";
            if(countOverFlow == 0) {
                document.querySelector(".calendar-info .days").innerHTML = "";
            } else {
                document.querySelector(".calendar-info .days").innerHTML = "<li></li>";
                emptyLi++;
                countDays ++;
                countWeekends ++;
                for(let j=2; j<=7-countOverFlow; j++){
                    document.querySelector(".calendar-info .days").innerHTML += "<li></li>";
                    emptyLi++;
                    countDays ++;
                    countWeekends ++;
                }
                countOverFlow =0;
            }

            
            for(let k=1; k<=daysOfMonth; k++) {
                if(countWeekends == 5 || countWeekends == 6) {
                    if( new Date().getMonth() == i && new Date().getDay() == k){
                        document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends current-day\">" + k + "</li>";
                        countDays ++;
                    } else {
                        document.querySelector(".calendar-info .days").innerHTML += "<li class=\"weekends\">" + k + "</li>";
                        countDays ++;
                    }

                    if(countWeekends == 6) { countWeekends = 0; } else { countWeekends ++; }
                    
                } else { 
                    if( new Date().getMonth() == i && new Date().getDay() == k){
                        document.querySelector(".calendar-info .days").innerHTML += "<li class=\"current-day\">" + k + "</li>";
                        countDays ++;
                        countWeekends ++;
                    } else  {
                        document.querySelector(".calendar-info .days").innerHTML += "<li>" + k + "</li>";
                        countDays ++;
                        countWeekends ++;
                    }
                }
            }

            if(emptyLi == 6 && (daysOfMonth == 30 || daysOfMonth == 31)) {
                for(let l=countDays; l<42; l++) {
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
                    countOverFlow ++;
                }
            } else {
                for(let l=countDays; l<35; l++) {
                    document.querySelector(".calendar-info .days").innerHTML += "<li class=\"overflow\">"
                    countOverFlow ++;
                }
            }
            countOfMonths++;
            console.log(countOfMonths);
            if(x-1 == i) {
                return;
            }

            
            
        }
    } else if (countOfMonths == 2) {
        countDays =0, countOverFlow =0 , countWeekends =0, emptyLi=0;
        countOfMonths=0;
        writeFirstMonth();
    } 
    
}
