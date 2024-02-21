let shoot;

function checkShoots() {
   if(gameStatus){
      if (KEY_S) {
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


