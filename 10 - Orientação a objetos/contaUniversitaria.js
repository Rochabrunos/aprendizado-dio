import { ContaBancaria } from "./contaBancaria.js";

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero, "conta universitaria");
	}
	sacar(valor) {
		if (valor > this.saldo) {
			throw new Error("Saldo insuficiente.");
		}
		if (valor >= 500) {
			throw new Error(
				"É possível apenas sacar valores menores de 500 reais."
			);
		}
		this.saldo -= valor;
		return valor;
	}
}

export { ContaUniversitaria };
