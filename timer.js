function updateTimer() {
   let headerTime = document.getElementById("info-game");
   let currentTime = new Date();
   
   //let hours = currentTime.getHours();
   //let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();

   //hours = (hours < 10) ? "0" + hours : hours;
   //minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;

   //let formattedTime = hours + ":" + minutes + ":" + seconds;
   let formattedTime = seconds;
   headerTime.innerHTML = formattedTime;
}

setInterval(updateTimer, 1000);

updateTimer();


headerTime.innerHTML = time;

console.log(time)