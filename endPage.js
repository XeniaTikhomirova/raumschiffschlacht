function endPage() {
   x = localStorage.getItem("vOneLocalStorage");
   y = localStorage.getItem("vTwoLocalStorage");
   z = localStorage.getItem("vThreeLocalStorage");

   const timeEndFile = document.getElementById("lastTimeEndFile");
   const scoreSchoots = document.getElementById("counterShoot");
   const scoreUfos = document.getElementById("counterShootUfos");

   timeEndFile.innerText = "Zeit: " + x;
   scoreSchoots.innerText = "Anzahl der gemachtenen Schüsse: " + y;
   scoreUfos.innerText = "Anzahl der zerstörten Ufos: " + z;
}

