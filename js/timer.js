let timer = null;
let minutes = 0;
let seconds = 0;
let milisec = 0;
let formattedTime;
let lastFormattedTime;
let x;

function startTimer() {
   timer = setInterval(updateTimer, 10);
}

function updateTimer() {
   milisec++;
   if (milisec === 1000) {
      milisec = 0;
      seconds++;
   }
   if (seconds === 60) {
      seconds = 0;
      minutes++;
   }
   formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milisec < 10 ? '0' : ''}${milisec}`;
   document.getElementById('time-elapsed').innerText = "Das Spiel läuft " + formattedTime;
   lastFormattedTime = formattedTime;
  }

  function stopTimer() {
   clearInterval(timer);
   timer = null;
   const timeEndElement = document.getElementById("lastTime");
   timeToShow = "Zeit: " + lastFormattedTime;

   if (timeEndElement) {
      timeEndElement.innerText = timeToShow;
   } else {
      console.error("Element with ID 'lastTime' not found");
   }
   localStorage.setItem("vOneLocalStorage", lastFormattedTime);
   setTimeout(() => gameOver(lastFormattedTime), 3500);
}