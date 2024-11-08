numeros = prompt("Entre com quantos números quiser separados por vírgula");

numeros = numeros.split(",");

soma = 0;

for(i = 0; i < numeros.length; i++){
    soma += parseInt(numeros[i]);
}

console.log(`Somatório: ${soma}`);