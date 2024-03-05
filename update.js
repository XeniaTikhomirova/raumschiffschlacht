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

   meteors.forEach(function(meteor) {
      if (gameStatus == true) {
         if (!meteor.hit) {
            meteor.x -= 5;
         }
      } else {
         if (!meteor.hit) {
            meteor.x -= 0;
            console.log("Meteor stopped")
         }}
   });

   asteroids.forEach(function(asteroid) {
      if (gameStatus == true) {
         if (!asteroid.hit) {
            asteroid.y += 8;
            asteroid.x -= 8;
            console.log(asteroid.y)
         }
      } else {
         if (!asteroid.hit) {
            asteroid.y += 0;
            asteroid.x -= 0;
            console.log("Asteroid stopped")
         }};
   });

   shoots.forEach(function(shoot){
   shoot.x += 15;
   });

};