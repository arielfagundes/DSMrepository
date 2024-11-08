// EXERCICIO_06

let menor = 1000000000000000;

let i = 1;
while(i <= 5){
    nro = Number(prompt('Digite um número: '));
    if(nro < menor){
        menor = nro;
    }
    i++;
}
console.log(menor);

