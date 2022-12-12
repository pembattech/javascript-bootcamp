// //array literal

// // variablea_type identifier = [element , element , element ]
// let age = 6
// const fruits = ['apple', 'banana', 'cherry', age, 1998 - 2022]

// console.log(fruits[4])

// const cars = new Array('BMW', 'toyota', 'porsche')

// //creating array using indexes 
// const friends = []
// friends[0] = 'gotamey'
// friends[1] = 'daniel andrew'
// friends[2] = 'pempa'

// friends[1] = 'nitesh'  // remember non-primitive data type -- memory's address is copied from call stack

// friends[9] = 'BIbas'
// friends[10] = 'jayram'

// console.log(friends)  //print out with array holes

// let friends1 = 'babin'
// let friends2 = 'nemish'

// let calcAge = (birthyear) => 2022 - birthyear

// let array1 = ['bikash', 23, undefined, null, 10n, true, friends, { id: 1, address: 'kathmandu' }, calcAge(1998)]

// // properties
// let arrayLenght = array1.length
// console.log(arrayLenght)

// let cities = ["KTM", "BKT", "BDP", "PKR"]
// cities.push("ILM")

// console.log(cities[cities.length - 1])
// console.log(cities)


// // array map method --> it is iterative function

// let arr = [1, 2, 3, 4, 5]

// //let func1 = () => {}
// // arr. map(func1)  --> parameter vitra function call gareu vaney 'callback function'


// let mapedArray = arr.map((e, i) => e + i); // e --> element , i --> index
// console.log(mapedArray)
// let students = ['Pemba', 'chyangba', 'Babin', 'ishan', 'Manish', 'Punya', 'Motit', 'Roshan', 'Bikash']


// let studentsArray = students.map((e, i) => `Roll No: ${i + 1} ` + e);
// console.log(studentsArray)


// let data = [1, 2, 3, 4, 5]
// let dataArray = arr.map((e, i) => {
//     return `[${e * e}, ${e * e * e}]`
// })
// console.log(dataArray)

// let dataArray1 = arr.map((e, i, a) => { // a stands array
//     return e, i, a
// })
// console.log(dataArray1)

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// let evenNumber = number.filter(e => e % 2 === 0)
// const oddNumber = number.filter(e => e % 2 !== 0)
// const evenIndex = number.filter((e, i) => i % 2 === 0)
// console.log(evenIndex)
// console.log(oddNumber)
// console.log(evenNumber)

// // if salary is less than 5000 then add 1500 to it and store it in a new array
// const salaries = [15000, 6000, 45000, 67000, 20000, 34000, 1500, 58000]
// const salary = 5000;

// let filteredSalaries = salaries.filter((e) => {
//     return e < salary
// })
// let newArray = filteredSalaries.map((e) => {
//     return e + 1500
// })
// console.log(filteredSalaries)
// console.log(`the ouput is ${newArray}`)

// // SORT
// let sortedArray = salaries.sort((a, b) => b - a)
// console.log(sortedArray)

// let str = "A Quick Brown Fox, Jumps Over The Lazy Dog"
// console.log(str.split(" "))

let namex = 'shiva prasad chapagain'
let strtoarr = namex.split('');

let mappedarray = strtoarr.map(e => {
    let flag = 0
    if (e === `a` || e === `A`) {
        return flag = flag + 1;
    }
    else
        return flag
    })
    let reduce = mappedarray.reduce((acc, curr) => acc + curr, 0)
    console.log(reduce)

// count letter a using split and reduce
let reduce1 = strtoarr.reduce((acc, curr) => {
    if (curr === `a` || curr === `A`) {
            acc = acc + 1;
    }
    return acc;
}, 0)
console.log(reduce1)




