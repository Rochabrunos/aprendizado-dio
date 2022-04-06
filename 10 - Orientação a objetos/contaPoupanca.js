import { ContaBancaria } from "./contaBancaria.js";

export class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero, "conta poupança");
	}
}
