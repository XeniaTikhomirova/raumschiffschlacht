let timer;
let minutes = 0;
let seconds = 0;
let milsec = 0;
const time = document.getElementById('time-elapsed').innerText = "Das Spiel läuft " + formattedTime;

function startTimer() {
   timer = setInterval(updateTimer, 1);
};

function updateTimer() {
   milsec++;
   if (milsec === 60) {
      milsec = 0;
      seconds++;
   }
   if (seconds === 60) {
      seconds = 0;
      minutes++;
   }

   const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milisec < 10 ? '0' : ''}${milisec}`;

   //document.getElementById('info-game').innerText = "Das Spiel läuft " + formattedTime;

   time = "Das Spiel läuft " + formattedTime;

  };

//let headerTime = document.getElementById("info-game");
//let currentTime = new Date();
//seconds = currentTime.getSeconds();
//milsec = currentTime.getMilliseconds();
//seconds = (seconds < 10) ? "0" + seconds : seconds;
//milsec = (milsec < 10) ? "0" + milsec : milsec;
//let formattedTime = seconds + ":" + milsec;
//headerTime.innerHTML = "Das Spiel läuft " + formattedTime;
//updateTimer();

