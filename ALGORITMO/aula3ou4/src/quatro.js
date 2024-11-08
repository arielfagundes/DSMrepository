// EXERCICIO_04

const n1 = Number(prompt('Número 1:'));
const n2 = Number(prompt('Número 2:'));

let soma = 0;

let count = n1;
while(count <= n2){
    soma += count;
    count++;
}
console.log(soma);

