// There are two major types of datatypes in JS. They are:
/* 
    1. Primitive Datatypes => Number, String, Boolean, undefined, null, Symbol, BigInt
    2. Non-Primitive Datatypes / Reference Type=> Object, Array 
*/


// Number
let y = 9;

// String
let e = 'apple'
let c = "apple"
let b = `apple
            mango`


// Boolean
let isHoliday = false

// undefined
let z;
console.log(typeof z)

// null
let a = null

// Symbol --> It says both the element is unique even though the string is same.
let firstValue = Symbol('Ram')
let secondValue = Symbol('Ram')
console.log(firstValue === secondValue)

// BigInt
let num = 1n // n denotes that it is BigInt datatype

// 2. Non-Primitive Datatypes / Reference Type

// i) Object
let myObj = { firstName: 'Pemba', age: 23, }
console.log(myObj.firstName);
console.log(myObj.age);

// ii) Array
let arr1 = ["string", 99, ["another array", 232], null, undefined, Symbol('string')]

