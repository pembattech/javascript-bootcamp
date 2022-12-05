// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement  (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 
// GOOD LUCK

// tip 15% if bill value between 50 - 300 else the tip is 20%
// Convert to arror fuction


let tip1 = 15;
let tip2 = 20;
let bill_amount1 = 275;
let bill_amount2 = 40;

// data 1
// bill_amount1 >= 50 && bill_amount1 <= 300 ? console.log(`The bill was ${bill_amount1}, the tip was ${tip1/100}`) : console.log(`The bill was ${bill_amount1}, the tip was ${tip2/100}`)

// data 2
// bill_amount2 >= 50 && bill_amount2 <= 300 ? console.log(`The bill was ${bill_amount2}, the tip was ${tip1/100}`) : console.log(`The bill was ${bill_amount2}, the tip was ${tip2/100}`)



let tipCalc = (bill_amount1) => {
    bill_amount1 >= 50 && bill_amount1 <= 300
    console.log(`The bill was ${bill_amount1}, the tip was ${tip1/100}`)
}

tipCalc(375)