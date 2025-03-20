// this function update() controls if the game is paused or not.
// 1) when game normally runs: rocket moves; ufo, astroid, meteor - fly; shooting happens;
// 2) otherwise, rocket is unabled, ufo, astroid, meteor - stoped, shooting - diasbled;

function update () {
   // if game runs (not paused) rocket moves as follows (see Rules of the game):
   if (gameStatus == true) {
      if (KEY_UP && rocket.y > 5) {
         rocket.y -= 5;
         //console.log(`rocket position on Y Axe ist ${rocket.y}`)
      }
      if (KEY_DOWN && rocket.y < 765) {
         rocket.y += 5;
         //console.log(`rocket position on Y Axe ist ${rocket.y}`)
      }
      if (KEY_Rightwards && rocket.x < 1085) {
         rocket.x += 5;
         //console.log(`rocket position on X Axe ist ${rocket.x}`)
      }
      if (KEY_Leftwards && rocket.x > 0) {
         rocket.x -= 5;
         //console.log(`rocket position on X Axe ist ${rocket.x}`)
      }
   }
 
   ufos.forEach(function(ufo) {
   // the way the "shooting" action runs, i.e. "-7" px in sec, when NOT paused:
      if (gameStatus == true) {
         if (!ufo.hit) {
            ufo.x -= 7;
         }
   // when game paused:
      } else {
         if (!ufo.hit) {
            ufo.x -= 0;
         }}
   });

   meteors.forEach(function(meteor) {
   // the way the meteor flies, i.e. "-5" px in sec, when NOT paused:
      if (gameStatus == true) {
         if (!meteor.hit) {
            meteor.x -= 5;
         }
      } else {
   // when paused:
         if (!meteor.hit) {
            meteor.x -= 0;
         }}
   });

   asteroids.forEach(function(asteroid) {
      if (gameStatus == true) {
      // the way the asteroid flies, i.e. "-/+2" px in sec, when NOT paused:
         if (!asteroid.hit) {
            asteroid.y += 2;
            asteroid.x -= 2;
         }
      } else {
      // when paused:
         if (!asteroid.hit) {
            asteroid.y += 0;
            asteroid.x -= 0;
         }};
   });

   shoots.forEach(function(shoot){
      // the way the shoot goes, i.e. "+15" px in sec, when NOT paused:
      if (gameStatus == true) {
      shoot.x += 15;
      } else {
      // when paused:
         shoot.x += 0;
      }
   });
};