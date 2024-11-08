// EXERCICIO_03

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

