let shoot;
let counterShoot = 0;
let y;
let providedShoot = 10;
const shootMessage = document.getElementById("no-shell");

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
      } else if (providedShoot < 1) {
         console.log("you run out of shoots!");
         shootMessage.style.display = "block";
         setTimeout(function(){
            shootMessage.style.display = "none";
         }, 3000)
         }
   }
};


