const names = ['Aashutosh', 'Bikash', 'Pemba']

const res = names.forEach((e, i, a) => {
return e * 2
})

console.log(names)
console.log(res)

const res2 = names.map((e, i, a) => {
    return e * 2
})

console.log(names)
console.log(res2)