function checkCollision() {
   ufos.forEach(function(ufo) {
      if (rocket.x + rocket.width > ufo.x  &&
         rocket.y + rocket.height > ufo.y && 
         rocket.x < ufo.x &&
         rocket.y < ufo.y + ufo.height
         ) {
            console.log("Colliosion!")
            rocket.img.src = "img/explosion.png";
            ufos = ufos.filter(u => u != ufo);

      }
   })
}