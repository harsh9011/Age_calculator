const container = document.getElementById(".container");
const calculator = document.getElementById(".calculator");
const inputBox = document.getElementById(".input-box");
let result = document.getElementById("result");


//code to close the future date so user cannot enter a future date 
let user_input = document.getElementById("date");  // to get the data inside the input of date 


//The toISOString() method converts the Date object to a string in ISO 8601 format, which is:
//YYYY-MM-DDTHH


//The split('T') method splits the string into an array at the character 'T', which separates the date from the time.
//eg :-  ["2024-09-26", "13:45:30.000Z"]

//The [0] accesses the first element of the array, which is the date part ("2024-09-26").

//the max attribute restricts the maximum date that can be selected.



//problenm solved
user_input.ariaValueMax = new Date().toISOString().split("T")[0];  //new

//  date.setAttribute("max", user_input);

 ///////----------------------------------------




//function to calculate the user age 
function calculate_age()
{
  //  JavaScript Date Objects let us work with dates:
    let birthdate = new Date(user_input.value);// when we select any date in input box it will be saved in birthdate
//this is for the date that user put and we stored it in different variables 
//we +1 moth because the month satrt form  0;

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();
  

    // now to get the current date 
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    

    //to get difference between birthdate and the current date
    let d3, m3, y3;
    //year difference 
    y3 = y2 - y1;


    //month difference 
    if(m2 >= m1)
    {
        m3 = m2 - m1;
    }

    else 
    {
        y3--;
        m3 = 12 + m2 - m1;
    }


    //day difference 
    if(d2 >= d1)
    {
        d3 = d2 - d1;
    }
    else
    {
        m3--;
        d3 = getDaysinMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0 )
    {
        m3 = 11;
        y3--;

    }

 console.log(`Age: ${y3} years, ${m3} months  and ${d3} days.`);

 result.innerHTML = `Age: <span>${y3}</span> years,<span> ${m3}</span> months  and <span>${d3}</span> days.`
   
   
  
}





function getDaysinMonth(year, month)
{
    return new Date(year, month, 0).getDate();
}









