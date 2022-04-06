alert("Amigo estou aqui!");

// boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof vOuF);

// number
var qualquerValor = 1;
console.log(qualquerValor);
console.log(typeof qualquerValor);

// string
var nome = "diana";
console.log(nome);
console.log(typeof nome);

// funcao
var minhaFuncao = function () {};
console.log(minhaFuncao);
console.log(typeof minhaFuncao);

// escopo

var escopo = "global";

function escopoLocal() {
	let escopo = "local";
	console.log(escopo); //local
}

console.log(escopo); // global

escopoLocal();

// Operadores aritmeticos

const adicao  = 1 + 1;
console.log(adicao); // 2

const subtracao = 2 - 1;
console.log(subtracao); // 1

const multiplicacao = 2 * 2;
console.log(multiplicacao); // 4

const divisao = 6 / 4;
console.log(divisao); // 1.5

const resto = 6 % 4;
console.log(resto); // 2

// operadores relacionais
const maiorQue =  1 > 2;
console.log(maiorQue); // false

const maiorOuIgualQue = 4 >= 5;
console.log(maiorOuIgualQue); // false

const menorQue = 3 < 8;
console.log(menorQue); // true

const menorOuIgualQue = 3 <= 3;
console.log(menorOuIgualQue); // true
