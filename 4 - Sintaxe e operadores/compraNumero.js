function compareTo(firstNumber, secondNumber) {
	if (
		typeof firstNumber !== "number" &&
		typeof secondNumber === typeof firstNumber
	) {
		console.error("Entrada inválida, são aceitos apenas números.");
		return;
	}
	const isEquals =
		(firstNumber === secondNumber ? "são" : "não são") + " iguais";
	const sum = firstNumber + secondNumber;
	const isGreaterThanTen = (sum > 10 ? "maior" : "menor") + " que 10";
	const isGreaterThanTwenty = (sum > 20 ? "maior" : "menor") + " que 20";

	console.log(
		`Os números ${firstNumber} e ${secondNumber} ${isEquals}. Sua soma é ${sum}, que é ${isGreaterThanTen} e ${isGreaterThanTwenty}. `
	);
}

compareTo();
