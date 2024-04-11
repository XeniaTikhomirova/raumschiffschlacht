// to show message when there is no moew shots left:
const shootMessage = document.getElementById("no-shell");

// vars for counting shots:
let shoot;
let counterShoot = 0;
let providedShoot = 10;

// to save and use data reklating to shots:
let y;

//  flag to fix a blinkong message:
let noShootsMessageShown = false;


function checkShoots() {
   if(gameStatus){
      if (KEY_S && providedShoot > 0) {
         counterShoot++;
         providedShoot--;
         console.log(`${counterShoot} shoot is made`);
         console.log(`${providedShoot} shoot is left`);
         y = localStorage.setItem("vTwoLocalStorage", counterShoot);
         shoot = {
            x: rocket.x + rocket.width,
            y: rocket.y + (rocket.width / 4.5),
            width: 60,
            height: 40,
            src: 'img/shell.png', 
            img: new Image()
         };
         shoot.img.src = shoot.src;
         shoots.push(shoot);
      } else if (providedShoot < 1 && !noShootsMessageShown) {
         showMessageNoShoots();
      }
   }
};

function showMessageNoShoots(){
   console.log("You've run out of shots!");
   shootMessage.style.display = "block";
   setTimeout(() => {
      shootMessage.style.display = "none";
   }, 2000);
   noShootsMessageShown = true;
};

