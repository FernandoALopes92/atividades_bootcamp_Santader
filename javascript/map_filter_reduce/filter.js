//solução 1
function filtrarPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 ===0;
}

//solução 2
function filtrarPares2(arr){
    return arr.filter(function(item) {
        return item % 2 === 0;
    });
}


const numeros = [1, 10, 55, 67, 30, 2, 4];
console.log(filtrarPares(numeros));
console.log(filtrarPares2(numeros));