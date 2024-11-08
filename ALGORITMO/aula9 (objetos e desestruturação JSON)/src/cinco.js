const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    notas: [
    {
    peso: 0.25,
    nota: 8.2
    },
    {
    peso: 0.35,
    nota: 7.5
    },
    {
    peso: 0.4,
    nota: 9
    }
    ]
};
    const resDis = disciplina.notas; 

    const resultP1 = resDis[0].peso * resDis[0].nota;
    const resultP2 = resDis[1].peso * resDis[1].nota;
    const resultProjeto = resDis[2].peso * resDis[2].nota;
    console.log(`Nota final: ${resultP1 + resultP2 + resultProjeto}`)