function endPage(x) {
   x = localStorage.getItem("vOneLocalStorage");
   console.log(x)
   const timeEndFile = document.getElementById("lastTimeEndFile");
   timeEndFile.innerText = "Zeit: " + x;
}

