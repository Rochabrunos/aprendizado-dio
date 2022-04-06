function arrayLengthValidation(size, arr) {
	if (!size || !arr) {
		throw new ReferenceError(
			`Os parâmetros não foram enviados corretamente, verifique-os e tente novamente`
		);
	}
	if (typeof arr !== "object") {
		throw new TypeError(
			`Tipo do array de parâmetro não esperado. O array deve ser do tipo 'object'.`
		);
	}
	if (typeof size !== "number") {
		throw new TypeError(
			`Tipo do argumento size não esperado. O argumento size deve ser do tipo 'number'.`
		);
	}
	if (arr.length !== size) {
		throw new RangeError(
			`O valor do argumento size deve ser igual ao comprimento do arr passado como argumento.`
		);
	}
	return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const size = 10;
try {
	arrayLengthValidation(size, arr);
} catch (err) {
	if (err instanceof ReferenceError) {
		console.log("Reference error: " + err);
	} else if (err instanceof TypeError) {
		console.log("Type error: " + err);
	} else if (err instanceof RangeError) {
		console.log("Range error: " + err);
	} else {
		console.log("Error não tratado " + err);
	}
}
