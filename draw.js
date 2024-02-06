function draw() {
   ctx.drawImage(backgroundImage, 0, 0);
   ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);

   ufos.forEach(function(ufo){
      ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
   })
   requestAnimationFrame(draw);
};