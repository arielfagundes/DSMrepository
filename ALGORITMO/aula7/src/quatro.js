numeros = prompt("Entre com quantos números quiser separados por vírgula");

numeros = numeros.split(",");

for(i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

