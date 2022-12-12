let Phoenix ={
    firstName : 'Sudip',
    lastName : 'Khadka',
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
console.log(`Fullname is ${Phoenix.firstName +" "+ Phoenix.lastName}`)
