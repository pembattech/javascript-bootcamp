/*
Create an arrow function which returns whether the Triton College is opened or not based on the argument passed. 
[College Time : 6 am to 10am, Holiday on Wednesday and Public Holiday]Required to use : - Arrow function, 
Logical Operators and Ternary Operator. 
*/

let time = 8;
let isWednesday = false;
let isHoliday = false;

isCollegeOpen = (time, isWednesday, isHoliday) => {
    time > 5 && time <= 10 && !isWednesday && !isHoliday ? console.log("College Open") : console.log("College Close")
}

isCollegeOpen(time, isWednesday, isHoliday)