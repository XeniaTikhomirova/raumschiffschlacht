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
               const popUpMsg = document.getElementById("container-end");
               popUpMsg.style.display = "block";
               clearInterval(timer);
               setTimeout(() => gameOver(), 3500);
   }

   shoots.forEach(function(shoot) {
      if (shoot.x + shoot.width > ufo.x  &&
         shoot.y + shoot.height > ufo.y && 
         shoot.x < ufo.x &&
         shoot.y < ufo.y + ufo.height
         ) {
            ufo.hit = true;
            console.log("Colliosion!")
            ufo.img.src = "img/explosion.png";

            shoots = shoots.filter(s => s != shoot);

            setTimeout(() => {
               ufos = ufos.filter(u => u != ufo)
            }, 2000);
      }
   })
   })
}

