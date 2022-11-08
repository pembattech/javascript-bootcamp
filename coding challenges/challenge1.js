/*
Create an arrow function which returns whether the Triton College is opened or not based on the argument passed. 
[College Time : 6 am to 10am, Holiday on Wednesday and Public Holiday]Required to use : - Arrow function, 
Logical Operators and Ternary Operator. 
*/

let isTritonCollegeOpen = (currentTime, isWednesday, isHoliday) => {
    currentTime >= 6 && currentTime <= 10 && !isWednesday && !isHoliday ? console.log("Triton college is open.") : console.log("Triton college is close")
}
isTritonCollegeOpen(7, false, false)