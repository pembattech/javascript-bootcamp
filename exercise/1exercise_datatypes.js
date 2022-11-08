
// EXERCISE OF NON-PRIMITIVE DATATYPE

/* 1. "OBJECT DATATYPE" */
/* i) In non-primitive datatype the output will be the same because 
    anotherInfo takes myInfo address value instead of value.*/
let myInfo = {
    class: "BCA",
    sem: 70
}
let anotherInfo = myInfo // import 'myInfo' object.
anotherInfo.sem = 3

console.log(myInfo)
console.log(anotherInfo)

/* i) In non-primitive datatype the output will be the same because 
    anotherInfo takes myInfo address value instead of value.*/
// Using 'Spread Operator
let myInfo1 = {
    class: "BCA",
    sem: 70
}
let anotherInfo1 = {...myInfo} // copying 'myInfo' object's value.
anotherInfo.sem = 3

console.log(myInfo1)
console.log(anotherInfo1)

