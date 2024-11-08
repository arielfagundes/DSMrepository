numeros = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
]

function matriz(number){
    
    soma = 0;
    i = 0;
    while (i < number[0].length) {
        soma += number[0][i]
        i++;
    }
    i = 0;
    while (i < number[1].length) {
        soma += number[1][i]
        i++;
    }
    i = 0;
    while (i < number[2].length) {
        soma += number[2][i]
        i++;
    }
    return soma;
}

s = matriz(numeros);
console.log(`Somatório: ${s}`);