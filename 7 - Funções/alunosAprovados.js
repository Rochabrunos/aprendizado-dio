function verificaAprovados(alunos, mediaFinal) {
	const aprovados = [];
	alunos.forEach((aluno) => {
		if (aluno.nota >= mediaFinal) {
			aprovados.push(aluno);
		}
	});
	return aprovados;
}

const alunos = [
	{ nome: "bruno", nota: 8 },
	{ nome: "lucas", nota: 9 },
	{ nome: "matheus", nota: 5 }
];
console.log(verificaAprovados(alunos, 8));
