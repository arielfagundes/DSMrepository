function inverte(nome){
    i = 0;
    newName = '';
    while (i < nome.length){
        newName = nome[i] + newName;
        i++;
    };
    return newName;
}

r = inverte("Mariana");
console.log(`Invertido: ${r}`);