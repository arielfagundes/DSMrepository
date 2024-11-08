// EXERCICIO_09

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