numeros = prompt("Entre com quantos números quiser separados por vírgula");

numeros = numeros.split(",");

for(i = 0; i < numeros.length; i+=2){
    console.log(numeros[i]);
}