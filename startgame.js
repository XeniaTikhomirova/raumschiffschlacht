let ufoGame = null;

function startGame() {
   // to empty the local storage for shoots
   
   y = localStorage.removeItem("vTwoLocalStorage", counterShoot);
   z = localStorage.removeItem("vThreeLocalStorage", counterShootedUfos);

   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   loadImages();
   draw();
   setInterval(update, 1000 / 25);

   ufoGame = setInterval(createUfos, 2500);

   meteorGame = setInterval(createMeteors, 4500);

   asterGame = setInterval(createAsteroids, 2500);

   setInterval(checkShoots, 1000 / 10);

   setInterval(checkCollision, 1000 / 25);

   setInterval(cleanAll, 2000);

   startTimer();
};


