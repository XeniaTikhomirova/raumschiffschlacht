function draw() {
   ctx.drawImage(backgroundImage, 0, 0);
   ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);

   ufos.forEach(function(ufo){
      ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
   })

   meteors.forEach(function(meteor){
      ctx.drawImage(meteor.img, meteor.x, meteor.y, meteor.width, meteor.height);
   })

   asteroids.forEach(function(asteroid){
      ctx.drawImage(asteroid.img, asteroid.x, asteroid.y, asteroid.width, asteroid.height);
   })

   shoots.forEach(function(shoot){
      ctx.drawImage(shoot.img, shoot.x, shoot.y, shoot.width, shoot.height);
   })
   requestAnimationFrame(draw);
};