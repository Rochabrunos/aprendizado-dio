function calculaIdade(anos) {
	return `Daqui a ${anos}, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const bruno = { nome: "Bruno", idade: 26 };
console.log(calculaIdade.call(bruno, 3));
console.log(calculaIdade.apply(bruno, [6]));
