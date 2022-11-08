// GUESS THE OUTPUT GAME!
let num1 = '99'
let num2 = '1'
console.log(`the sum is ${num1 + num2}`) // 991 becasue of concat.
console.log(`the product is ${num1 * num2}`) // 99

// age > 18 ? console.log('can vote') : console.log("can't vote")
let time = 9;
let isWednesday = false;
let isHoliday = false;
if (time > 5 && time <= 10 && !isWednesday && !isHoliday) {
    console.log("Triton is open!")
}
else {
    console.log("Trition is close!")
}


let firstName;
firstName ?? console.log('First name is missing.');
