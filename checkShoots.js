let shoot;
let counterShoot = 0;
let y;
let providedShoot = 10;
let timeOutId;
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
         showMessageNoShoots()
         }
   }
};

async function showMessageNoShoots(){
   console.log("You've run out of shots!");
   shootMessage.style.display = "block";
   await new Promise(resolve => setTimeout(resolve, 4000));
   shootMessage.style.display = "none";
}

