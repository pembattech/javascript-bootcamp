
let countLetter = (text, letter) => {
    let strtoarr = text.split('');

    let reduce1 = strtoarr.reduce((acc, curr) => {
        if (curr === letter){
            acc = acc + 1;
        }
        return acc;
    }, 0)
    console.log(reduce1)


}

countLetter('shiva prasad chapagain', 'p')