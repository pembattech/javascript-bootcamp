// Types of Operators in JS:
/*  1. Arithmetic Operator: 
        addition operator
        substraction operator
        multiple operator
        division operator
        mod ( remainder ) operator
        increment operator
        decrement operator
        expression operator
        
    2. Logical Operator
        AND operator
        OR operator
        NOT operator
        Nullish Coalessing Operator
    3. Assignment Operator
        =
        +=
        -=
        *=
        /=
        %=
    4. Comparison (Relational) Operator
        greather than  equal to
        smaller than equal to
        greater than
        smaller than
        double equal to :: loose equal to
        triple equal to :: strict not equal to
        != :: loose not equal to
        !==  :: strict not equal to
    5. Ternary (Conditional) Operator
*/

console.log("1. ARITHEMTIC OPERATOR")
// 1. Arithmetic Operator
// addition operator +
console.log("-> ADDITION OPERATOR")
let num11 = 'apple';
let num21 = 'banana';
let sum0 = num11+num21
console.log(sum0) // ==> applebanana (concat)

console.log("-> SUBTRACTOR OPERATOR")
// subtraction operator -
let num12 = 'apple';
let num22 = 'banana';
let sum1 = num12-num22
console.log(sum1) // ==> NaN

console.log("-> MULTIPLE OPERATOR")
// multiple operator *
let num13 = 'apple';
let num23 = 'banana';
let sum2 = num13*num23
console.log(sum1) // ==> NaN

console.log("-> DIVISION OPERATOR")
// division operator /
let num14 = 'apple';
let num24 = 'banana';
let sum3 = num14/num24
console.log(sum3) // ==> NaN

console.log("-> MODULE OPERATOR")
// module operator %
let num15 = 5;
let num25 = 2;
let sum4 = num15%num25
console.log(sum4) // ==> NaN

console.log("-> INCREMENT OPERATOR")
// Increment operator
let a = 1;
console.log(a++);    // 1
console.log(a);      // 2

console.log("-> DECREMENT OPERATOR")
// Decrement
let b = 1;
console.log(b--);    // 1
console.log(b);      // 0

console.log("-> EXPONENTIATIOIN OPERATOR")
// exp **
let x = 2**9 // 2 the power 9
console.log(x)
console.log("-----------------------------------------------------------------------\n\n")


// 2. Logical Operator
console.log("2. LOGICAL OPERATOR")

// AND operator &&
console.log("-> AND OPERATOR")
console.log("--> ExampleOne")
let age = 5
if(age>1 && age <6) {
    console.log("You are in a kindergarden")
}
else {
    console.log("You're not in a kindergarden")
}
console.log("--> ExampleTwo")
let age1 = 5
age1 > 1 && age1 < 6 && console.log(`You are in kindergarden`);


// OR Operator (||)
console.log("-> OR OPERATOR")
console.log("--> ExampleOne")
let year = 5
if(year>2 && year <6) {
    console.log("You are in a kindergarden")
}
else {
    console.log("You're not in a kindergarden")
}

console.log("--> ExampleTwo")
let year1 = 5;
year1 > 1 && year1 < 6 && console.log(`You are in kindergarden`);

// NOT operator (!) :: convert true statement into false and vice verse.
console.log("-> NOT OPERATOR")
const num01 = 3;
const num02 = 2;
console.log(!(a > 0 || b > 0)); // false

// Nulllish Coalessing Operator :: it check whether the variable is null or undefined if true then it print the corressponding output.
console.log("-> NULLISH COALESSING OPERATOR")
let firstName;
firstName ?? console.log('First name is missing.'); // mostly used in form whether the element/item is empty or undefined in backend side.
console.log("-----------------------------------------------------------------------\n\n")

// 3. Assignment Operator
console.log("-> OR OPERATOR")
// =
let num03 = 3
// +=
num03 += 2
console.log(num03)
// -=
num03 -= 2
console.log(num03)
// *=
num03 *= 2
console.log(num03)
// /=
num03 /= 2
console.log(num03)
// %=
num03 %= 2
console.log(num03)
console.log("-----------------------------------------------------------------------\n\n")

// 4. Comparison (Relational) Operator
console.log("-> COMPARISON (RELATIONAL) OPERATOR")
// greather than  equal to
// smaller than equal to
// greater than
// smaller than
// double equal to :: loose equal to
// triple equal to :: strict not equal to
// != :: loose not equal to
// !==  :: strict not equal to
console.log("-----------------------------------------------------------------------\n\n")

// 5. Ternary (Conditional) Operator
console.log("-> TERNARY (CONDITION) OPERATOR")
//syntax (condition) ? <runs if condition is true> : <runs if conditioin is false>
let age2 = 16
age > 18 ? console.log('can vote') : console.log("can't vote")
console.log("-----------------------------------------------------------------------\n\n")