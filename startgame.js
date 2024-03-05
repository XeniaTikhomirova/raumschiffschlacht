let ufoGame = null;

function startGame() {
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   loadImages();
   draw();
   setInterval(update, 1000 / 25);

   ufoGame = setInterval(createUfos, 2500);

   setInterval(createMeteors, 2500);

   setInterval(createAsteroids, 2500);

   setInterval(checkShoots, 1000 / 10);

   setInterval(checkCollision, 1000 / 25);

   startTimer();
};


