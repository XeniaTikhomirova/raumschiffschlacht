   const video = document.getElementById("myVideo");
   const btn = document.getElementById("myBtn");
   const btnGame = document.getElementsByClassName("game-start-btn");

   function pauseVideo() {
   if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
   } else {
      video.pause();
      btn.innerHTML = "Play";
   }
   };


