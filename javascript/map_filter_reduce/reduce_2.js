// function subtrair(arr){
//     return arr.reduce(function(prev, current){
//         console.log({prev});
//         console.log({current});
//         return prev - current;
     
//     }, saldoDisponivel); // - valor inicial - se for zero não é obrigatorio, porém ele roda uma vez mais. 
// }

// const precos = [10.50, 23.40, 30, 4.50];
// const saldoDisponivel = 100
// console.log(subtrair(precos));

//Resolução professora

const lista =[
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev})
        console.log({current})
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));