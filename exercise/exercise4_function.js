let cutPieces = (fruit) => { return fruit * 4 }

let fruitProcessor = (apple, gauva) => {
    let appplePieces = cutPieces(apple);
    let gauvaPieces = cutPieces(gauva);
    let juice = `juice of ${appplePieces} apple pieces and ${gauvaPieces} gauva pieces is prepared`;
    return juice
}

console.log(fruitProcessor(4, 5))
