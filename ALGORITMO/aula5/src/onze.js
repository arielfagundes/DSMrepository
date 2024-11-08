
matriz = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
    ]

    i = 0;
    somatorio = 0;
    while(i < matriz.length){ 
        somatorio += matriz[0][i];
        somatorio += matriz[1][i];
        somatorio += matriz[2][i];
        i++;
    }
    console.log(`Somatório: ${somatorio}`);