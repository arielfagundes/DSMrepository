numeros = [8, 3, 4, 7, 5];
/*newList = 0;
function array(list){
    i = 0;
    while(i < list.length){
        newList += list[i];
        i++;
    }
    return newList;
};

s = array(numeros);
console.log(`Somatório: ${s}`);*/

//Outra maneira de fazer
const p = numeros.reduce(function(prev, curr){
    return prev + curr;
});
console.log(`somatório: ${p}`);