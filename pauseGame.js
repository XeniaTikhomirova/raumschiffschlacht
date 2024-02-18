let gameStatus = true;
const btnCont = document.getElementById("stop-game-btn");

function pauseContinueGame() {
   if (gameStatus == true) {
      gameStatus = false;

      //Stop timer here
      //timer = clearInterval(startTimer);

      ufo = clearInterval(ufoGame);
      btnCont.innerHTML = "Continue";
      console.log("Paused game");
   } else {
      gameStatus = true
      ufoGame = setInterval(createUfos, 2500);
      btnCont.innerHTML = "Pausen den Spiel";
      console.log("Ive commen back!")
   }
};