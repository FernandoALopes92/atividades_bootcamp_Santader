const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];


function valoresUnicos(array){
    const mySet = new Set(array);

    // return [mySet]; // isso não é um array é set
    return [...mySet]; //forma um novo array e preenche o array.
}

console.log(valoresUnicos(meuArray));