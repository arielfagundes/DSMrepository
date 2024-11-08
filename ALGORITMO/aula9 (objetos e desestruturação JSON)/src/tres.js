const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: {
    p1: 0.25,
    p2: 0.35,
    projeto: 0.4
    },
    notas: {
    p1: 8.2,
    p2: 7.5,
    projeto: 9
    }
};
const resultP1 = disciplina.pesos.p1 * disciplina.notas.p1;
const resultP2 = disciplina.pesos.p2 * disciplina.notas.p2;
const projeto = disciplina.pesos.projeto * disciplina.notas.projeto;
console.log(`Nota final: ${resultP1 + resultP2 + projeto}`);
