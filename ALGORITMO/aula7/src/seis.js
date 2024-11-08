numeros = prompt("Entre com quantos números quiser separados por vírgula");

numeros = numeros.split(",");

for(i = 0; i < numeros.length; i++){
    if(parseInt(numeros[i]) % 2 === 0){
        console.log(parseInt(numeros[i]));
    }
}