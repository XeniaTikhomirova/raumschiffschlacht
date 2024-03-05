   let timeEnd;
   let counterShootedUfos = 0;
   let z;

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

               stopTimer();
               setTimeout(() => gameOver(), 3500);
   }

   shoots.forEach(function(shoot) {
      if (shoot.x + shoot.width > ufo.x  &&
         shoot.y + shoot.height > ufo.y && 
         shoot.x < ufo.x &&
         shoot.y < ufo.y + ufo.height
         ) {

            counterShootedUfos++;
            console.log("So viel ufos " + counterShootedUfos)
            z = localStorage.setItem("vThreeLocalStorage", counterShootedUfos);

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

