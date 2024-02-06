function update () {
   if (KEY_UP) {
      rocket.y -= 5;
   }
   if (KEY_DOWN) {
      rocket.y += 5;
   }
   ufos.forEach(function(ufo){
      ufo.x -= 7;
   });
};