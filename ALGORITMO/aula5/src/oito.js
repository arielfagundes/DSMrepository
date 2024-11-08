pesos = [0.4,0.2,0.1,0.3]
notas = [8.2,5.0,10.0,9.1]

somatorioMult = 0;
i = 0;
while(i <= pesos.length - 1){
    somatorioMult += pesos[i] * notas[i];
    i++;
}
console.log(somatorioMult);
