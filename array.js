//array literal

// variablea_type identifier = [element , element , element ]
let age = 6
const fruits = ['apple', 'banana', 'cherry', age, 1998-2022]

console.log(fruits[4])

const cars = new Array('BMW','toyota','porsche')

//creating array using indexes 
const friends = []
friends[0] = 'gotamey'
friends[1] = 'daniel andrew'
friends[2] = 'pempa'

friends[1] = 'nitesh'  // remember non-primitive data type -- memory's address is copied from call stack

friends[9] = 'BIbas'
friends[10] = 'jayram'

console.log(friends)  //print out with array holes

let friends1 = 'babin'
let friends2 = 'nemish'

let calcAge = (birthyear) => 2022-birthyear

let array1 = ['bikash',23, undefined,null, 10n, true, friends,{id:1, address:'kathmandu'}, calcAge(1998)]

// properties
let arrayLenght = array1.length
console.log(arrayLenght)

let cities = ["KTM", "BKT", "BDP", "PKR"]
cities.push("ILM")

console.log(cities[cities.length - 1])
console.log(cities)


