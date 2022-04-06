function uniqueValues(arrayValues) {
	const mySet = new Set(arrayValues);
	return [...mySet];
}

const values = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueValues(values));
