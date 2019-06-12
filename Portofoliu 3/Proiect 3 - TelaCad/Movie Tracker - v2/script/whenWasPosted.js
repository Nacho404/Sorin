
const dateList = [
    {
        year: 2019,
        month: 4,
        day: 21 ,
        hours: 15,
        minutes: 6
    },

    {
        year: 2016,
        month: 1,
        day: 9 ,
        hours: 2,
        minutes: 56
    },

    {
        year: 2016,
        month: 12,
        day: 22,
        hours: 19,
        minutes: 32
    }
];



function checkTime(){
    
    let itemsList = Array.from(document.querySelectorAll("#original-list li"));

    for(let i=0;i<itemsList.length; i++){
        if(dateList[i].year == new Date().getFullYear()){

            if(dateList[i].month == new Date().getMonth()+1){

                if(dateList[i].day == new Date().getDate()) {

                    if(dateList[i].hours == new Date().getHours()) {

                        if(dateList[i].minutes == new Date().getMinutes()){

                            itemsList[i].querySelector(".time").innerHTML = "<span class='now'> chiar acum </span>";

                        } else {
                            itemsList[i].querySelector(".time").innerHTML = "acum <span class='minutes'>" + (new Date().getMinutes() - dateList[i].minutes) + "</span> minute";
                        }

                        // Else-ul Hours
                    } else {

                        // Verificare minutes
                        if(dateList[i].minutes - new Date().getMinutes() > 0 ) {

                            if(new Date().getHours() - dateList[i].hours == 1){
                                itemsList[i].querySelector(".time").innerHTML = "acum <span class='minutes'>" + ((60-dateList[i].minutes) + new Date().getMinutes()) + "</span> minute";
                            } else if(new Date().getHours() - dateList[i].hours > 1) {
                                let dif = new Date().getHours() - dateList[i].hours-1;
                                itemsList[i].querySelector(".time").innerHTML = "acum <span class='hours'>" + (dif) + "</span> ore si <span class='minutes'>" + ((60-dateList[i].minutes) + new Date().getMinutes()) + "</span> minute";
                            }
                        
                        } else if(dateList[i].minutes - new Date().getMinutes() < 0 ) {
                            itemsList[i].querySelector(".time").innerHTML = "acum <span class='hours'>" + (new Date().getHours() - dateList[i].hours) + "</span> ore si <span class='minutes'>" + (new Date().getMinutes()-dateList[i].minutes) + "</span> minute";
                        } else if(dateList[i].minutes - new Date().getMinutes() == 0) {
                            itemsList[i].querySelector(".time").innerHTML = "acum <span class='hours'>" + (new Date().getHours() - dateList[i].hours) + "</span> ore";
                        }
                    }

                    // Else-ul Day
                } else {

                    // Verificare hours
                    if(dateList[i].hours - new Date().getHours() > 0 ) {

                        if(new Date().getDate() - dateList[i].day == 1){
                            itemsList[i].querySelector(".time").innerHTML = "acum <span class='hours'>" + ((24-dateList[i].hours) + new Date().getHours()) + "</span> ore";
                        } else if(new Date().getDate() - dateList[i].day > 1) {
                            let dif = new Date().getDate() - dateList[i].day-1;
                            itemsList[i].querySelector(".time").innerHTML = "acum <span class='days'>" + (dif) + "</span> zile si <span class='hours'>" + ((24-dateList[i].hours) + new Date().getHours()) + "</span> ore";
                        }
                    
                    } else if(dateList[i].hours - new Date().getHours() < 0 ) {
                        itemsList[i].querySelector(".time").innerHTML = "acum <span class='days'>" + (new Date().getDate() - dateList[i].day) + "</span> zile si <span class='hours'>" + (new Date().getHours()-dateList[i].hours) + "</span> ore";
                    } else if(dateList[i].hours - new Date().getHours() == 0) {
                        itemsList[i].querySelector(".time").innerHTML = "acum <span class='days'>" + (new Date().getDate() - dateList[i].day) + "</span> zile";
                    }

                }

                // Else-ul Month
            } else {

                // Verificare day
                if(dateList[i].day - new Date().getDate() > 0 ) {

                    if((new Date().getMonth()+1) - dateList[i].month == 1){
                        itemsList[i].querySelector(".time").innerHTML = "acum <span class='days'>" + (new Date().getDate() + (lastday(new Date().getFullYear(), new Date().getMonth()) - dateList[i].day)) + "</span> zile";
                    } else if((new Date().getMonth()+1) - dateList[i].month > 1) {
                        let dif = new Date().getMonth() - dateList[i].month;
                        itemsList[i].querySelector(".time").innerHTML = "acum <span class='months'>" + (dif) + "</span> luni si <span class='days'>" + (new Date().getDate() + (lastday(new Date().getFullYear(), dateList[i].month+dif-1) - dateList[i].day)) + "</span> zile";
                    }
                
                } else if(dateList[i].day - new Date().getDate() < 0 ) {
                    itemsList[i].querySelector(".time").innerHTML = "acum <span class='months'>" + ((new Date().getMonth()+1) - dateList[i].month) + "</span> luni si <span class='days'>" + (new Date().getDate()-dateList[i].day) + "</span> zile";
                } else if(dateList[i].day - new Date().getDate() == 0) {
                    itemsList[i].querySelector(".time").innerHTML = "acum <span class='months'>" + ((new Date().getMonth()+1) - dateList[i].month) + "</span> luni";    
                }

            }

            // Else-ul Years
        } else {

            // Verificare luna
            if((dateList[i].month - (new Date().getMonth()+1)) > 0 ) {

                if(new Date().getFullYear() - dateList[i].year == 1){
                    itemsList[i].querySelector(".time").innerHTML = "acum <span class='months'>" + ((12-dateList[i].month) - (new Date().getMonth()+1)) + "</span> luni";
                } else if(new Date().getFullYear() - dateList[i].year > 1) {
                    let dif = new Date().getFullYear() - dateList[i].year-1;
                    itemsList[i].querySelector(".time").innerHTML = "acum <span class='years'>" + (dif) + "</span> ani si <span class='months'>" + ((12-dateList[i].month) + (new Date().getMonth()+1)) + "</span> luni";
                }
            
            } else if((dateList[i].month - (new Date().getMonth()+1)) < 0 ) {
                itemsList[i].querySelector(".time").innerHTML = "acum <span class='years'>" + (new Date().getFullYear() - dateList[i].year) + "</span> ani si <span class='months'>" + (new Date().getMonth()+1 - dateList[i].month) + "</span> luni";
            } else if((dateList[i].month - (new Date().getMonth()+1)) == 0) {
                itemsList[i].querySelector(".time").innerHTML = "acum <span class='years'>" + (new Date().getFullYear() - dateList[i].year) + "</span> ani";    
            }

        }
    }
}

let lastday = function(y,m){
    return  new Date(y, m +1, 0).getDate();
}


checkTime();

setInterval(()=> {
    checkTime();
}, 60000)


