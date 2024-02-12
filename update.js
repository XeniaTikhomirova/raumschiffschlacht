function update () {
   if (KEY_UP) {
      rocket.y -= 5;
   }
   if (KEY_DOWN) {
      rocket.y += 5;
   }
   if (KEY_Rightwards) {
      rocket.x += 5;
   }
   if (KEY_Leftwards) {
      rocket.x -= 5;
   }
 
   ufos.forEach(function(ufo) {
      if (gameStatus == true) {
         if (!ufo.hit) {
            ufo.x -= 7;
         }
      } else {
         if (!ufo.hit) {
            ufo.x -= 0;
            console.log("Ufos stopped")
         }}
   });

   shoots.forEach(function(shoot){
   shoot.x += 15;
   });

};