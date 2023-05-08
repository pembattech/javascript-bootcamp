let Phoenix ={
    firstName : 'Pemba',
    lastName : 'Tamang',
    gender: 'Male',
    age:20,
    daillyStep: [2200,2400, 2500, 1000, 3200, 2000,1280],
    weight:70,
    height:170,
    BMI: function()
    {
        return this.weight / (this.height ** this.height)
    }
}
// console.log(`Fullname is ${Phoenix.firstName +" "+ Phoenix.lastName}`)


let person = {
    firstName : 'Pemba',
    lastName : 'Tamang',
    currentYear: 2079,
    canVote: function(year)
    {
        let age = this.currentYear - year
        return this.age > 18 ? console.log(`${person.firstName} ${person.lastName} can vote.`) : console.log(`${person.firstName} ${person.lastName} can vote.`)
    }
}

person.canVote(2057)

const ne = `mississippi`
const output =[...ne].reduce((acc,curr)=>{ //(spread operator) ...three dots are used to copy object  value 
    acc [curr]? acc[curr]++ : acc[curr]=1
    return acc;

},{})
console.log(output)

let str1="apple".split('').reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0) + 1;
    return acc;
},{})
console.log(str1)

