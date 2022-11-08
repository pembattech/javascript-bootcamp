//DRY principle 
// don't repect youself  (dry principle )
// the are three ways to define a function in js 

// 1. function decleration -> hoisted 
function func1() {
    // statements
}

//2. function expression 
let func2 = function () {
    // statements
}
//3. Arrow function (es6+,most important ) more focus on this 
//kiss (keep it short and simple )
let func3 = () => function () {
}

function greetings() {
    return 'Hello world ';

}
console.log(greetings());

// function expressin 
let bcy = function () {
    return 'greeting';
}
console.log(bcy());

let greeti = () => 'hello world '
console.log(greeti())


// paremeterized function 
function calcAge(birthyear) {
    return `your age is ${2022 - birthyear}`;

}
console.log(calcAge(2000));
console.log(calcAge(1999));


let age = birth => `your age is ${2022 - birth}`;
console.log(age(1995));


function arithmeticOperations(num1, num2) {
    return `additon is ${num1 + num2},subtraction is ${num1 - num2} ,multiplication is ${num1 * num2},division is ${num1 / num2}`;

}
console.log(arithmeticOperations(6, 3))


function cutPiecese(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, gauva) {
    let appplePieces = cutPiecese(apple);
    let gauvaPieces = cutPiecese(gauva);
    let juice = `juice of ${appplePieces} apple pieces and ${gauvaPieces} gauva pieces is prepared`;
    return juice
}

console.log(fruitProcessor(4, 5))
