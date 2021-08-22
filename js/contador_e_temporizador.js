/*Contador*/

var contador = document.querySelector('.cliques');
document.querySelector('#cliquesApresen').addEventListener('click',
 function(){
  var numero = parseInt(contador.innerHTML) + 1;
  contador.innerHTML = numero;
});

/*Temporizador*/
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
          timer = duration;
      }
      if(seconds == 0){
          var res = parseInt(document.querySelector('#clique').value)
          var cliquesPerSecond = res / 20
          confirm('parabéns você fez ' + cliquesPerSecond + ' cliques por segundo')    
          location.reload();
      }
  }, 1000);
}
function iniciarTimer() {
  var duration = 60 / 3; // Converter para segundos
  display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
  
}; 

/*refresh*/

var btn = document.querySelector("#refresh");
  btn.addEventListener("click", function() {
      location.reload();
  });