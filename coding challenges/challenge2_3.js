/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK
*/

// Data1
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

// Data2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

    
let calBMI = (mass, height) => {
    BMI = mass / height ** 2
    return BMI
}

console.log(`Calculation of Mark's1 BMI ${(calBMI(markWeight1, markHeight1))})`)
console.log(`Calculation of Mark's2 BMI ${(calBMI(markWeight2, markHeight2))})`)
console.log(`Calculation of John's1 BMI ${(calBMI(johnWeight1, johnHeight1))})`)
console.log(`Calculation of John's2 BMI ${(calBMI(johnWeight2, johnHeight2))})\n`)


let mark1BMI = (calBMI(markWeight1, markHeight1))
let mark2BMI = (calBMI(markWeight2, markHeight2))
let john1BMI = (calBMI(johnWeight1, johnHeight1))
let john2BMI = (calBMI(johnWeight2, johnHeight2))

let markHigherBMI1 = mark1BMI > john1BMI;
let markHigherBMI2 = mark2BMI > john2BMI;
console.log(`Is Mark BMI1 ${mark1BMI} higher than John BMI1 ${john1BMI}? ${markHigherBMI1}`);
console.log(`Is Mark BMI2 ${mark2BMI} higher than John BMI2 ${john2BMI}? ${markHigherBMI2}\n`);


if (mark1BMI > john1BMI) {
    console.log(`Mark BMI ${mark1BMI} is higher than John BMI ${john1BMI}`)
}
else {
    console.log(`John BMI ${john1BMI} is higher than Mark BMI ${mark1BMI}`)
}

