console.log(comparaNumeros(10,20));

function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'defina dois números'
    const fraseComparacao = comparacao(num1, num2);
    const fraseSoma = soma(num1, num2);

    return `${fraseComparacao} ${fraseSoma}`;
 }

function comparacao(num1, num2){

  if(num1 === num2){
    return `Os numeros ${num1} e ${num2} são iguais`
   }
    return `Os numeros ${num1} e ${num2} não são iguais`;   
}

function soma(num1, num2){
   const soma = num1 + num2;
   let comparaDez = 'menor';
   let comparaVinte = 'menor';

   if(soma > 10){
        comparaDez = 'maior';
   }

   if(soma > 20){
    comparaVinte = 'maior';
   }

   return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`
}


// Resposta professora:

// function comparaNumeros(num1, num2) {
// 	const primeiraFrase = criaPrimeiraFrase(num1, num2);
// 	const segundaFrase = criaSegundaFrase(num1, num2);

// 	return `${primeiraFrase} ${segundaFrase}`;
// }

// function criaPrimeiraFrase(num1, num2) {
// 	let primeiraFrase = `Os números ${num1} e ${num2}`;
// 	let simNao = 'não';

// 	if (num1 === num2) {
// 		simNao = '';
// 	}

// 	return `${primeiraFrase} ${simNao} são iguais.`;
// }

// function criaSegundaFrase(num1, num2) {
// 	const soma = num1 + num2;
// 	let comparaDez = 'menor';
// 	let comparaVinte = 'menor';

// 	if (soma > 10) {
// 		comparaDez = 'maior';
// 	}

// 	if (soma > 20) {
// 		comparaVinte = 'maior';
// 	}

// 	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
// }

// console.log(comparaNumeros(10, 10));