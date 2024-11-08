    
    
    

    function envio(event){
        event.preventDefault();
    
        const frutas = document.getElementById('frutas').value;

        const verduras = document.getElementById('verduras')
        const verdurasSelecionadas = Array.from(verduras.selectedOptions).map(option => option.value);
        const answer = document.getElementById('answer');

        answer.innerText = `A fruta escolhida foi: ${frutas}\nA(s) verdura(s) escolhidas foram: ${verdurasSelecionadas.join(', ')}`;

    }