/*Sorteio*/

function sorteio(){
    var max = document.querySelector('#máximo').value
    var min = document.querySelector('#mínimo').value
    var numeroUsu = document.querySelector('#numeroUsuario').value
    var numeroSorteado = Math.round((Math.random() * max) + min);
   /* alert(numeroSorteado) /*teste*/

    if(min > max){
        alert('O valor máximo é menor que o valor mínimo por favor verifique os valores')
    }

    if(numeroSorteado == numeroUsu) {
        document.querySelector('#res').value = 'Você Acertou';
        document.querySelector('#res').classList.add("acertou");
    } else{
        alert('Tente de novo') /*só para dar sensação que a página esta funcionando*/
        document.querySelector('#res').value = 'Você Errou';
        document.querySelector('#res').classList.remove("acertou");
        document.querySelector('#res').classList.add("errou");   
    }

}


