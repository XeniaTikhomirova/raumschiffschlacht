let gameStatus = true;
const btnCont = document.getElementById("stop-game-btn");

function pauseContinueGame() {
   if (gameStatus == true) {
      gameStatus = false;
      ufo = clearInterval(ufoGame);
      // change way of reducing the space on the X for Ufo
      btnCont.innerHTML = "Continue";
      console.log("Paused game");
   } else {
      gameStatus = true
      ufoGame = setInterval(createUfos, 2500);
      btnCont.innerHTML = "Pausen den Spiel";
      console.log("Ive commen back!")
   }
};