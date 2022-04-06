import { ContaBancaria } from "./contaBancaria.js";

export class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero, "conta corrente");
		this.cartaoCredito = cartaoCredito;
	}
}
