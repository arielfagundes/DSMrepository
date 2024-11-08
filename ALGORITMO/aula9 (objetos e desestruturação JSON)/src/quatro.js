
const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: [0.25,0.35,0.4],
    notas: [8.2,7.5,9]
};

const resultP1 = disciplina.pesos[0] * disciplina.notas[0];
const resultP2 = disciplina.pesos[1] * disciplina.notas[1];
const resultProjeto = disciplina.pesos[2] * disciplina.notas[2];
console.log(`Nota final: ${resultP1 + resultP2 + resultProjeto}`)
