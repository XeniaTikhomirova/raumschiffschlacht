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

   shots.forEach(function(shot) {
      if (shot.x + shot.width > ufo.x  &&
         shot.y + shot.height > ufo.y && 
         shot.x < ufo.x &&
         shot.y < ufo.y + ufo.height
         ) {
            ufo.hit = true;
            console.log("Colliosion!")
            ufo.img.src = "img/explosion.png";

            shots = shots.filter(s => s != shot);

            setTimeout(() => {
               ufos = ufos.filter(u => u != ufo)
            }, 2000);
      }
   })


   })


}
