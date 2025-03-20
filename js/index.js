let ufoGame = null;

// Buttons for Play - positioning-> diff_scenarios.html
let KEY_S = false;
let KEY_UP = false;
let KEY_DOWN = false;
let KEY_Rightwards = false;
let KEY_Leftwards = false;

// The Player:
let rocket = {
   x: 20,
   y: 200,
   width: 150,
   height: 80,
   src: '../img/rocket.png'
};


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

function loadImages() {
   backgroundImage.src = '../img/background.jpg';
   rocket.img = new Image();
   rocket.img.src = rocket.src;
};


