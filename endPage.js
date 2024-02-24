function endPage() {
   const timeEndFile = document.getElementById("lastTimeEndfile");
   const timeToShowValue = getTimeToShow();
   console.log(getTimeToShow)
   timeEndFile.innerText = "Zeit: " + timeToShowValue;
}
