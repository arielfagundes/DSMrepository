// EXERCICIO_07

let maior = -1000000000000;

let i = 1;
while(i <= 5){
    nro = Number(prompt('Digite um número: '));
    if(nro > maior){
        maior = nro;
    }
    i++;
}
console.log(maior);