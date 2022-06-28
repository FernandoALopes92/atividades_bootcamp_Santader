function soma(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
     
    }, 0); // - valor inicial - se for zero não é obrigatorio, porém ele roda uma vez mais. 
}

const array = [1, 2, 3, 4];
console.log(soma(array));