class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	get saldo() {
		return this._saldo;
	}
	sacar(valor) {
		if (this.saldo < valor) {
			throw new Error("Saldo insuficiente.");
		}
		this.saldo -= valor;
		return valor;
	}
	depositar(valor) {
		this._saldo += valor;
	}
}

export { ContaBancaria };
