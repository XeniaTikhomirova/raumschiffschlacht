   //let timeEnd;
   let counterShootedUfos = 0;
   //let z;

   function checkCollision() {
      ufos.forEach(function(ufo) {
         if (rocket.x + rocket.width > ufo.x &&
            rocket.y + rocket.height > ufo.y && 
            rocket.x < ufo.x &&
            rocket.y < ufo.y + ufo.height
            ) {
               rocket.img.src = "../../img/explosion.png";
               ufos = ufos.filter(u => u != ufo);
               const popUpMsg = document.getElementById("container-end");
               popUpMsg.style.display = "block";
               stopTimer();
               setTimeout(() => gameOver(), 3500);
            }

      meteors.forEach(function(meteor) {
         if (rocket.x + rocket.width > meteor.x &&
            rocket.y + rocket.height > meteor.y && 
            rocket.x < meteor.x &&
            rocket.y < meteor.y + meteor.height
            ) {
            rocket.img.src = "../../img/explosion.png";
            meteors = meteors.filter(u => u != meteor);
            const popUpMsg = document.getElementById("container-end");
            popUpMsg.style.display = "block";
            stopTimer();
            setTimeout(() => gameOver(), 3500);
            }
      })

      asteroids.forEach(function(asteroid) {
         if (rocket.x + rocket.width > asteroid.x &&
            rocket.y + rocket.height > asteroid.y &&
            rocket.x < asteroid.x &&
            rocket.y < asteroid.y + asteroid.height )
         {
            rocket.img.src = "../../img/explosion.png";
            asteroids = asteroids.filter(u => u != asteroid);
            const popUpMsg = document.getElementById("container-end");
            popUpMsg.style.display = "block";
            stopTimer();
            setTimeout(() => gameOver(), 3500);
         }
      })
      
   shoots.forEach(function(shoot) {
      if (shoot.x + shoot.width > ufo.x  &&
         shoot.y + shoot.height > ufo.y && 
         shoot.x < ufo.x &&
         shoot.y < ufo.y + ufo.height
         ) {
            counterShootedUfos++;
            z = localStorage.setItem("vThreeLocalStorage", counterShootedUfos);
            ufo.hit = true;
            console.log("Ufo is shooted!");
            ufo.img.src = "../../img/explosion.png";
            shoots = shoots.filter(s => s != shoot);
            setTimeout(() => {
               ufos = ufos.filter(u => u != ufo)
            }, 2000);
      }
   })
   })
}

