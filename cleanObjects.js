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
}



