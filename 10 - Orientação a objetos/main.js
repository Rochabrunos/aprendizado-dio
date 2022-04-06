import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { ContaUniversitaria } from "./contaUniversitaria.js";

const contaCorrente = new ContaCorrente(0001, 5243, 9903);
contaCorrente.depositar(300);
console.log(contaCorrente.saldo);

const contaPoupanca = new ContaPoupanca(5101, 6877);
contaPoupanca.depositar(250);
console.log(contaPoupanca.saldo);

const contaUniversitaria = new ContaUniversitaria(8497, 3647);
contaUniversitaria.depositar(650);
console.log(contaUniversitaria.saldo);
try {
	contaUniversitaria.sacar(520);
} catch (err) {
	console.log(err);
}
