let shoot;
let counterShoot = 0;
let y;

function checkShoots() {
   if(gameStatus){
      if (KEY_S) {
         counterShoot++;
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
      }
   }
};


