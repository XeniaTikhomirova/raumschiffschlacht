let gameStatus = true;
const btnCont = document.getElementById("stop-game-btn");

function pauseContinueGame() {
   if (gameStatus == true) {
      gameStatus = false;
      clearInterval(timer);

      ufo = clearInterval(ufoGame);
      asteroid = clearInterval(asterGame);
      meteor = clearInterval(meteorGame);

      btnCont.innerHTML = "Continue";
      console.log("Paused game");
   } else {
      gameStatus = true
      ufoGame = setInterval(createUfos, 2500);
      asterGame = setInterval(createAsteroids, 2500);
      meteorGame = setInterval(createMeteors, 2500);
      btnCont.innerHTML = "Pausen den Spiel";
      startTimer();
   }
};