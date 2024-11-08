// EXERCICIO_10

let sum = 0;

let i = 0; 
while (i < 20){
    let num = Number(prompt('Digite o número:'));
    sum += num;
    
    if (sum >= 20){
        console.log(`A soma dos números é igual a: ${sum}`)
        break;
    }
    i++;
}