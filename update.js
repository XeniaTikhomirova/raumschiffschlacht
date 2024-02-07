function update () {
   if (KEY_UP) {
      rocket.y -= 5;
   }
   if (KEY_DOWN) {
      rocket.y += 5;
   }
   //if (KEY_Rightwards) {
   //   rocket.x += 5;
   //}
   //if (KEY_Leftwards) {
   //   rocket.x -= 5;
   //}
 
   ufos.forEach(function(ufo) {
      if (!ufo.hit) {
          ufo.x -= 7;
      }
   });

   shoots.forEach(function(shoot){
   shoot.x += 15;
   });

};