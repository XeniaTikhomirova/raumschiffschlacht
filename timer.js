let timer = null;
let minutes = 0;
let seconds = 0;
let milisec = 0;
let formattedTime;
let lastFormattedTime;

function startTimer() {
   timer = setInterval(updateTimer, 10);
}

function updateTimer() {
   milisec++;
   if (milisec === 1000) {
      milisec = 0;
      seconds++;
      console.log("It's SEC")
   }
   if (seconds === 60) {
      seconds = 0;
      minutes++;
      console.log("It's MIN")
   }
   formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milisec < 10 ? '0' : ''}${milisec}`;
   document.getElementById('time-elapsed').innerText = "Das Spiel läuft " + formattedTime;
   lastFormattedTime = formattedTime; 
  }

  function stopTimer() {
   clearInterval(timer);
   timer = null;
   console.log("STOP! Wir haben VERSPIELT");
   
   const timeEndElement = document.getElementById("time-end");
   
   if (timeEndElement) {
      timeEndElement.innerText = "Zeit: " + lastFormattedTime;
   } else {
      console.error("Element with ID 'time-end' not found");
      //console.log("HTML content:", document.documentElement.outerHTML);
   }

   //const popUpMsg = document.getElementById("container-end");
   //popUpMsg.style.display = "block";
   setTimeout(() => gameOver(), 3500);
}


