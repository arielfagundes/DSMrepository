/* EXERCICIO_01

let count = 10;

while(count <= 20){
    console.log(count);
    count++;
}

*/

/* EXERCICIO_02

const n1 = Number(prompt('Número 1:'))
const n2 = Number(prompt('Número 2:'))

let i = n1;
while(i <= n2){
    console.log(i);
    i++;
}
*/

/* EXERCICIO_03

const n1 = Number(prompt('Número 1:'))
const n2 = Number(prompt('Número 2:'))


if(n1 < n2){
    let i = n1;

    while(i <= n2){
        console.log(i);
        i++;
    };
}else{
    let i = n2;

    while(i <= n1){
        console.log(i);
        i++;
    };
}

*/

/* EXERCICIO_04

const n1 = Number(prompt('Número 1:'));
const n2 = Number(prompt('Número 2:'));

let soma = 0;

let count = n1;
while(count <= n2){
    soma += count;
    count++;
}
console.log(soma);

*/

/* EXERCICIO_05

let soma = 0;

let i = 1;
while(i <= 5){
    soma += Number(prompt('Digite um número: '));
    i++;
}
console.log(soma);

*/

/* EXERCICIO_06

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

*/

/* EXERCICIO_07

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

*/

/* EXERCICIO_08

const senha = "ABC";
const entrada = "";

while (senha != entrada){
    entrada = prompt('Entre com a senha: ')
    if(senha == entrada){
        console.log('Acesso liberado!');
    }else{
        console.log('Acesso negado!')
    }
}


const senha = prompt('Digite uma senha: ');

let count = 1;
while(count < 30){
    let testeOne = prompt('Digite novamente sua senha:');
    if (senha === testeOne){
        alert('Acesso liberado!');
        break;
    }else{
        alert('[ERRO] senha incorreta!');
        count++;
    }
}

*/

/* EXERCICIO_09

const senha = prompt('Digite uma senha: ');
alert('Senha salva!')

let count = 0;
while(count < 3){
    let testeOne = prompt('Digite novamente sua senha:');
    if (senha !== testeOne){
        alert('[ERRO] senha incorreta!');
        count++;
    }else{
        alert('Acesso liberado!');
        break;
    }       
}

if(count === 3){
    alert('[ERRO] Limite excedido de tentativas!')
}

*/

/* EXERCICIO_10

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

*/