let data = [{
    id: 1, firstName: "Ram",
},
{ id: 2, firstName: "Laxman", },
{ id: 3, firstName: "Sita", },
{ id: 4, firstName: "Hari", }
]

// Adding new key and value
let maapedArr = data.map(e => {
    return { ...e, address: "KTM" }
})

// Filtering oddnumber 
let oddNumber = data.filter(e => e.id % 2 !== 0)
console.log(oddNumber)

let str = 'APPLE'.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {})