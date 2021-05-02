/*
Homework 5: Switch Statements
Name: Diardano Raihan
Details:

Create a function called "timeAdder" that can add two time values together. 
For example, it should be able to add 25 hours and 3 days together. 

label1 and label2 should accept any of the following strings: 
"seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
*/

const timeAdder = (value1, label1, value2=1, label2=0) => {
    const MINUTE_TO_SECOND = 60;
    const HOUR_TO_SECOND = 3600;
    const DAY_TO_SECOND = 86400;


    let valueFlag1 = false;
    let valueFlag2 = false;
    let labelFlag1 = false;
    let labelFlag2 = false;

    let time1 = 0;
    let time2 = 0;
    let time = 0;
    
    let value3;
    let label3;

    // The first value and label operations
    if (value1>0){
        if (value1 !==1){
            switch(label1){
                case "seconds":
                    time1 = value1;
                    break;
                case "minutes":
                    time1 = value1*60;
                    break;
                case "hours":
                    time1 = value1*60*60;
                    break;
                case "days":
                    time1 = value1*60*60*24;
                    break;
                default:
                    labelFlag1 = true;
                    break;
            }
        }
        else{
            switch(label1){
                case "second":
                    time1 = value1;
                    break;
                case "minute":
                    time1 = value1*60;
                    break;
                case "hour":
                    time1 = value1*60*60;
                    break;
                case "day":
                    time1 = value1*60*60*24;
                    break;
                default:
                    labelFlag1 = true;
                    break;
            }
        }
    }

    else{
        valueFlag1 = true;
    }

    // The second value and label operations
    if (value2>0){
        if (value2 !==1){
            switch(label2){
                case "seconds":
                    time2 = value2;
                    break;
                case "minutes":
                    time2 = value2*60;
                    break;
                case "hours":
                    time2 = value2*60*60;
                    break;
                case "days":
                    time2 = value2*60*60*24;
                    break;
                default:
                    labelFlag2 = true;
                    break;
            }
        }
        else{
            switch(label2){
                case "second":
                    time2 = value2;
                    break;
                case "minute":
                    time2 = value2*60;
                    break;
                case "hour":
                    time2 = value2*60*60;
                    break;
                case "day":
                    time2 = value2*60*60*24;
                    break;
                default:
                    labelFlag2 = true;
                    break;
            }
        }
    }
    else{
        valueFlag2 = true;
    }

    // Error Handling
    const errorHandling = (flag1, flag2, flag3, flag4) => {

        // Handle the value error(s)
        if (flag1 && flag3){
            console.log("Both values should be positive integers.")
        }
        else if (flag1){
            console.log("The first value should be positive integer.")
        }
        else if (flag3){
            console.log("The second value should be positive integer.")
        }
    
        // Handle the label error(s)
        if (flag2 && flag4){
            console.log("Both labels are not correct.")
        }
        else if (flag2){
            console.log("The first label is not correct.")
        }
        else if (flag4){
            console.log("The second label is not correct.")
        }
    }

    // Final process of time addition
    if (valueFlag1 || valueFlag2 || labelFlag1 || labelFlag2){

        errorHandling(valueFlag1, labelFlag1, valueFlag2, labelFlag2);

    }
    else{

        time = time1+time2;
        value3 = time;
        label3 = "seconds";

        // value3 = 90000 seconds;
        // For the time more than 60 seconds
        if (time >= MINUTE_TO_SECOND){

            if(time % MINUTE_TO_SECOND ===0){
                value3 = time/MINUTE_TO_SECOND;
                if (value3!=1){
                    label3 = "minutes";
                }
                else{
                    label3 = "minute";
                }
            }

            // For the time more than 1 hour = 60 minutes = 3600 seconds
            if (time >= HOUR_TO_SECOND){
                
                if(time % HOUR_TO_SECOND ===0){
                    value3 = time/HOUR_TO_SECOND;
                    if (value3!=1){
                        label3 = "hours";
                    }
                    else{
                        label3 = "hour";
                    }
                }

                // For the time more than 1 day = 24 hours
                if (time >= DAY_TO_SECOND){

                    if(time % DAY_TO_SECOND ===0){
                        value3 = time/DAY_TO_SECOND;
                        if (value3!=1){
                            label3 = "days";
                        }
                        else{
                            label3 = "day";
                        }
                    }
    
                }
            }
        }
        const timeAddition = [value3, label3];
        return console.log(timeAddition);
    }
}

// Successful 
timeAdder(1,"minute",3,"minutes"); // [ 4, 'minutes' ]
timeAdder(5,"days",25,"hours"); // [ 145, 'hours' ]
timeAdder(1,"minute",240,"seconds"); // [ 5, 'minutes' ]
timeAdder(60,"minutes",1,"minute"); // [ 61, 'minutes' ]
timeAdder(120,"minutes",1,"hour"); // [ 3, 'hours' ]
timeAdder(23,"hours",1,"second"); // [ 82801, 'seconds' ]
timeAdder(1,"second",3,"seconds"); // [ 4, 'seconds' ]
timeAdder(1,"day",3,"days"); // [ 4, 'days' ]
timeAdder(20,"hours",4,"hours"); // [ 1, 'day' ]
timeAdder(23,"hours",2,"hours"); // [ 25, 'hours' ]


// Unsuccessful
timeAdder(5,"hour",5,"minutes"); // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes"); // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes"); // This is invalid because the first argument is the wrong type





