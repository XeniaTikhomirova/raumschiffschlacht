function checkShots() {
   if (KEY_SPACE) {
      let shot = {
         x: rocket.x + rocket.width,
         y: rocket.y + (rocket.width / 4.5),
         width: 60,
         height: 40,
         src: 'img/shell.png', 
         img: new Image()
      };
      shot.img.src = shot.src;
      shots.push(shot);
   }
};


