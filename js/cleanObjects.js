// Function to delete objects that have flown off the canvas:

function cleanAll() {

   ufos = ufos.filter(function(ufo){
      return ufo.x >= 0;
   });

   asteroids = asteroids.filter(function(asteroid){
      return asteroid.x >= 0;
   });

   meteors = meteors.filter(function(meteor){
      return meteor.x >= 0;
   });

   shoots = shoots.filter(function(shoot){
      return shoot.x <= 800;
   })
}



