// EXERCICIO_08

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

/*
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