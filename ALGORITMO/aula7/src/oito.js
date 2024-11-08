numeros = prompt("Entre com quantos números quiser separados por vírgula");

numeros = numeros.split(",");

soma = 0;

for(i = 0; i < numeros.length; i+=2){
    soma += parseInt(numeros[i]);
}

console.log(`Somatório posições pares: ${soma}`);