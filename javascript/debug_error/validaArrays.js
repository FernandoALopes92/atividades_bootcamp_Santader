function validaArrays(array, num) {
	try {
		if (!array && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof array !== 'object')
			throw new TypeError('Array precisa ser do tipo object!');

		if (typeof num !== 'number')
			throw new TypeError('Num precisa ser do tipo Number!');

		if (array.length !== num) throw new RangeError('Tamanho do array inválido!');

		return array;
        
	} catch (e) {
        if (e instanceof ReferenceError) {
			console.log('Este erro é um ReferenceError!');
			console.log(e.message);//console.log(e.name) console.log(e.message)
		} else if (e instanceof TypeError) {
			console.log('Este erro é um TypeError!');
			console.log(e.message);  
		} else if (e instanceof RangeError) {
			console.log('Este erro é um RangeError!');
			console.log(e.message);
		} else {
			console.log('Tipo de erro não esperado:');
			console.log(e.message);
		}
	}
}

console.log(validaArrays()); // ReferenceError;
console.log(validaArrays(5, 5)); // TypeError;
console.log(validaArrays([], 'a')); // TypeError Number;
console.log(validaArrays([], 5)); // RangeError Tamanho do Array;
console.log(validaArrays([1, 2, 3, 4, 5], 5)); // Array certo