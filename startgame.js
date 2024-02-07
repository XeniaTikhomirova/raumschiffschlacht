function startGame() {
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   loadImages();
   draw();
   setInterval(update, 1000 / 25);
   setInterval(createUfos, 2500);
   setInterval(checkShots, 1000 / 10);
   setInterval(checkCollision, 1000 / 25);
   //calculate();
};